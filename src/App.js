import { useState } from "react";
import { MacButtons } from "./components/MacButtons";
import { ToggleButton } from "./components/ToggleButton";
import { Folders } from "./components/Folders";
import { Folder } from "./components/Folder";
import { Note } from "./components/Note";

function App() {
  const [allFoldersVisible, setAllFoldersVisible] = useState(true);

  const toggleAllFoldersVisiblity = () => {
    setAllFoldersVisible((prev) => !prev);
  };

  return (
    <div className="app">
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
      </div>
      <div className="folder-container section" style={allFoldersVisible ? {width: "25%", left: "25%"} : {width: "30%", left: "0"}}>
        <Folder />
      </div>
      <div className="note-container section" style={allFoldersVisible ? {width: "50%"} : {width: "70%"}}>
        <Note />
      </div>
    </div>
  );
}

export default App;
