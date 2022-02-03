import React from "react";
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
        <div>
          <label>EMAIL</label>
          <input type="email" />
        </div>
        <div>
          <label>PASSWORD</label>
          <input type="password" />
        </div>
        <span>Forgot your password?</span>
        <div>
          <button>Login</button>
        </div>
        <span>
          Need an account? <button>Register</button>
        </span>
      </div>
    </div>
  );
}

export default Signin;
