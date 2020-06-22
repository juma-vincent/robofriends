import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasErrors: false };

  componentDidCatch(error, info) {
    this.setState({ hasErrors: true });
  }

  render() {
    return this.state.hasErrors ? (
      <h1>Ooops, there is a problem</h1>
    ) : (
      this.props.children
    );
  }
}

export default ErrorBoundary;
