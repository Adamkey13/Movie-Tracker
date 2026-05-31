import type { WatchStatus } from "../types";
import { FilterCombobox } from "./FilterComboBox";
import { StatusSelect } from "./StatusSelect";

type FilterStatus = WatchStatus | "all";

type EntryFiltersProps = {
  searchText: string;
  selectedCategory: string;
  selectedStatus: FilterStatus;
  selectedWhereToWatch: string;
  categoryOptions: string[];
  whereToWatchOptions: string[];
  onSearchTextChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
  onStatusChange: (value: FilterStatus) => void;
  onWhereToWatchChange: (value: string) => void;
  onClearFilters: () => void;
};

export function EntryFilters({
  searchText,
  selectedCategory,
  selectedStatus,
  selectedWhereToWatch,
  categoryOptions,
  whereToWatchOptions,
  onSearchTextChange,
  onCategoryChange,
  onStatusChange,
  onWhereToWatchChange,
  onClearFilters,
}: EntryFiltersProps) {
  return (
    <section className="relative z-30 mb-6 grid gap-4 rounded-[28px] border-2 border-[var(--outline-color)] bg-[color-mix(in_srgb,var(--card-color)_88%,transparent)] p-5 shadow-xl backdrop-blur md:grid-cols-2 lg:grid-cols-5">
      <label className="grid gap-2 text-sm font-bold text-[var(--muted-color)]">
        Search by title
        <input
          className="h-14 w-full rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] px-5 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]"
          type="text"
          placeholder="Start typing..."
          value={searchText}
          onInput={(e) =>
            onSearchTextChange((e.target as HTMLInputElement).value)
          }
        />
      </label>

      <FilterCombobox
        label="Category"
        value={selectedCategory}
        options={categoryOptions}
        allLabel="All categories"
        onChange={onCategoryChange}
      />

      <StatusSelect
        value={selectedStatus}
        onChange={onStatusChange}
      />

      <FilterCombobox
        label="Where to watch"
        value={selectedWhereToWatch}
        options={whereToWatchOptions}
        allLabel="All platforms"
        onChange={onWhereToWatchChange}
      />

      <div className="grid gap-2 text-sm font-bold text-[var(--muted-color)]">
        <span className="invisible">Actions</span>

        <button
          className="cursor-pointer h-14 w-full rounded-full border-2 border-[var(--outline-color)] bg-transparent px-5 font-bold text-[var(--text-color)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]"
          onClick={onClearFilters}
        >
          Clear filters
        </button>
      </div>


    </section>
  );
}