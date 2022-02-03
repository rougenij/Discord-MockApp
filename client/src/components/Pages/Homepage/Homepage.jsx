import Header from "../../Header/Header";
import Button from "../../Button/Button";
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
            <Button
              name="↓ Download for Windows"
              backgroundcolor="white"
              color="black"
            />
            <Button
              name="Open Discord in your browser"
              backgroundcolor="black"
              color="white"
            />
          </div>
        </div>
        <div className="second-section">
          <div className="secondsection-leftside"></div>
          <div className="secondsection-rightside">
            <div className="secondsection-rightside-upperside">
              <h2>Create an invite-only place where you belong</h2>
            </div>
            <div className="secondsection-rightside-lowerside">
              Discord servers are organized into topic-based channels where you
              can collaborate, share, and just talk about your day without
              clogging up a group chat.
            </div>
          </div>
        </div>
        <div className="third-section">
          <div className="thirdsection-leftside">
            <div className="thirdsection-leftside-upperside">
              <h2>Where hanging out is easy</h2>
            </div>
            <div className="thirdsection-leftside-lowerside">
              Grab a seat in a voice channel when you’re free. Friends in your
              server can see you’re around and instantly pop in to talk without
              having to call.
            </div>
          </div>
          <div className="thirdsection-rightside"></div>
        </div>
        <div className="fourth-section">
          <div className="fourthsection-leftside"></div>
          <div className="fourthsection-rightside">
            <div className="fourthsection-rightside-upperside">
              <h2>From few to a fandom</h2>
            </div>
            <div className="fourthsection-rightside-lowerside">
              Get any community running with moderation tools and custom member
              access. Give members special powers, set up private channels, and
              more.
            </div>
          </div>
        </div>
        <div className="fifth-section">
          <div className="fifthsection-title">
            <h2>RELIABLE TECH FOR STAYING CLOSE</h2>
          </div>
          <div className="fifthsection-description">
            Low-latency voice and video feels like you’re in the same room. Wave
            hello over video, watch friends stream their games, or gather up and
            have a drawing session with screen share.
          </div>
          <div className="fifthsection-picture"></div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default Homepage;
