import { useSelector } from "react-redux";
import { NoteItem } from "./NoteItem";
import { RootState } from "../redux/store";

export function Folder() {
  const selectedFolder = useSelector((state: RootState) => state.selectedFolder);
  const dataSlice = useSelector((state: RootState) => state.dataSlice);
  return (
    <div style={{ height: "100%" }}>
      {dataSlice && dataSlice[selectedFolder] && dataSlice[selectedFolder].length !== 0 ?
        dataSlice[selectedFolder]?.map((element, index) => {
          return (
            <NoteItem key={`note-item-0${index}`} time={element.time} title={element.title} content={element.content} index={index} />

          );
        }) : <div className="no-notes">No Notes</div>}
    </div>
  );
}
