import React, { useState, useEffect } from "react";
import myApi from "../../../API/api";

function StartNewConvo() {
  const [users, setAllUsers] = useState([]);

  useEffect(() => {
    const fetchAllUsers = async () => {
      const { data } = await myApi.get("/users");
      setAllUsers(data);
    };
    fetchAllUsers();
  }, []);

  const displayAllUsers = () => {
    return users.map((user, i) => {
      if (localStorage.getItem("LoggedUserID") !== user._id) {
        return (
          <div key={user._id} className="conversation">
            <img
              src={user.profileImg}
              alt="profileImg"
              className="conversationImg"
            />
            <h2 className="conversationName">{user.username}</h2>
          </div>
        );
      } else {
        return;
      }
    });
  };

  return <div>{users && displayAllUsers()}</div>;
}

export default StartNewConvo;
