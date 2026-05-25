import { useEffect, useState } from "preact/hooks";
import type { MediaType, WatchEntry, WatchStatus } from "../types";

type EntryModalProps = {
  defaultType: MediaType;
  existingEntry: WatchEntry | null;
  onClose: () => void;
  onSave: (entry: WatchEntry) => void;
};

export function EntryModal({
  defaultType,
  existingEntry,
  onClose,
  onSave,
}: EntryModalProps) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const [type, setType] = useState<MediaType>(existingEntry?.type ?? defaultType);
  const [picture, setPicture] = useState(existingEntry?.picture ?? "");
  const [name, setName] = useState(existingEntry?.name ?? "");
  const [rating, setRating] = useState(existingEntry?.rating ?? 0);
  const [review, setReview] = useState(existingEntry?.review ?? "");
  const [category, setCategory] = useState(existingEntry?.category ?? "");
  const [status, setStatus] = useState<WatchStatus>(
    existingEntry?.status ?? "want-to-watch"
  );
  const [progress, setProgress] = useState(existingEntry?.progress ?? "");
  const [whereToWatch, setWhereToWatch] = useState(
    existingEntry?.whereToWatch ?? ""
  );

  function handleImageUpload(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onload = () => {
      if (typeof reader.result === "string") {
        setPicture(reader.result);
      }
    };

    reader.readAsDataURL(file);
  }

  function handleSubmit(event: Event) {
    event.preventDefault();

    if (!name.trim()) {
      alert("Please add a name.");
      return;
    }

    const now = new Date().toISOString();

    const entry: WatchEntry = {
      id: existingEntry?.id ?? crypto.randomUUID(),
      type,
      picture,
      name,
      rating,
      review,
      category,
      status,
      progress,
      whereToWatch,
      createdAt: existingEntry?.createdAt ?? now,
      updatedAt: now,
    };

    onSave(entry);
  }

  const inputClass =
    "rounded-2xl border border-[var(--outline-color)] bg-[var(--input-color)] p-3 text-[var(--text-color)] outline-none transition focus:ring-2 focus:ring-[var(--accent-color)]";

  const labelClass = "grid gap-2 text-sm font-medium text-[var(--muted-color)]";

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/75 p-4">
      <div className="max-h-[90vh] w-full max-w-[760px] overflow-y-auto rounded-[30px] border border-[var(--outline-color)] bg-[var(--card-color)] p-5 text-[var(--text-color)] shadow-2xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[var(--accent-color)]">
        <div className="mb-5 flex items-center justify-between gap-4">
          <h2 className="m-0 text-2xl font-black">
            {existingEntry ? "Edit entry" : "Add new entry"}
          </h2>

          <button
            className="grid h-11 w-11 place-items-center rounded-full border border-[var(--outline-color)] bg-transparent text-2xl font-bold text-[var(--text-color)] transition hover:-translate-y-0.5"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <form
          className="grid grid-cols-1 gap-4 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <label className={labelClass}>
            Type
            <select
              className={inputClass}
              value={type}
              onInput={(e) =>
                setType((e.target as HTMLSelectElement).value as MediaType)
              }
            >
              <option value="movie">Movie</option>
              <option value="series">Series</option>
            </select>
          </label>

          <label className={labelClass}>
            Name
            <input
              className={inputClass}
              type="text"
              placeholder="Movie or series title"
              value={name}
              onInput={(e) => setName((e.target as HTMLInputElement).value)}
            />
          </label>

          <label className={`${labelClass} md:col-span-2`}>
            Picture URL
            <input
              className={inputClass}
              type="text"
              placeholder="https://..."
              value={picture}
              onInput={(e) => setPicture((e.target as HTMLInputElement).value)}
            />
          </label>

          <label className={`${labelClass} md:col-span-2`}>
            Or upload picture
            <input
              className={inputClass}
              type="file"
              accept="image/*"
              onInput={handleImageUpload}
            />
          </label>

          {picture && (
            <img
              className="max-h-60 w-full rounded-2xl border border-[var(--outline-color)] object-cover md:col-span-2"
              src={picture}
              alt="Preview"
            />
          )}

          <label className={labelClass}>
            Rating: {rating}/10
            <input
              className={inputClass}
              type="range"
              min="0"
              max="10"
              value={rating}
              onInput={(e) =>
                setRating(Number((e.target as HTMLInputElement).value))
              }
            />
          </label>

          <label className={labelClass}>
            Category
            <input
              className={inputClass}
              type="text"
              placeholder="Action, comedy, fantasy..."
              value={category}
              onInput={(e) => setCategory((e.target as HTMLInputElement).value)}
            />
          </label>

          <label className={labelClass}>
            Status
            <select
              className={inputClass}
              value={status}
              onInput={(e) =>
                setStatus((e.target as HTMLSelectElement).value as WatchStatus)
              }
            >
              <option value="want-to-watch">Want to watch</option>
              <option value="watching">Watching</option>
              <option value="watched">Watched</option>
            </select>
          </label>

          <label className={labelClass}>
            Progress
            <input
              className={inputClass}
              type="text"
              placeholder={
                type === "series"
                  ? "Example: Season 2 Episode 5"
                  : "Example: 47 minutes / 120 minutes"
              }
              value={progress}
              onInput={(e) => setProgress((e.target as HTMLInputElement).value)}
            />
          </label>

          <label className={`${labelClass} md:col-span-2`}>
            Where can you watch it?
            <input
              className={inputClass}
              type="text"
              placeholder="Netflix, HBO Max, Disney+, cinema..."
              value={whereToWatch}
              onInput={(e) =>
                setWhereToWatch((e.target as HTMLInputElement).value)
              }
            />
          </label>

          <label className={`${labelClass} md:col-span-2`}>
            Review
            <textarea
              className={`${inputClass} min-h-28 resize-y`}
              placeholder="Write your thoughts..."
              value={review}
              onInput={(e) => setReview((e.target as HTMLTextAreaElement).value)}
            />
          </label>

          <div className="flex justify-end gap-3 pt-2 md:col-span-2">
            <button
              type="button"
              className="rounded-full border border-[var(--outline-color)] bg-transparent px-5 py-3 font-black text-[var(--text-color)] transition hover:-translate-y-0.5"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-full bg-[var(--button-color)] px-5 py-3 font-black text-white shadow-lg transition hover:-translate-y-0.5 hover:brightness-110"
            >
              {existingEntry ? "Save changes" : "Add entry"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}