import React from "react";
import "./App.css";

class RightInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      weight: null,
      height: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let bmi;
    if (this.state.weight && this.state.height) {
      bmi = this.state.weight / (this.state.height * this.state.height);
      this.props.onChange(bmi);
    }
  }

  render() {
    let bmi = this.state.weight / (this.state.height * this.state.height);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.weight} placeholder="weight in kg..." name="weight" onChange={this.handleChange} />
          <input
            value={this.state.height}
            placeholder="height in metres.."
            name="height"
            onChange={this.handleChange}
          />
          <button>Compute</button>
        </form>
        <div>
          <p>Your BMI is : {bmi ? bmi.toFixed(4) : <span>________</span>} </p>
        </div>
      </div>
    );
  }
}

export default RightInfo;
