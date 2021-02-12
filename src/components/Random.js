import React from "react";
import "./Random.css";
import RandomResults from "./RandomResults";

function Random() {
  const favoriteTweeters = ["249957750", "357312062", "110770469"];
  return (
    <div className="random-container">
      <div className="random-page-overview">
        <p>Random Tweet</p>
      </div>

      <div className="random-results-container">
        <p>Here's a random tweet from one of our favorite users!</p>

        <div className="random-tweet-results"></div>
      </div>

      <RandomResults />
    </div>
  );
}

export default Random;
