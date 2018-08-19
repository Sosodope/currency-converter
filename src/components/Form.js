import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <div>
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
            placeholder="USD"
            onChange={this.props.handleChange}
            value={this.props.base}
          />
          <input
            type="text"
            name="convertedAmount"
            placeholder="Total Amount Converted"
            onChange={this.props.handleChange}
            value={this.props.convertedAmount}
            disabled
          />
          <input
            type="text"
            name="target"
            placeholder="GBP"
            onChange={this.props.handleChange}
            value={this.props.target}
          />

          <button className="submit" onClick={this.props.handleSubmit}>
            Convert
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
