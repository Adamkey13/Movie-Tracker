import type { WatchEntry } from "../types";
import { EntryCard } from "./EntryCard";

type EntryListProps = {
  entries: WatchEntry[];
  onEdit: (entry: WatchEntry) => void;
  onDelete: (id: string) => void;
};

export function EntryList({ entries, onEdit, onDelete }: EntryListProps) {
  if (entries.length === 0) {
    return (
      <section className="empty-state">
        <h2>No entries yet</h2>
        <p>Add your first movie or series to start your journal.</p>
      </section>
    );
  }

  return (
    <section className="entry-grid">
      {entries.map((entry) => (
        <EntryCard
          key={entry.id}
          entry={entry}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </section>
  );
}