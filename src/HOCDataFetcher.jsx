import React, { Component } from "react";

class HOCDataFetcher extends React.Component {
  state = {
    loading: false,
    data: null,
  };

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://swapi.dev/api/people/1")
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          loading: false,
          data: data,
        })
      );
  }
  render() {
    return this.props.children(this.state.loading, this.state.data);
  }
}

export default HOCDataFetcher;
