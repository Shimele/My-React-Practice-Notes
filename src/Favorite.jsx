import React from "react";
import HOC from "./HOC";

function Favorite(props) {
  return (
    <div>
      <h2>Click here to toggle favourite</h2>
      <span onClick={props.click}>{props.isOn ? "❤️" : "♡"}</span>
    </div>
  );
}

export default HOC(Favorite);
