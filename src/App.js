import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";

class App extends Component {
  state = {
    base: "USD",
    target: "GBP",
    amount: "",
    conversionRate: "",
    convertedAmount: ""
  };
  getTargetRate = () => {
    const target = this.state.target.toUpperCase();
    const base = this.state.base.toUpperCase();
    fetch(`https://api.exchangeratesapi.io/latest?base=${base}`)
      .then(res => res.json())
      .then(data => {
        const result = data.rates[target];
        this.setState({ conversionRate: result });
        const conversionRate = this.state.conversionRate;
        const amount = this.state.amount;
        const convertedAmount = conversionRate * amount;
        this.setState({ convertedAmount });
        console.log(this.state.conversionRate);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      amount: this.state.amount,
      target: this.state.target,
      base: this.state.base
    });
    this.getTargetRate();
  };
  handleChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="content">
        <h1>Currency Converter</h1>
        <Form
          base={this.state.base}
          amount={this.state.amount}
          target={this.state.target}
          convertedAmount={this.state.convertedAmount}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
