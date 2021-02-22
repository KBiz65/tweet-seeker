import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import "./RandomResults.css";

function RandomResults() {
  const [user, setUser] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [retweets, setRetweets] = useState();
  const [likes, setLikes] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    fetch("/randomTweet").then((response) =>
      response.json().then((data) => {
        const randomNumber = Math.floor(
          Math.random() *
            data.results[0].userSearchResponse.userTimelineTweets.length
        );
        setUser(data.results[0].userSearchResponse.userScreenName);
        setContent(
          data.results[0].userSearchResponse.userTimelineTweets[randomNumber]
            .text
        );
        setDate(
          data.results[0].userSearchResponse.userTimelineTweets[randomNumber]
            .created_at
        );
        setImage(data.results[0].userSearchResponse.userProfileImageUrl);
        setRetweets(
          data.results[0].userSearchResponse.userTimelineTweets[randomNumber]
            .public_metrics.retweet_count
        );
        setLikes(
          data.results[0].userSearchResponse.userTimelineTweets[randomNumber]
            .public_metrics.like_count
        );
        setComments(
          data.results[0].userSearchResponse.userTimelineTweets[randomNumber]
            .public_metrics.reply_count
        );
      })
    );
  }, []);
  return (
    <div className="random-tweet-container">
      <Card className="card-container">
        <CardBody>
          <CardImg top src={image} alt="image"></CardImg>
          <CardTitle className="card-user">{user}</CardTitle>
          <CardText className="card-date">{date}</CardText>
          <CardText className="card-content">{content}</CardText>
          <CardText className="card-retweets">Retweets: {retweets}</CardText>
          <CardText className="card-likes">Likes: {likes}</CardText>
          <CardText className="card-comments">Comments: {comments}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export default RandomResults;
