import { useState } from "react";
import { MacButtons } from "./components/MacButtons";
import { ToggleButton } from "./components/ToggleButton";
import { Folders } from "./components/Folders";
import { Folder } from "./components/Folder";
import { Note } from "./components/Note";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './redux/store'
import { addFolder } from "./redux/dataSlice";
import { NewFolderButton } from "./components/NewFolderButton";

function App() {
  const primaryColor = useSelector((state: RootState) => state.primaryColor)
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
      </div>
      <div
        className="folders-container section"
      >
        <Folders />
        <div className="new-folder-btn-container">
          <NewFolderButton />
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
