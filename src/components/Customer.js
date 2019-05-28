import React, { Component } from "react";

class Customer extends Component {
  render() {
    console.log(this.props.customers);
    return <div>Customer</div>;
  }
}

export default Customer;
