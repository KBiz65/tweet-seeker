import React from "react";

function Tweet(props) {
  console.log(props);
  const { created_at, id, public_metrics, text } = props;

  return (
    <div>
      <p></p>
    </div>
  );
}

export default Tweet;
