import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFolder } from '../redux/selectedFolderSlice';
import { RootState } from '../redux/store';

interface FolderItemProps {
  folderName: string,
  itemCount: number
}

export function FolderItem({ folderName, itemCount }: FolderItemProps) {
  const primaryColor = useSelector((state: RootState) => state.primaryColor);
  const selectedFolder = useSelector((state: RootState) => state.selectedFolder);
  const dispatch = useDispatch();

  return (
    <div className="folder-item" style={{ border: `1px solid ${primaryColor}`, backgroundColor: selectedFolder === folderName ? primaryColor : '' }}
      onClick={() => {
        dispatch(setSelectedFolder(folderName))
      }}>
      <span>{folderName}</span>
      <span>
        <strong>{itemCount}</strong>
      </span>
    </div>
  );
}
