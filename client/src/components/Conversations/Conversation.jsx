import React, { useState, useEffect } from "react";
import myApi from "../../API/api";
import "./conversation.css";

function Conversation({ conversation, currentUser }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const friendId = conversation.members.find((m) => m !== currentUser?._id);

    const getUser = async () => {
      try {
        const res = await myApi.get("/user?userId=" + friendId);
        setUser(res.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getUser();
  }, [conversation, currentUser]);
  return (
    <div>
      <div className="conversation">
        <img className="conversationImg" src={user && user.profileImg} alt="" />
        <span className="conversationName">{user && user.username}</span>
      </div>
    </div>
  );
}

export default Conversation;
