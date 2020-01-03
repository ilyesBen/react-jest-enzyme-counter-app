import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: false
    };
  }

  incrementCounter = () => {
    const { counter, error } = this.state;
    if (error) {
      this.setState({ error: false });
    }
    this.setState({ counter: counter + 1 });
  };

  decrementCounter = () => {
    const { counter } = this.state;
    if (counter === 0) {
      this.setState({ error: true });
    } else {
      this.setState({ counter: counter - 1 });
    }
  };

  render() {
    const { counter, error } = this.state;
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently {counter}</h1>
        {error && (
          <h1 style={{ color: "red" }} data-test="error-text">
            The counter can not go below 0
          </h1>
        )}
        <button
          data-test="increment-button"
          onClick={() => this.incrementCounter()}
        >
          increment counter
        </button>
        <button
          data-test="decrement-button"
          onClick={() => this.decrementCounter()}
        >
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
