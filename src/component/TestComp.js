import React, { Component } from "react";

export default class TestComp extends Component {
  state = {
    name: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.name);
  };
  render() {
    return (
      <div>
        <h1>Test component</h1>
        <h2>{this.state.name}</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className="nameInput"
            type="text"
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
