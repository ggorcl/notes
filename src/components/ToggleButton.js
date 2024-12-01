import React  from "react";
import { useState } from "react";

export function ToggleButton({primaryColor="red", toggleAllFoldersVisiblity}){
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
      setIsToggled(prevState => !prevState);
        toggleAllFoldersVisiblity();
    };

    return (
      <div className="toggle-container">
        <div className={`toggle-button ${isToggled ? 'on' : 'off'}`} style={{backgroundColor: `${isToggled ? primaryColor : '#797775'}`}} onClick={handleToggle}>
          <div className={`toggle-indicator ${isToggled ? 'on' : 'off'}`} />
        </div>
      </div>
    ); 
}
