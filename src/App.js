import React, { Component } from "react";
import Customer from "./components/Customer";

class App extends Component {
  state = {
    customers: [
      {
        id: 1,
        name: "George Okello",
        dollars: 22.5
      },
      {
        id: 2,
        name: "Arthur Okello",
        dollars: 22.5
      }
    ]
  };

  render() {
    //console.log(this.state.customer)
    return (
      <div className="App">
        <Customer customers={this.state.customers} />
        <h1>{calculateRewardPoint(120)}</h1> 
      </div>
    );
  }
}

function calculateRewardPoint(dollar) {
  // console.log(dollar)
  if (dollar >= 100) {
    let sum = 3;
    console.log("2 points");
    return sum;
  } else {
    console.log("No points");
  }
}

export default App;
