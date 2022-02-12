import React from "react";
import "./updateuser.css";

function UpdateUser({ userId, show }) {
  return (
    <div className="updateUser-OuterBox">
      <div className="updateUser-BoxWrapper">
        <input placeholder="Change your Username" />
        <input placeholder="Update your password" />
        <input placeholder="Change your profile picture" />
      </div>
    </div>
  );
}

export default UpdateUser;
