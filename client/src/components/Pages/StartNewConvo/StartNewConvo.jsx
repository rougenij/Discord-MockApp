import React, { useState, useEffect } from "react";
import myApi from "../../../API/api";
import { useHistory, Link } from "react-router-dom";

function StartNewConvo() {
  const [users, setAllUsers] = useState([]);
  const [loggedUser, setLoggedUser] = useState("");
  const [otherAccount, setOtherAccount] = useState("");

  const history = useHistory();

  useEffect(() => {
    const fetchAllUsers = async () => {
      const { data } = await myApi.get("/users");
      setAllUsers(data);
      setLoggedUser(localStorage.getItem("LoggedUserID"));
    };
    fetchAllUsers();
  }, []);

  const handleStartNewConvo = async (e) => {
    setOtherAccount(e.target.id);
    if (otherAccount) {
      myApi
        .post("/conversation", {
          senderId: `${loggedUser}`,
          receiverId: `${otherAccount}`,
        })
        .then((data) => history.push("/chat"));
    }
  };

  const displayAllUsers = () => {
    return users.map((user, i) => {
      if (localStorage.getItem("LoggedUserID") !== user._id) {
        return (
          <div
            key={user._id}
            id={user._id}
            className="conversation"
            onClick={(e) => {
              handleStartNewConvo(e);
            }}
          >
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

  return (
    <div>
      <h1>
        Chat feeling lonely?? Double click on a chat to start a new conversation
      </h1>
      <Link to="/chat">
        <button>Return to Chat Page</button>
      </Link>
      {users && displayAllUsers()}
    </div>
  );
}

export default StartNewConvo;
