import { useSelector } from "react-redux";
import { NoteItem } from "./NoteItem";

export function Folder() {
  const selectedFolder = useSelector((state) => state.selectedFolder);
  const dataSlice = useSelector((state) => state.dataSlice);
  console.log(dataSlice[selectedFolder]);
  return (
    <div>
      {dataSlice &&
        dataSlice[selectedFolder].map((element, index) => {
          return (
            <NoteItem key={`note-item-0${index}`} time={"9:16 PM"} title={element.title} content={element.content} index={index}/>
            
          );
        })}
    </div>
  );
}
