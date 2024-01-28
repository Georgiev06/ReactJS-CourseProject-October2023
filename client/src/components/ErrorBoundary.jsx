import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor() {
    super();

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

// componentDidCatch(error, errorInfo) {}

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <img
            className="absolute top-[17.5%] left-[33%]"
            src="https://media.istockphoto.com/id/816802498/vector/abandoned-house-spooky-place-dilapidated-building-error-404-page-not-found-message.jpg?s=612x612&w=0&k=20&c=LXsVp5PHs0-WDX0jgwgbXzTSucAPb9p2QmXEgimTF4M="
            alt="image"
          />
        </div>
      );
    }

    return this.props.children;
  }
}
