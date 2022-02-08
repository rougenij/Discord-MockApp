import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./signin.css";
import myApi from "../../../API/api";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleEmailChange = (value) => {
    setEmail(value);
    if (value === "") {
      setEmail("");
    }
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
    if (value === "") {
      setPassword("");
    }
  };

  //If User is already logged in, it'll take him to the chat directly, no need to login again
  useEffect(() => {
    let isLoggedin = localStorage.getItem("isLoggedin");
    isLoggedin ? history.push("/chat") : history.push("/login");
  }, [history]);

  const loginHandle = () => {
    if (!email || !password) return;
    myApi
      .post("/users/login", {
        email,
        password,
      })
      .then((data) => {
        console.log(data);
        if (data.data.status === "success") {
          localStorage.setItem("isLoggedin", true);
          history.push("/chat");
          localStorage.setItem("User ID", data.data.id);
        } else {
          history.push("/login");
        }
      });
    console.log("Log in successful");
  };
  return (
    <div className="signin-maincontainer">
      <div className="signin-floatingmiddlebox">
        <div className="signin-upper-section">
          <div className="signin-middle">
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
                style={{ width: "80%" }}
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
                style={{ width: "80%" }}
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
    </div>
  );
}

export default Signin;
