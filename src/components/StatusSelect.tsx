import { useEffect, useRef, useState } from "preact/hooks";
import type { WatchStatus } from "../types";

type FilterStatus = WatchStatus | "all";

type StatusOption = {
  value: FilterStatus;
  label: string;
};

type StatusSelectProps = {
  value: FilterStatus;
  onChange: (value: FilterStatus) => void;
};

const statusOptions: StatusOption[] = [
  {
    value: "all",
    label: "All statuses",
  },
  {
    value: "want-to-watch",
    label: "Want to watch",
  },
  {
    value: "watching",
    label: "Watching",
  },
  {
    value: "watched",
    label: "Watched",
  },
];

function UpDownIcon() {
  return (
    <span className="relative block h-5 w-5">
      <span className="absolute left-1/2 top-[4px] h-2 w-2 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-current" />
      <span className="absolute bottom-[2px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-current" />
    </span>
  );
}

export function StatusSelect({ value, onChange }: StatusSelectProps) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    statusOptions.find((option) => option.value === value) ?? statusOptions[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function selectStatus(status: FilterStatus) {
    onChange(status);
    setOpen(false);
  }

  return (
    <div
      ref={wrapperRef}
      className={`relative grid gap-2 text-sm font-bold text-[var(--muted-color)] ${
        open ? "z-50" : "z-10"
      }`}
    >
      <span>Status</span>

      <button
        type="button"
        className="cursor-pointer relative h-14 w-full rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] px-5 pr-16 text-left font-semibold text-[var(--text-color)] outline-none transition hover:bg-[color-mix(in_srgb,var(--outline-color)_12%,transparent)] focus:ring-2 focus:ring-[var(--accent-color)]"
        onClick={() => setOpen(!open)}
      >
        <span>{selectedOption.label}</span>

        <span className="pointer-events-none absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-[var(--muted-color)]">
          <UpDownIcon />
        </span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-[100] mt-2 grid gap-1 rounded-2xl border border-[var(--outline-color)] bg-[var(--card-color)] p-2 shadow-2xl">
          {statusOptions.map((option) => {
            const selected = option.value === value;

            return (
              <button
                key={option.value}
                type="button"
                className={
                  selected
                    ? "flex w-full items-center justify-between rounded-xl bg-[color-mix(in_srgb,var(--accent-color)_22%,transparent)] px-4 py-3 text-left font-semibold text-[var(--outline-color)]"
                    : "flex w-full items-center justify-between rounded-xl bg-transparent px-4 py-3 text-left font-semibold text-[var(--text-color)] hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]"
                }
                onClick={() => selectStatus(option.value)}
              >
                <span>{option.label}</span>
                {selected && <span>✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}