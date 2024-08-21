import React from "react";

const Buttons = ({ onNewQuote, onTweet }) => (
  <div>
    <button id="new-quote" onClick={onNewQuote}>
      New Quote
    </button>
    <a id="tweet-quote" href="#" onClick={onTweet}>
      Tweet Quote
    </a>
  </div>
);

export default Buttons;
