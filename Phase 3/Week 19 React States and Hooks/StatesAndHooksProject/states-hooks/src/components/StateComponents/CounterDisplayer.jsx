
// function CounterDisplayer() {
//   return (
//     <>
//       <p>Number of clicks: {this.props.count}</p>
//     </>
//   )
// }

// export default CounterDisplayer


import  { Component } from 'react'

export default class CounterDisplayer extends Component {
  render() {
    return (
      <div>
        <p>Number of clicks: {this.props.count}</p>
      </div>
    );
  }
}
