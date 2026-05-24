import { useEffect, useState } from "preact/hooks";
import type { MediaType, WatchEntry, WatchStatus } from "../types";
import "../styles/EntryModal.css";

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

    return (
        <div className="modal-backdrop">
            <div className="modal">
                <div className="modal-header">
                    <h2>{existingEntry ? "Edit entry" : "Add new entry"}</h2>
                    <button className="close-button" onClick={onClose}>
                        ×
                    </button>
                </div>

                <form className="entry-form" onSubmit={handleSubmit}>
                    <label>
                        Type
                        <select value={type} onChange={(e) => setType(e.currentTarget.value as MediaType)}>
                            <option value="movie">Movie</option>
                            <option value="series">Series</option>
                        </select>
                    </label>

                    <label>
                        Picture URL
                        <input
                            type="text"
                            placeholder="https://..."
                            value={picture}
                            onChange={(e) => setPicture(e.currentTarget.value)}
                        />
                    </label>

                    <label>
                        Or upload picture
                        <input type="file" accept="image/*" onChange={handleImageUpload} />
                    </label>

                    {picture && (
                        <img className="image-preview" src={picture} alt="Preview" />
                    )}

                    <label>
                        Name
                        <input
                            type="text"
                            placeholder="Movie or series title"
                            value={name}
                            onChange={(e) => setName(e.currentTarget.value)}
                        />
                    </label>

                    

                    <label>
                        Rating: {rating}/10
                        <input className="rating-input"
                            type="range"
                            list="rating-options"
                            min="0"
                            max="10"
                            step="1"
                            value={rating}
                            onChange={(e) => setRating(Number(e.currentTarget.value))}
                        />
                    </label>

                    <datalist id="rating-options">
                        <option value="0"></option>
                        <option value="1"></option>
                        <option value="2"></option>
                        <option value="3"></option>
                        <option value="4"></option>
                        <option value="5"></option>
                        <option value="6"></option>
                        <option value="7"></option>
                        <option value="8"></option>
                        <option value="9"></option>
                        <option value="10"></option>
                    </datalist>

                    <label>
                        Category
                        <input
                            type="text"
                            placeholder="Action, comedy, fantasy, crime, romance..."
                            value={category}
                            onChange={(e) => setCategory(e.currentTarget.value)}
                        />
                    </label>

                    <label>
                        Status
                        <select
                            value={status}
                            onChange={(e) => setStatus(e.currentTarget.value as WatchStatus)}
                        >
                            <option value="want-to-watch">Want to watch</option>
                            <option value="watching">Watching</option>
                            <option value="watched">Watched</option>
                        </select>
                    </label>

                    <label>
                        Progress
                        <input
                            type="text"
                            placeholder={
                                type === "series"
                                    ? "Example: Season 2 Episode 5"
                                    : "Example: 47 minutes / 120 minutes"
                            }
                            value={progress}
                            onChange={(e) => setProgress(e.currentTarget.value)}
                        />
                    </label>

                    <label>
                        Where can you watch it?
                        <input
                            type="text"
                            placeholder="Netflix, HBO Max, Disney+, cinema..."
                            value={whereToWatch}
                            onChange={(e) => setWhereToWatch(e.currentTarget.value)}
                        />
                    </label>

                    <label>
                        Review
                        <textarea
                            placeholder="Write your thoughts..."
                            value={review}
                            onChange={(e) => setReview(e.currentTarget.value)}
                        />
                    </label>

                    <div className="modal-actions">
                        <button type="button" className="secondary-button" onClick={onClose}>
                            Cancel
                        </button>

                        <button type="submit">
                            {existingEntry ? "Save changes" : "Add entry"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}