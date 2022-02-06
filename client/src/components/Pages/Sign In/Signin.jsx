import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./signin.css";
import myApi from "../../../API/api";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleEmailChange = (value) => {
    setEmail(value);
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  const loginHandle = () => {
    myApi
      .post("/users/login", {
        email,
        password,
      })
      .then(history.push("/chat"));
    console.log("Log in successful");
  };
  return (
    <div className="signin-maincontainer">
      <div className="signin-floatingmiddlebox">
        <div className="signin-upper-section">
          <span className="signin-welcomeback-message">Welcome Back!</span>{" "}
          <br />{" "}
          <span className="signin-seeyouagain-message">
            We're so excited to see you again!
          </span>
        </div>
        <div className="signin-emailsection">
          <div>
            <label>EMAIL ADDRESS</label>
          </div>
          <div>
            <input
              type="email"
              className="signin-emailinput"
              onChange={(e) => handleEmailChange(e.target.value)}
            />
          </div>
        </div>
        <div className="signin-passwordsection">
          <div>
            <label>PASSWORD</label>
          </div>
          <div>
            <input
              type="password"
              className="signin-passwordinput"
              onChange={(e) => handlePasswordChange(e.target.value)}
            />
          </div>
        </div>
        <a href="/">Forgot your password?</a>
        <div className="signin-buttonholder">
          <button className="signin-loginButton" onClick={loginHandle}>
            Login
          </button>
        </div>
        <span style={{ color: "#b9bbbe" }}>
          Need an account? <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
}

export default Signin;
