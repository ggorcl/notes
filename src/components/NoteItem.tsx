import { useDispatch, useSelector } from "react-redux";
import { setSelectedNoteIndex } from '../redux/selectedNoteSlice'
import { RootState } from "../redux/store";

interface NoteItemProps {
  title: string,
  time: string,
  content: string,
  index: number
}

export function NoteItem({ title, time, content, index }: NoteItemProps) {
  const primaryColor = useSelector((state: RootState) => state.primaryColor)
  const selectedNote = useSelector((state: RootState) => state.selectedNote)
  const dispatch = useDispatch()

  return (
    <div className="note-item" onClick={() => dispatch(setSelectedNoteIndex(index))} style={{ backgroundColor: selectedNote === index ? primaryColor : "" }}>
      <div style={{ padding: 0 }} className="note-item-title">{title}</div>
      <span className="note-item-main">
        <span className="note-item-time">
          {time}
        </span>
        <span className="note-item-content" style={{ color: "#fefefe", opacity: 0.6 }}>{content ? content.slice(0, 10) : "No additional text"} ...</span>
      </span>
    </div>
  );
}
