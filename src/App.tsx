import { useState } from "react";
import { MacButtons } from "./components/MacButtons";
import { ToggleButton } from "./components/ToggleButton";
import { Folders } from "./components/Folders";
import { Folder } from "./components/Folder";
import { Note } from "./components/Note";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { addFolder, addNote } from "./redux/dataSlice";
import { GenericButton } from "./components/GenericButton";

function App() {
  const primaryColor = useSelector((state: RootState) => state.primaryColor)
  const selectedFolder = useSelector((state: RootState) => state.selectedFolder)
  const [allFoldersVisible, setAllFoldersVisible] = useState(true);
  const dispatch = useDispatch()

  const toggleAllFoldersVisiblity = () => {
    setAllFoldersVisible((prev) => !prev);
  };

  return (
    <div className="app" style={{ "--primary-color": `${primaryColor}` } as React.CSSProperties}>
      <div id="top-bar">
        <MacButtons />
        <ToggleButton
          toggleAllFoldersVisiblity={toggleAllFoldersVisiblity}
        />
        <div className="new-note-btn-container">
          <GenericButton onClick={() => dispatch(addNote({ folderName: selectedFolder }))} />
        </div>
      </div>
      <div
        className="folders-container section"
      >
        <Folders />
        <div className="generic-btn-container new-folder-btn-container">
          <GenericButton onClick={() => dispatch(addFolder())} />
        </div>
      </div>
      <div className="folder-container section" style={allFoldersVisible ? { width: "25%", left: "25%" } : { width: "30%", left: "0" }}>
        <Folder />
      </div>
      <div className="note-container section" style={allFoldersVisible ? { width: "50%" } : { width: "70%" }}>
        <Note />
      </div>
    </div>
  );
}

export default App;
