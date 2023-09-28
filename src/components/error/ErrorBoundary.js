import React, { Component } from 'react';
import { ErrorPage } from './index.jsx';

// TODO: Make it work
// ErrorBoundary or errorElement prop.
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

static getDerivedStateFromError() {
    return { hasError: true };
}

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
