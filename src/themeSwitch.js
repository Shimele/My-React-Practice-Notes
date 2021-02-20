import React from "react";
import "./style.css";
import { ThemeContextConsumer } from "./themeContext";

function ThemeSwitch(props) {
  return (
    <ThemeContextConsumer>
      {(
        context //context is the object that contains both the 'theme' and 'switchtheme' method
      ) => (
        <div>
          <h2 className={`${context.theme}-theme`}>
            {context.theme === "light" ? "Light" : "Dark"} theme
          </h2>
          <button
            onClick={context.switchtheme}
            className={`${context.theme}-theme`}
          >
            {context.theme === "light" ? "Go Dark" : "Go Light"}
          </button>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
export default ThemeSwitch;
