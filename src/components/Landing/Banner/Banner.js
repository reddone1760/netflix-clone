import React from "react";
import Header from "../Header/Header";
import Start from "../Start/Start";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <Header />
      <div className="banner__infos">
        <h1>Unlimited movies, TV shows, and more.</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <h4>
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
        <Start />
      </div>
    </div>
  );
}

export default Banner;
