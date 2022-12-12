import React, { Component } from 'react'
import ENComponent from './Hoc'

 class Counter extends Component {
  render() {
    return (
      <div>
      //{this.props.name}
        <button onClick={this.props.inc}>click{this.props.count}</button>
       
      </div>
    )
  }
}
export default ENComponent (Counter);
