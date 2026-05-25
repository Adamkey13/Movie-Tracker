import type { WatchStatus } from "../types";

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
    <section className="mb-6 grid gap-4 rounded-[28px] border border-[var(--outline-color)] bg-[color-mix(in_srgb,var(--card-color)_88%,transparent)] p-5 shadow-xl backdrop-blur md:grid-cols-2 lg:grid-cols-5">
      <label className="grid gap-2 text-sm font-bold text-[var(--muted-color)]">
        Search by title
        <input
          className="rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-3 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]"
          type="text"
          placeholder="Start typing..."
          value={searchText}
          onInput={(e) =>
            onSearchTextChange((e.target as HTMLInputElement).value)
          }
        />
      </label>

      <label className="grid gap-2 text-sm font-bold text-[var(--muted-color)]">
        Category
        <select
          className="rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-3 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]"
          value={selectedCategory}
          onInput={(e) =>
            onCategoryChange((e.target as HTMLSelectElement).value)
          }
        >
          <option value="all">All categories</option>

          {categoryOptions.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-bold text-[var(--muted-color)]">
        Status
        <select
          className="rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-3 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]"
          value={selectedStatus}
          onInput={(e) =>
            onStatusChange((e.target as HTMLSelectElement).value as FilterStatus)
          }
        >
          <option value="all">All statuses</option>
          <option value="want-to-watch">Want to watch</option>
          <option value="watching">Watching</option>
          <option value="watched">Watched</option>
        </select>
      </label>

      <label className="grid gap-2 text-sm font-bold text-[var(--muted-color)]">
        Where to watch
        <select
          className="rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-3 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]"
          value={selectedWhereToWatch}
          onInput={(e) =>
            onWhereToWatchChange((e.target as HTMLSelectElement).value)
          }
        >
          <option value="all">All platforms</option>

          {whereToWatchOptions.map((platform) => (
            <option key={platform} value={platform}>
              {platform}
            </option>
          ))}
        </select>
      </label>

      <div className="flex items-end">
        <button
          className="w-full rounded-full border border-[var(--outline-color)] bg-transparent px-5 py-3 font-black text-[var(--text-color)] transition hover:-translate-y-0.5 hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]"
          onClick={onClearFilters}
        >
          Clear filters
        </button>
      </div>
    </section>
  );
}