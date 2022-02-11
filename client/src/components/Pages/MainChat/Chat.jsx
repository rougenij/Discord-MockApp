import React, { useState, useEffect } from "react";
import myApi from "../../../API/api";
import Conversation from "../../Conversations/Conversation";
import Message from "../../Message/Message";
import { io } from "socket.io-client";
import "./chat.css";

function Chat() {
  const [token, setToken] = useState("");
  const [loggedUser, setLoggedUser] = useState({});
  const [conversation, setConversation] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    setToken(localStorage.getItem("Token"));
  }, []);
  useEffect(() => {
    if (socket === null) {
      setSocket(io("https://discord-mock.herokuapp.com/"));
    }
    if (socket) {
      socket.on("getMessage", (message) => {
        setMessages(messages.concat(message));
      });
    }
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      const data = await myApi.get(`/users/getUserDetails`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLoggedUser(data.data);
    };
    token && fetchProfileData();
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

    loggedUser && getConversation();
  }, [loggedUser]);

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
      await myApi.post("/message", messageObj);
      // setMessages([...messages, res.data]);
      socket.emit("sendMessage", messageObj);
      setNewMessage("");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="chat-MainWrapper">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input
            placeholder="Search for a specfic user"
            className="chatMenuInput"
          />
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
