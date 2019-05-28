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
    let dollarAmount = 99;
    return (
      <div className="App">
        <Customer customers={this.state.customers} />
        <h1>{calcRewardPtHundred(dollarAmount) + calcRewardPtOverFifty(dollarAmount)}</h1> 
      </div>
    );
  }
}

function calcRewardPtHundred(dollar) {
  // console.log(dollar)
  if (dollar > 100) {
    let remainingHundDollar = (dollar - 100) * 2;
    return remainingHundDollar;
  } else {
    let result = 0;
    return result;
  }
}

function calcRewardPtOverFifty(dollar) {
  if (dollar > 50) {
    let remainingFiftyDollar = (dollar - 50);
    return remainingFiftyDollar;
  } else {
    let result = 0;
    return result;
  }
}

export default App;
