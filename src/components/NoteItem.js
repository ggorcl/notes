import { useDispatch } from "react-redux";
import {setSelectedNote} from '../redux/selectedNoteSlice'

export function NoteItem({ title, time, content, index }) {
  const dispatch = useDispatch()

  return (
    <div className="note-item" onClick={() => dispatch(setSelectedNote(index))}>
      <div style={{padding: 0}} className="note-item-title">{title}</div>
      <span className="note-item-main">
        <span className="note-item-time">
          {time}
          </span>
        <span className="note-item-content" style={{ color: "#909090" }}>{content.slice(0, 10)} ...</span>
      </span>
    </div>
  );
}
