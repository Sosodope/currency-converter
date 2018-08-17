import React, { Component } from "react";
import { Container, Row, Col } from "react-grid-system";

class Form extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12}>
            <form onSubmit={this.props.handleSubmit}>
              <input
                type="text"
                name="amount"
                placeholder="Enter Amount"
                onChange={this.props.handleChange}
                value={this.props.amount}
              />
              <input
                type="text"
                name="base"
                placeholder="Base"
                onChange={this.props.handleChange}
                value={this.props.base}
              />
              <input
                type="text"
                name="target"
                placeholder="Target"
                onChange={this.props.handleChange}
                value={this.props.target}
              />
              <button onClick={this.props.handleSubmit}>Convert</button>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Form;
