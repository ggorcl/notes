import { useSelector } from "react-redux"

export function Folder(){
    const selectedFolder = useSelector((state) => state.selectedFolder)
    return (
        <div>
            {selectedFolder}
        </div>
    )
}