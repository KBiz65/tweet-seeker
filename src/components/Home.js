import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="home-page-overview">
        <p>Welcome to Tweet Seeker</p>
        <p>
          Tweet Seeker is a fast and easy way to search through Twitter users,
          tweets, topics, and more. Just click the "Search" link above to get
          started.
        </p>
        <p>
          Feeling adventurous and want to get a random tweet from one of our
          favorite tweeters? Just click the "Random" link above and see what you
          get!
        </p>
      </div>
    </div>
  );
}

export default Home;
