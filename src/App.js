import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LeftInfo from "./leftinfo";
import RightInfo from "./rightinfo";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(params) {
    this.setState({
      value: params
    });
  }

  render() {
    console.log("render");
    return (
      <div className="App">
        <LeftInfo value={this.state.value} bounce={this.state.bounce} />
        <RightInfo value={this.state.value} onChange={this.handleChange} bounceit={this.bounceIt} />
      </div>
    );
  }
}

export default App;
