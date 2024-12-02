import { useDispatch } from "react-redux"
import { addFolder, renameFolder } from "../redux/dataSlice"

export function GenericButton({ onClick }: { onClick: () => void }) {
    return (
        <>
            {/* <button className="new-folder-btn" onClick={() => dispatch(renameFolder({ currentFolderName: "New Folder 1", newFolderName: "testing" }))}> */}
            <button className="generic-btn" onClick={onClick}>
                <span className="generic-btn-icon">+</span>
            </button>
        </>
    )
}