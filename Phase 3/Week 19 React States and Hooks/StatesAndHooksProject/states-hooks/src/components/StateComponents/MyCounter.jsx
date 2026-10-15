import { Component } from "react";
import CounterDisplayer from "./CounterDisplayer";
import EvenCounterDisplayer from "./EvenCounterDisplayer";
import './MyCounter.css'

export class MyCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // console.log(this);
  }

  allClicksCounter = () => {
    this.setState((state) => {
      return { count: state.count + 1 };
    });
  };

  render() {
    // console.log(this.state.count); why the results are doubled ?
    return (
      <>
        <button className="btn" onClick={this.allClicksCounter}>count</button>
        <CounterDisplayer clickedCount={this.state.count} />
        <EvenCounterDisplayer countEven={this.state.count} />
      </>
    );
  }
}

export default MyCounter;
