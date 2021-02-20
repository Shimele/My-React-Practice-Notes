import React from "react";
import HOC from "./HOC";

function HideShow(props) {
  return (
    <div>
      <h2>Toggling on and off</h2>
      <button onClick={props.click}>menu</button>
      <span style={{ display: props.isOn ? "block" : "none" }}>
        This paragraph will be toggled on and off each time 'menu' button is
        clicked
      </span>
    </div>
  );
}
export default HOC(HideShow);
