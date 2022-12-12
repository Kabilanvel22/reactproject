import React from 'react'
import PropTypes from 'prop-types'

function Propsval() {
  return (
    <div>
        <h1>Hello EveryOne!!</h1>
        <h3>{this.props.name}</h3>
        <h5>{this.props.id}</h5>
    </div>
  )
}
    Propsval.PropTypes = {
        name : PropTypes.string,
        id : PropTypes.number.isRequired
    }
    Propsval.defaultProps = {
        name : "kabilan",
        id : 46
    }
export default Propsval