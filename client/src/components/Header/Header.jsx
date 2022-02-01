import React from "react";
import "./header.css";

function Header() {
  return (
    <header>
      <div className="logo-leftside">
        <i class="fab fa-discord"></i>Discord
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
        <button>Open Discord</button>
      </div>
    </header>
  );
}

export default Header;
