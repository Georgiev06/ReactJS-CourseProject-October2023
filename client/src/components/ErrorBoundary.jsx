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
          <a href="/" class="absolute top-[65.5%] left-[45.5%] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-800 dark:hover:bg-blue-800 focus:outline-none dark:focus:ring-blue-800">Go to Home</a>
        </div>
      );
    }

    return this.props.children;
  }
}
