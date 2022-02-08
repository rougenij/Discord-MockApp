import React, { useState, useEffect } from "react";
import myApi from "../../../API/api";
import Conversation from "../../Conversations/Conversation";
import Message from "../../Message/Message";
import "./chat.css";

function Chat() {
  const [userID, setUserID] = useState("");
  const [loggedUser, setLoggedUser] = useState({});

  useEffect(() => {
    setUserID(localStorage.getItem("User ID"));
  }, []);

  useEffect(() => {
    const fetchProfileData = async () => {
      const data = await myApi.get(`/users/${userID}`);
      setLoggedUser(data.data[0]);
    };
    fetchProfileData();
  }, [userID]);

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
        <div className="chatMenuBottom">
          <img
            src={loggedUser.profileImg}
            alt=""
            className="chatMenuBottom-ProfileImg"
          />
          <span>{loggedUser.username}</span>
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message />
            <Message own />
            <Message />
            <Message />
            <Message />
            <Message />
            <Message />
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
