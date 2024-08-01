import React from "react";

export default class CounterClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    const handleClick = () => {
      this.setState((currentState) => {
        return { counter: currentState.counter + 1 };
      });
    };
    console.log(this.state.counter);
    return (
      <div onClick={handleClick}>
        Counter using class component: {this.state.counter}
      </div>
    );
  }
}
