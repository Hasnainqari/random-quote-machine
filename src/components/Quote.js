import React from "react";

const Quote = ({ text, author }) => (
  <div>
    <p id="text">{text}</p>
    <p id="author">- {author}</p>
  </div>
);

export default Quote;
