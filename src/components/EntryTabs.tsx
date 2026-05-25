import type { MediaType } from "../types";

type EntryTabsProps = {
  activeTab: MediaType;
  onTabChange: (tab: MediaType) => void;
  movieCount: number;
  seriesCount: number;
};

export function EntryTabs({
  activeTab,
  onTabChange,
  movieCount,
  seriesCount,
}: EntryTabsProps) {
  return (
    <div className="flex rounded-full border border-[var(--outline-color)] bg-[var(--card-color)] p-1 shadow-lg">
      <button
        className={
          activeTab === "movie"
            ? "rounded-full bg-[var(--button-color)] px-5 py-3 font-black text-white transition"
            : "rounded-full bg-transparent px-5 py-3 font-black text-[var(--text-color)] transition hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]"
        }
        onClick={() => onTabChange("movie")}
      >
        Movies{" "}
      </button>

      <button
        className={
          activeTab === "series"
            ? "rounded-full bg-[var(--button-color)] px-5 py-3 font-black text-white transition"
            : "rounded-full bg-transparent px-5 py-3 font-black text-[var(--text-color)] transition hover:bg-[color-mix(in_srgb,var(--outline-color)_18%,transparent)]"
        }
        onClick={() => onTabChange("series")}
      >
        Series{" "}
      </button>
    </div>
  );
}