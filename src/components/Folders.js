import { FolderItem } from "./FolderItem";
import {  useSelector } from "react-redux";

export function Folders() {
  const dataSlice = useSelector((state) => state.dataSlice);

  return (
    <div>
    {dataSlice && Object.keys(dataSlice).map((foldername, index) => {
        return <FolderItem key={`folder-item-00${index}`} folderName={foldername} itemCount={dataSlice[foldername].length}/>
    })}
    </div>
  );
}
