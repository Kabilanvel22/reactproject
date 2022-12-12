import React, { Component } from 'react'
import ENComponent from './Hoc'

 class Hovercount extends Component {

   
   render() {
    const {name,inc,count} = this.props
    return (
      <div>
      {name}
      <h1 onMouseEnter={inc}>HoverOn{count}</h1>
      </div>
    )
  }

   

}
export default ENComponent (Hovercount);

