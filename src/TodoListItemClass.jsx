import React from "react";

export class TodoListItemClass extends React.Component {
  render() {
    return (
      <div>
        <label htmlFor={this.props.children}>
          <input
            id={this.props.children}
            type="checkbox"
            defaultChecked={this.props.isComplete}
          />
          {this.props.children}
        </label>
      </div>
    );
  }
}
