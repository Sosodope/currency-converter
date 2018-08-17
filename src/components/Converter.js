import React, { Component } from "react";
import { Col } from "react-grid-system";

class Converter extends Component {
  render() {
    return (
      <Col sm={12}>
        <h4>Total Amount</h4>
        {Math.round(this.props.amount, 2)}
      </Col>
    );
  }
}

export default Converter;
