import { useDispatch, useSelector } from 'react-redux'
import { updateDataSlice } from '../redux/dataSlice'
import { RootState } from '../redux/store'
export function Note() {
    const primaryColor = useSelector((state: RootState) => state.primaryColor)
    const selectedFolder = useSelector((state: RootState) => state.selectedFolder)
    const selectedNote = useSelector((state: RootState) => state.selectedNote)
    const dataSlice = useSelector((state: RootState) => state.dataSlice)
    const dispatch = useDispatch()

    function handleUpdate(data: string) {
        dispatch((updateDataSlice({ folder: selectedFolder, index: selectedNote, newContent: data })))
    }

    return (
        <div className="note">
            <h3 className="note-heading" style={{ color: `${primaryColor}` }}>{new Date().toUTCString().toString()}</h3>
            <hr className="note-divider" />
            <textarea value={dataSlice && dataSlice[selectedFolder] && dataSlice[selectedFolder][selectedNote]?.content} className="note-content" onChange={(e) => handleUpdate(e.target.value)}></textarea>
        </div>
    )
}