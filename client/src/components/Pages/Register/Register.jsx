import React, { useState } from "react";
import { Link } from "react-router-dom";
import myApi from "../../../API/api";
import "./register.css";

function Register() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const onEmailChange = (value) => {
    setEmail(value);
  };

  const onNameChange = (value) => {
    setName(value);
  };

  const onPasswordChange = (value) => {
    setPassword(value);
  };

  const continueHandle = () => {
    myApi.post("/users", {
      email,
      username: name,
      password,
    });
  };
  return (
    <div className="signin-maincontainer">
      <div className="signin-floatingmiddlebox">
        <div className="signin-upper-section">
          <span className="signin-welcomeback-message">Create an account</span>
          <br />
          <span className="signin-seeyouagain-message">
            We're so excited to see you again!
          </span>
        </div>
        <div className="register-middlebox">
          <div className="signin-emailsection">
            <div>
              <label>EMAIL ADDRESS</label>
            </div>
            <div>
              <input
                type="email"
                className="signin-emailinput"
                onChange={(e) => onEmailChange(e.target.value)}
              />
            </div>
          </div>
          <div className="signin-passwordsection">
            <div>
              <label>USERNAME</label>
            </div>
            <div>
              <input
                type="text"
                className="signin-passwordinput"
                onChange={(e) => onNameChange(e.target.value)}
              />
            </div>
          </div>
          <div>
            <div>
              <div className="signin-passwordsection">
                <label>PASSWORD</label>
              </div>
              <div>
                <input
                  type="password"
                  className="signin-passwordinput"
                  onChange={(e) => onPasswordChange(e.target.value)}
                />
              </div>
            </div>
            <br />
            <button onClick={continueHandle} className="signin-loginButton">
              Continue
            </button>
            <div>
              <Link to="/login">Already have an account?</Link>
            </div>
            <div style={{ fontSize: "0.8rem" }}>
              by registering, you can agree to Discord's{" "}
              <Link to="/service">Terms of Service</Link> and{" "}
              <Link to="/policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
