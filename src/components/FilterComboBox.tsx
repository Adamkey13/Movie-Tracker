import { useEffect, useMemo, useRef, useState } from "preact/hooks";

type FilterComboboxProps = {
  label: string;
  value: string;
  options: string[];
  allLabel: string;
  onChange: (value: string) => void;
};

function UpDownIcon() {
  return (
    <span className="relative block h-5 w-5">
      <span className="absolute left-1/2 top-[4px] h-2 w-2 -translate-x-1/2 rotate-45 border-l-2 border-t-2 border-current" />
      <span className="absolute bottom-[2px] left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-current" />
    </span>
  );
}

export function FilterCombobox({
  label,
  value,
  options,
  allLabel,
  onChange,
}: FilterComboboxProps) {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);

  const shownValue = value === "all" ? allLabel : value;

  const filteredOptions = useMemo(() => {
    const normalizedSearch = searchValue.trim().toLowerCase();

    if (!normalizedSearch) {
      return options;
    }

    return options.filter((option) =>
      option.toLowerCase().startsWith(normalizedSearch)
    );
  }, [options, searchValue]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setSearchValue("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function selectOption(option: string) {
    onChange(option);
    setSearchValue("");
    setOpen(false);
  }

  function handleInput(value: string) {
    setSearchValue(value);
    setOpen(true);
  }

  return (
    <div
      ref={wrapperRef}
      className={`relative grid gap-2 text-sm font-bold text-[var(--muted-color)] ${
        open ? "z-50" : "z-10"
      }`}
    >
      <span>{label}</span>

      <div className="relative">
        <input
          className="h-14 w-full rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] px-5 pr-16 font-semibold text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]"
          type="text"
          value={open ? searchValue : shownValue}
          placeholder={allLabel}
          onFocus={() => {
            setOpen(true);
            setSearchValue("");
          }}
          onInput={(e) => handleInput((e.target as HTMLInputElement).value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && filteredOptions.length > 0) {
              selectOption(filteredOptions[0]);
            }

            if (e.key === "Escape") {
              setOpen(false);
              setSearchValue("");
            }
          }}
        />

        <span className="pointer-events-none absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-transparent text-[var(--muted-color)]">
          <UpDownIcon />
        </span>
      </div>

      {open && (
        <div className="absolute left-0 right-0 top-full z-[100] mt-2 max-h-56 overflow-y-auto rounded-2xl border border-[var(--outline-color)] bg-[var(--card-color)] p-2 shadow-2xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--accent-color)]">
          <button
            type="button"
            className={
              value === "all"
                ? "flex w-full items-center justify-between rounded-xl bg-[color-mix(in_srgb,var(--accent-color)_22%,transparent)] px-4 py-3 text-left font-semibold text-[var(--outline-color)]"
                : "flex w-full items-center justify-between rounded-xl bg-transparent px-4 py-3 text-left font-semibold text-[var(--text-color)] hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]"
            }
            onClick={() => selectOption("all")}
          >
            <span>{allLabel}</span>
            {value === "all" && <span>✓</span>}
          </button>

          {filteredOptions.length === 0 ? (
            <p className="m-0 px-4 py-3 text-[var(--muted-color)]">
              No matches
            </p>
          ) : (
            filteredOptions.map((option) => (
              <button
                key={option}
                type="button"
                className={
                  value === option
                    ? "flex w-full items-center justify-between rounded-xl bg-[color-mix(in_srgb,var(--accent-color)_22%,transparent)] px-4 py-3 text-left font-semibold text-[var(--outline-color)]"
                    : "flex w-full items-center justify-between rounded-xl bg-transparent px-4 py-3 text-left font-semibold text-[var(--text-color)] hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]"
                }
                onClick={() => selectOption(option)}
              >
                <span>{option}</span>
                {value === option && <span>✓</span>}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}