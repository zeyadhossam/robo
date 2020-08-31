import React, { Component } from "react";

class ErrorBoundries extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>an error occured</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundries;
