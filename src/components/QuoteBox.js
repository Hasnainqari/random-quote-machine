import React, { useState, useEffect } from "react";
import Quote from "./Quote";
import Buttons from "./Buttons";

const QuoteBox = () => {
  const [quote, setQuote] = useState({ text: "", author: "" });

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote({ text: data.content, author: data.author });
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  const tweetQuote = () => {
    const twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote.text}" — ${quote.author}`
    )}`;
    window.open(twitterURL, "_blank");
  };

  return (
    <div id="quote-box">
      <Quote text={quote.text} author={quote.author} />
      <Buttons onNewQuote={fetchQuote} onTweet={tweetQuote} />
    </div>
  );
};

export default QuoteBox;
