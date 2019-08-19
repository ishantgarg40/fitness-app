import React from "react";
import "./App.css";

class LeftInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      danger: "We care for your health"
    };
  }

  render() {
    let classname;
    if (this.props.value == 0) {
      classname = "none";
    } else if (this.props.value < 18.5) {
      this.state.danger = "You need to gain weight";
      classname = "underweight";
    } else if (this.props.value > 25) {
      this.state.danger = "You need to lose weight";
      classname = "overweight";
    } else {
      this.state.danger = "Keep it up! You are fit...";
      classname = "fit";
    }
    return (
      <div className="left">
        <h1>{this.state.danger}</h1>
        <h1>{classname == "none" ? "" : `fitness indication : ${classname}`}</h1>
        <div className="cover">
          <div id="bar" className={`${classname}`} />
        </div>
      </div>
    );
  }
}

export default LeftInfo;
