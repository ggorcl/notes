import { useSelector } from "react-redux";
import { NoteItem } from "./NoteItem";
import { RootState } from "../redux/store";

export function Folder() {
  const selectedFolder = useSelector((state: RootState) => state.selectedFolder);
  const dataSlice = useSelector((state: RootState) => state.dataSlice);
  return (
    <div>
      {dataSlice &&
        dataSlice[selectedFolder]?.map((element, index) => {
          return (
            <NoteItem key={`note-item-0${index}`} time={"9:16 PM"} title={element.title} content={element.content} index={index} />

          );
        })}
    </div>
  );
}
