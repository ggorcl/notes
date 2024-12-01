import { useState } from "react";
import { MacButtons } from "./components/MacButtons";
import { ToggleButton } from "./components/ToggleButton";
import { Folders } from "./components/Folders";
import { Folder } from "./components/Folder";
import { Note } from "./components/Note";

function App() {
  const [allFoldersVisible, setAllFoldersVisible] = useState(true);

  const toggleAllFoldersVisiblity = () => {
    setAllFoldersVisible(prev => !prev)
  }

  return (
    <div className="app">
      <div id="top-bar">
        <MacButtons />
        <ToggleButton primaryColor="#E49273" toggleAllFoldersVisiblity={toggleAllFoldersVisiblity}/>
      </div>
      <div className="folders-container section" style={allFoldersVisible ? {width: "100%"} : {width: "0%"}}>
        <Folders/>
      </div>
      <div className="folder-container section">
        <Folder/>
      </div>
      <div className="note-container section">
        <Note/>
      </div>
    </div>
  );
}

export default App;
