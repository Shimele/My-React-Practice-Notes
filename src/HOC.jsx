import React, { Component } from "react";

function HOC(PassedComponent, DefaultValue) {
  class AddFunctionality extends React.Component {
    state = {
      count: DefaultValue,
      isOn: true,
    };

    incrementAndToggle = () => {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1,
          isOn: !prevState.isOn,
        };
      });
    };

    render() {
      return (
        <div>
          <PassedComponent
            {...this.props}
            click={this.incrementAndToggle}
            value={this.state.count}
            isOn={this.state.isOn}
          />
        </div>
      );
    }
  }
  return AddFunctionality;
}
export default HOC;
