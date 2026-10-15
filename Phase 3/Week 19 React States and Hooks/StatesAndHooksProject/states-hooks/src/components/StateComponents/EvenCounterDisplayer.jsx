import  { Component } from 'react'

export default class EvenCounterDisplayer extends Component {
  render() {

    const count = this.props.countEven;
    const evenCount = this.props.countEven % 2 === 0 ? count : count - 1;

    return (
      <div>
        <p>Clicked {evenCount} times</p>
      </div>
    );
  }
}
