import React, { useState, useEffect } from "react";
import "./style.css";

function SpeedTypingGame() {
  const startTime = 5;
  const [text, setText] = useState("");
  const [timeRunning, setTimeRunning] = useState(startTime);
  const [timeLeft, setTimeLeft] = useState(false);
  const [wordCount, setWordCount] = useState(0);

  function grabText(event) {
    const { value } = event.target;
    setText(value);
  }

  function countText(text) {
    const textArray = text.split(" ");
    return textArray.filter((x) => x !== "").length;
  }

  function startGame() {
    setText("");
    setTimeLeft(true);
    setTimeRunning(startTime);
    setWordCount(0);
  }

  useEffect(() => {
    if (timeLeft && timeRunning > 0) {
      setTimeout(() => {
        setTimeRunning((prevCount) => prevCount - 1);
      }, 1000);
    } else if (timeRunning == 0) {
      setTimeLeft(false);
      setWordCount(countText(text));
    }
  }, [timeLeft, timeRunning]);

  return (
    <div className="game-interface">
      <h1>How Fast Can You Type?</h1>
      <textarea value={text} onChange={grabText} disabled={!timeLeft} />
      <h2>Time Running:{timeRunning}</h2>
      <button onClick={startGame} disabled={timeLeft}>
        Start
      </button>
      <h2>Word Count:{wordCount}</h2>
    </div>
  );
}

export default SpeedTypingGame;
