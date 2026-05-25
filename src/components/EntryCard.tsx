import type { WatchEntry } from "../types";

type EntryCardProps = {
  entry: WatchEntry;
  onEdit: (entry: WatchEntry) => void;
  onDelete: (entry: WatchEntry) => void;
};

function formatStatus(status: WatchEntry["status"]) {
  if (status === "watched") return "Watched";
  if (status === "watching") return "Watching";
  return "Want to watch";
}

function getRatingColor(rating: number) {
  if (rating >= 8) return "text-green-400";
  if (rating >= 5) return "text-yellow-400";
  return "text-red-400";
}

export function EntryCard({ entry, onEdit, onDelete }: EntryCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[28px] drop-shadow-lg border-[0px] border-[var(--outline-color)] bg-[color-mix(in_srgb,var(--card-color)_92%,transparent)] shadow-2xl backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_10px_15px_-3px_rgb(0,0,0,0.3),0_4px_6px_-2px_rgb(0,0,0,0.2)] hover:border-x-[1px]">
      <div className="h-[250px] bg-white/5">
        {entry.picture ? (
          <img
            className="h-full w-full object-cover"
            src={entry.picture}
            alt={entry.name}
          />
        ) : (
          <div className="grid h-full place-items-center text-[var(--muted-color)]">
            No image
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-4">
          <h2 className="m-0 text-2xl font-black leading-tight">{entry.name}</h2>

          <span className={`whitespace-nowrap font-black ${getRatingColor(entry.rating)}`}>
            ★ {entry.rating}/10
          </span>
        </div>

        <div className="my-4 flex flex-wrap gap-2">
          {entry.category && (
            <span className="rounded-full border-[2px] border-[var(--outline-color)] px-3 py-1 text-xs font-bold text-[var(--muted-color)]">
              {entry.category}
            </span>
          )}

          <span className="rounded-full border-[2px] border-[var(--outline-color)] px-3 py-1 text-xs font-bold text-[var(--muted-color)]">
            {formatStatus(entry.status)}
          </span>
        </div>

        <p className="m-0 mt-1 leading-6 text-[var(--muted-color)]">
          <strong className="text-[var(--text-color)]">Progress:</strong>{" "}
          {entry.progress || "Not added"}
        </p>

        <p className="m-0 mt-2 leading-6 text-[var(--muted-color)]">
          <strong className="text-[var(--text-color)]">Where:</strong>{" "}
          {entry.whereToWatch || "Not added"}
        </p>

        {entry.review && (
          <p className="mt-4 max-h-[7.5em] overflow-y-auto border-l-4 border-[var(--accent-color)] pl-3 pr-2 leading-6 text-[var(--muted-color)] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:my-3 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--accent-color)]">
            {entry.review}
          </p>
        )}

        <div className="mt-auto flex gap-3 pt-5">
          <button
            className="flex-1 rounded-full bg-[var(--button-color)] px-4 py-3 font-black text-white transition hover:-translate-y-0.5 hover:brightness-110"
            onClick={() => onEdit(entry)}
          >
            Edit
          </button>

          <button
            className="flex-1 rounded-full bg-red-700 px-4 py-3 font-black text-white transition hover:-translate-y-0.5 hover:brightness-110"
            onClick={() => onDelete(entry)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}