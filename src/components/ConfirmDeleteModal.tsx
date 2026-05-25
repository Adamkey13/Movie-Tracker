import { useEffect } from "preact/hooks";

type ConfirmDeleteModalProps = {
  entryName: string;
  onCancel: () => void;
  onConfirm: () => void;
};

export function ConfirmDeleteModal({
  entryName,
  onCancel,
  onConfirm,
}: ConfirmDeleteModalProps) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[150] grid place-items-center bg-black/75 p-4">
      <div className="w-full max-w-[420px] rounded-[28px] border border-[var(--outline-color)] bg-[var(--card-color)] p-6 text-[var(--text-color)] shadow-2xl">
        <h2 className="m-0 text-2xl font-black">Delete entry?</h2>

        <p className="mt-4 leading-7 text-[var(--muted-color)]">
          Are you sure you want to delete{" "}
          <strong className="text-[var(--text-color)]">{entryName}</strong>?
        </p>

        <p className="font-bold text-[red]">
          This action cannot be undone.
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            className="rounded-full border border-[var(--outline-color)] bg-transparent px-5 py-3 font-black text-[var(--text-color)] transition hover:-translate-y-0.5"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            className="rounded-full bg-red-700 px-5 py-3 font-black text-white transition hover:-translate-y-0.5 hover:brightness-110"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}