import { addFolder } from "../redux/dataSlice";
import { RootState } from "../redux/store";
import { FolderItem } from "./FolderItem";
import { useDispatch, useSelector } from "react-redux";

export function Folders() {
  const dataSlice = useSelector((state: RootState) => state.dataSlice);

  return (
    <div className="folders-container-main">
      {dataSlice && Object.keys(dataSlice).map((foldername, index) => {
        return <FolderItem key={`folder-item-00${index}`} folderName={foldername} itemCount={dataSlice[foldername].length} />
      })}
    </div>
  );
}
