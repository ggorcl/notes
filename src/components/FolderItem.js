
export function FolderItem({ folderName, itemCount }) {
  return (
    <div className="folder-item">
      <span>{folderName}</span>
      <span>
        <strong>{itemCount}</strong>
      </span>
    </div>
  );
}
