import React, { Component } from "react";
import "./App.css";
import Converter from "./components/Converter";
import Form from "./components/Form";
import { Container, Row, Col } from "react-grid-system";

class App extends Component {
  state = {
    base: "",
    target: "",
    amount: "",
    conversionRate: "",
    convertedAmount: ""
  };
  getTargetRate = () => {
    fetch("https://api.exchangeratesapi.io/latest?base=USD")
      .then(res => res.json())
      .then(data => {
        const result = data.rates[this.state.target];
        this.setState({ conversionRate: result });
      });
  };
  getConversionAmount = () => {
    const conversionRate = this.state.conversionRate;
    const amount = this.state.amount;
    const convertedAmount = conversionRate * amount;
    this.setState({ convertedAmount });
    console.log(this.state.conversionRate);
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      amount: this.state.amount,
      target: this.state.target,
      base: this.state.base
    });
    this.getTargetRate();
    this.getConversionAmount();
  };
  handleChange = e => {
    const {
      target: { name, value }
    } = e;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col sm={8}>
            <h1>Currency Converter</h1>
            <Form
              base={this.state.base}
              amount={this.state.amount}
              target={this.state.target}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <Converter amount={this.state.convertedAmount} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
