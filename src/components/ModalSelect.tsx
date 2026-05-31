import { useEffect, useRef, useState } from "preact/hooks";

type SelectOption<T extends string> = {
  value: T;
  label: string;
};

type ModalSelectProps<T extends string> = {
  label: string;
  value: T;
  options: SelectOption<T>[];
  onChange: (value: T) => void;
};

function UpDownIcon() {
  return (
    <span className="relative block h-5 w-5">
      <span className="absolute left-1/2 top-[4px] h-2 w-2 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-current" />
      <span className="absolute bottom-[2px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-current" />
    </span>
  );
}

export function ModalSelect<T extends string>({
  label,
  value,
  options,
  onChange,
}: ModalSelectProps<T>) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption =
    options.find((option) => option.value === value) ?? options[0];

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

  function selectOption(newValue: T) {
    onChange(newValue);
    setOpen(false);
  }

  return (
    <div
      ref={wrapperRef}
      className={`relative grid gap-2 text-sm font-medium text-[var(--muted-color)] ${
        open ? "z-[200]" : "z-10"
      }`}
    >
      <span>{label}</span>

      <button
        type="button"
        className="cursor-pointer relative h-[50px] w-full rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] px-4 pr-14 text-left font-semibold text-[var(--text-color)] outline-none transition hover:bg-[color-mix(in_srgb,var(--outline-color)_12%,transparent)] focus:ring-2 focus:ring-[var(--accent-color)]"
        onClick={() => setOpen(!open)}
      >
        <span>{selectedOption.label}</span>

        <span className="pointer-events-none absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-[var(--muted-color)]">
          <UpDownIcon />
        </span>
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-full z-[250] mt-2 grid gap-1 rounded-2xl border border-[var(--outline-color)] bg-[var(--card-color)] p-2 shadow-2xl">
          {options.map((option) => {
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
                onClick={() => selectOption(option.value)}
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