import React, { useEffect, useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

function RandomResults() {
  const [user, setUser] = useState();
  const [content, setContent] = useState();
  const [date, setDate] = useState();
  const [image, setImage] = useState();
  const [retweets, setRetweets] = useState();
  const [likes, setLikes] = useState();
  const [comments, setComments] = useState();

  useEffect(() => {
    fetch("/random").then((response) =>
      response.json().then((data) => {
        console.log(data.result);
        setUser(data.result.user);
        setContent(data.result.content);
        setDate(data.result.date);
        setImage(data.result.image);
        setRetweets(data.result.retweets);
        setLikes(data.result.likes);
        setComments(data.result.comments);
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
    // <Card className="mt-2 w-75 text-center">
    //   <CardImg top src={data.url} alt={data.title} />
    //   <CardBody>
    //     <CardTitle tag="h4">{data.title}</CardTitle>
    //     <CardSubtitle tag="h6" className="mb-2 text-muted">
    //       {data.copyright}
    //     </CardSubtitle>
    //     <CardText>{data.explanation}</CardText>
    //   </CardBody>
    // </Card>
  );
}

export default RandomResults;
