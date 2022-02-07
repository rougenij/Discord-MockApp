import React from "react";
import "./message.css";

function Message({ own }) {
  return (
    <div className={own ? "message own" : "message"}>
      <div className="messageTop">
        <img src="" alt="" className="messageImg" />
        <p className="messageText">Hello this is a message</p>
      </div>
      <div className="messageBottom">1 Hour ago</div>
    </div>
  );
}

export default Message;
