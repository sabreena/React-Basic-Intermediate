import React from "react";

export default class ProjectClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sab",
      age: 0,
    };
  }

  render() {
    const handleDecrement = () =>
      this.setState((currentAge) => {
        return { age: currentAge.age - 1 };
      });

    return (
      <>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <p>
          <button onClick={handleDecrement}>-</button>
        </p>
        <span>{this.state.age}</span>
        <p>
          <button
            onClick={() =>
              this.setState((currentAge) => {
                return { age: currentAge.age + 1 };
              })
            }
          >
            +
          </button>
        </p>
        <p>
          My name is {this.state.name} and I am {this.state.age} years old.
        </p>
      </>
    );
  }
}
