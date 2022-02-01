import Header from "../../Header/Header";
import React from "react";
import "./homepage.css";

function Homepage() {
  return (
    <div>
      <Header />
      <main>
        <div className="first-section">
          <div className="firstsection-title">
            <h1>IMAGINE A PLACE...</h1>
          </div>
          <div className="firstsection-description">
            <h3>
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community
            </h3>
            <h3>
              Where just you and a handful of friends cant spend time together.
              A place that makes it easy
            </h3>
            <h3>to talk every day and hang out more often</h3>
          </div>
          <div className="firstsection-buttons">
            <button>Download for Windows</button>
            <button>Open Discord in your browser</button>
          </div>
        </div>
        <div className="second-section">
          <div className="secondsection-maincontainer">
            <div className="secondsection-title">
              <h2>Create an invite-only place where you belong</h2>
            </div>
            <div className="secondsection-descripition">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
