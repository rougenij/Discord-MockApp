import React from "react";
import "./button.css";

function Button(props) {
  return (
    <div>
      <button
        className="btn"
        style={{
          backgroundColor: `${props.backgroundcolor}`,
          color: `${props.color}`,
        }}
      >
        {props.name}
      </button>
    </div>
  );
}

export default Button;
