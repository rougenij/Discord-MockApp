import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="logo-leftside">
        <i className="fab fa-discord"></i>Discord
      </div>
      <div className="buttons-mid-navbar">
        <span>Download</span>
        <span>Nitro</span>
        <span>Safety</span>
        <span>Support</span>
        <span>Blog</span>
        <span>Careers</span>
      </div>
      <div className="button-rightside">
        <Link to="/login">
          <button>Open Discord</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
