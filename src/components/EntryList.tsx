import type { WatchEntry } from "../types";
import { EntryCard } from "./EntryCard";

type EntryListProps = {
  entries: WatchEntry[];
  onEdit: (entry: WatchEntry) => void;
  onDelete: (entry: WatchEntry) => void;
};

export function EntryList({ entries, onEdit, onDelete }: EntryListProps) {
  if (entries.length === 0) {
    return (
      <section className="rounded-[28px] border border-dashed border-[var(--outline-color)] bg-[color-mix(in_srgb,var(--card-color)_85%,transparent)] px-5 py-16 text-center shadow-xl backdrop-blur">
        <h2 className="m-0 text-2xl font-black text-[var(--text-color)]">
          No entries yet
        </h2>

        <p className="mx-auto mt-3 max-w-md text-[var(--muted-color)]">
          Add your first movie or series to start your journal.
        </p>
      </section>
    );
  }

  return (
    <section className="grid items-stretch gap-5 [grid-template-columns:repeat(auto-fill,minmax(310px,1fr))]">
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