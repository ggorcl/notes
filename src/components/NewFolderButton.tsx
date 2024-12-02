import { useDispatch } from "react-redux"
import { addFolder } from "../redux/dataSlice"

export function NewFolderButton() {
    const dispatch = useDispatch()
    return (
        <>
            <button className="new-folder-btn" onClick={() => dispatch(addFolder())}>
                <span className="plus-icon">+</span>
            </button>
        </>
    )
}