import React from "react";
import HOC from "./HOC";
import "./style.css";

function ClickButton(props) {
  return (
    <div>
      <h2>Click me to increment</h2>
      <span>{props.value}</span>
      <br></br>
      <button onClick={props.click}>click me</button>
    </div>
  );
}

export default HOC(ClickButton, 2);
