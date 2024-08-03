import React from "react";

export class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 0,
      name: "",
    };
  }

  componentDidMount() {
    console.log("Hi"); //Works on mounting only.
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Re-render"); //Works when state change happens, not on mount

    if (
      prevState.name !== this.state.name ||
      prevState.age !== this.state.age
    ) {
      console.log(
        `My name is ${this.state.name} and I am ${this.state.age} years old`
      );
    }

    if (prevState.name !== this.state.name) {
      console.log((document.title = this.state.name));

      if (this.newTimeout !== null) clearTimeout(this.newTimeout);
      this.newTimeout = setTimeout(() => {
        console.log(`My name is ${this.state.name}`);
      }, 1000);
    }
  }

  componentWillUnmount() {
    if (this.newTimeout !== null) clearTimeout(this.newTimeout);
    console.log("Bye");
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState((currentAge) => {
              return { age: currentAge.age - 1 };
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState((currentAge) => {
              return { age: currentAge.age + 1 };
            })
          }
        >
          +
        </button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    );
  }
}
