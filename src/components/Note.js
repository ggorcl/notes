import {useDispatch, useSelector} from 'react-redux'
import {updateDataSlice} from '../redux/dataSlice'
export function Note(){
    const primaryColor = useSelector((state) => state.primaryColor)
    const selectedFolder = useSelector((state) => state.selectedFolder)
    const selectedNote = useSelector((state) => state.selectedNote)
    const dataSlice = useSelector((state) => state.dataSlice)
    const dispatch = useDispatch()

    function handleUpdate(data){
        console.log(dataSlice);
        dispatch((updateDataSlice({folder: selectedFolder, index: selectedNote, newContent: data})))
    }
    return (
        <div className="note">
            <h3 className="note-heading" style={{color: `${primaryColor}`}}>{new Date().toUTCString().toString()}</h3>
            <hr className="note-divider" />
            <textarea value={dataSlice[selectedFolder][selectedNote]?.content} className="note-content" onChange={(e) => handleUpdate(e.target.value)}></textarea>
        </div>
    )
}