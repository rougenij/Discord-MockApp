import React from "react";
import { Link } from "react-router-dom";
import "./signin.css";

function Signin() {
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
            <input type="email" className="signin-emailinput" />
          </div>
        </div>
        <div className="signin-passwordsection">
          <div>
            <label>PASSWORD</label>
          </div>
          <div>
            <input type="password" className="signin-passwordinput" />
          </div>
        </div>
        <a href="/">Forgot your password?</a>
        <div className="signin-buttonholder">
          <button className="signin-loginButton">Login</button>
        </div>
        <span style={{ color: "#b9bbbe" }}>
          Need an account? <Link to="/register">Register</Link>
        </span>
      </div>
    </div>
  );
}

export default Signin;
