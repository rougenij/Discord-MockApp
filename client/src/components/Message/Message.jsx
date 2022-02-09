import React from "react";
import "./message.css";

function Message({ message, own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img
          src="https://picsum.photos/200/300"
          alt=""
          className="messageImg"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">1 Hour ago</div>
    </div>
  );
}

export default Message;
