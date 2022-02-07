import React from "react";
import Conversation from "../../Conversations/Conversation";
import Message from "../../Message/Message";
import "./chat.css";

function Chat() {
  return (
    <div className="chat-MainWrapper">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
          <Conversation />
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message />
            <Message own />
            <Message />
          </div>
          <div className="chatBoxBottom">
            <textarea
              placeholder="Send a message"
              className="chatMessageInput"
            ></textarea>
            <button className="chatSubmitButton">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
