import React, { useState, useEffect } from "react";
import "./style.css";

function Clock() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("hotPink");

  //useEffect as componentDidMount
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    //cleanup this side effect with the clearInterval function
    //acting like componentWillUnmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  //useEffect as componentDidUpdate
  useEffect(() => {
    if (count > 50) {
      setColor("blue");
    }
  }, [count]);

  return (
    <div className="clock" style={{ color: color }}>
      {count}
    </div>
  );
}

export default Clock;
