import { useSelector } from 'react-redux';
export function FolderItem({ folderName, itemCount }) {
  const primaryColor = useSelector((state) => state.primaryColor);

  return (
    <div className="folder-item" style={{backgroundColor: `${primaryColor}`}}>
      <span>{folderName}</span>
      <span>
        <strong>{itemCount}</strong>
      </span>
    </div>
  );
}
