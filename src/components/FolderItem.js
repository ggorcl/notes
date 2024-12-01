import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFolder } from '../redux/selectedFolderSlice';
export function FolderItem({ folderName, itemCount }) {
  const primaryColor = useSelector((state) => state.primaryColor);
  const selectedFolder = useSelector((state) => state.selectedFolder);
  const dispatch = useDispatch();

  return (
    <div className="folder-item" style={{border: `1px solid ${primaryColor}`, backgroundColor: selectedFolder===folderName ? primaryColor : ''}}
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
