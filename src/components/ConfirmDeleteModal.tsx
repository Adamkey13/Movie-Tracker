import "../styles/ConfirmDeleteModal.css";

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
  return (
    <div className="confirm-backdrop">
      <div className="confirm-modal">
        <h2>Delete entry?</h2>

        <p>
          Are you sure you want to delete <strong>{entryName}</strong>?
        </p>

        <p className="confirm-warning">
          This action cannot be undone.
        </p>

        <div className="confirm-actions">
          <button className="secondary-button" onClick={onCancel}>
            Cancel
          </button>

          <button className="danger-button" onClick={onConfirm}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}