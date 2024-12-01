import { useDispatch, useSelector } from "react-redux";
import {setSelectedNote} from '../redux/selectedNoteSlice'

export function NoteItem({ title, time, content, index }) {
  const primaryColor = useSelector((state) => state.primaryColor)
  const selectedNote = useSelector((state) => state.selectedNote)
  const dispatch = useDispatch()

  return (
    <div className="note-item" onClick={() => dispatch(setSelectedNote(index))} style={{ backgroundColor: selectedNote === index ? primaryColor : ""}}>
      <div style={{padding: 0}} className="note-item-title">{title}</div>
      <span className="note-item-main">
        <span className="note-item-time">
          {time}
          </span>
        <span className="note-item-content" style={{ color: "#fefefe", opacity: 0.6 }}>{content.slice(0, 10)} ...</span>
      </span>
    </div>
  );
}
