import React, { useState, useEffect } from "react";
import myApi from "../../../API/api";
import Conversation from "../../Conversations/Conversation";
import Message from "../../Message/Message";
import "./chat.css";

function Chat() {
  const [token, setToken] = useState("");
  const [loggedUser, setLoggedUser] = useState({});
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      const data = await myApi.get(`/users/${token}`);
      setLoggedUser(data.data[0]);
    };
    fetchProfileData();
  }, [token]);

  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await myApi.get(`/conversation/${loggedUser?._id}`);
        setConversation(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getConversation();
  }, [loggedUser?._id]);

  useEffect(() => {
    setToken(localStorage.getItem("Token"));
  }, []);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await myApi.get("/message/" + currentChat?._id);
        setMessages(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getMessages();
  }, [currentChat]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const messageObj = {
      sender: loggedUser._id,
      text: newMessage,
      conversationId: currentChat._id,
    };

    try {
      const res = await myApi.post("/message", messageObj);
      setMessages([...messages, res.data]);
      setNewMessage("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="chat-MainWrapper">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          {conversation.map((c, i) => {
            return (
              <div key={i} onClick={() => setCurrentChat(c)}>
                <Conversation conversation={c} currentUser={loggedUser} />
              </div>
            );
          })}
        </div>
        <div className="chatMenuBottom">
          <img
            src={loggedUser?.profileImg}
            alt=""
            className="chatMenuBottom-ProfileImg"
          />
          <span>{loggedUser?.username}</span>
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          {currentChat ? (
            <>
              <div className="chatBoxTop">
                {messages.map((m, i) => {
                  return (
                    <Message
                      key={i}
                      message={m}
                      own={m.sender === loggedUser._id}
                    />
                  );
                })}
              </div>
              <div className="chatBoxBottom">
                <textarea
                  placeholder="Send a message"
                  className="chatMessageInput"
                  onChange={(e) => setNewMessage(e.target.value)}
                  value={newMessage}
                ></textarea>
                <button className="chatSubmitButton" onClick={handleSubmit}>
                  Send
                </button>
              </div>{" "}
            </>
          ) : (
            <span className="noConversationText">
              Open a conversation to start a chat
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default Chat;
