import type { WatchEntry } from "../types";
import "../styles/EntryCard.css";

type EntryCardProps = {
  entry: WatchEntry;
  onEdit: (entry: WatchEntry) => void;
  onDelete: (id: string) => void;
};

function formatStatus(status: WatchEntry["status"]) {
  if (status === "watched") return "Watched";
  if (status === "watching") return "Watching";
  return "Want to watch";
}

export function EntryCard({ entry, onEdit, onDelete }: EntryCardProps) {
  return (
    <article className="entry-card">
      <div className="poster-wrapper">
        {entry.picture ? (
          <img src={entry.picture} alt={entry.name} />
        ) : (
          <div className="poster-placeholder">No image</div>
        )}
      </div>

      <div className="entry-content">
        <div className="entry-title-row">
          <h2>{entry.name}</h2>
          { (entry.rating <= 3) && <span className="bad-rating">★ {entry.rating}/10</span> }
          { (4 <= entry.rating && entry.rating <= 6) && <span className="mid-rating">★ {entry.rating}/10</span> }
          { (7 <= entry.rating) && <span className="good-rating">★ {entry.rating}/10</span> }
        </div>

        <div className="entry-tags">
          {entry.category && <span>{entry.category}</span>}
          <span>{formatStatus(entry.status)}</span>
        </div>

        {entry.progress && (
          <p className="entry-progress">
            <strong>Progress:</strong> {entry.progress || "Not added"} minutes(s)
          </p>
        )}

        {entry.whereToWatch && (
          <p className="entry-platform">
            <strong>Where:</strong> {entry.whereToWatch || "Not added"}
          </p>
        )}

        {entry.review && <p className="entry-review">{entry.review}</p>}

        <div className="entry-actions">
          <button onClick={() => onEdit(entry)}>Edit</button>
          <button className="danger-button" onClick={() => onDelete(entry.id)}>
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}