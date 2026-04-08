import React from "react";

const AddItemButton = ({ toggleBackground, setToggleBackground }) => {
  const handleClick = () => {
    setToggleBackground(!toggleBackground);
    // console.log("Button is Triggered!");
    
  }
  return (
    <div className="add-btn-container">
      <button
        className="button"
        onClick={() => handleClick()}
      >
        +
      </button>
    </div>
  );
};

export default AddItemButton;
