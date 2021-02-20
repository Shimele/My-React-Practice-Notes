import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    theme: "dark",
  };
  switchtheme = () => {
    this.setState((prevState) => {
      return {
        theme: prevState.theme === "dark" ? "light" : "dark",
      };
    });
  };
  render() {
    return (
      <Provider
        value={{ theme: this.state.theme, switchtheme: this.switchtheme }} //passing an object as value permit us pass multiple props to be used by the children consumer
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
