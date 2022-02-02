import React from "react";

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
