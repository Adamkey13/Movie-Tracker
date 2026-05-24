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
    <div className="tabs">
      <button
        className={activeTab === "movie" ? "tab active" : "tab"}
        onClick={() => onTabChange("movie")}
      >
        Movies <span>{movieCount}</span>
      </button>

      <button
        className={activeTab === "series" ? "tab active" : "tab"}
        onClick={() => onTabChange("series")}
      >
        Series <span>{seriesCount}</span>
      </button>
    </div>
  );
}