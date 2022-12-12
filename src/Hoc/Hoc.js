import React, { Component } from 'react'

    const ENComponent = (OrComponent) => {

    class NewComponent extends Component {

        constructor(props){
            super(props)
            this.state = {count : 0}
          }
          inc = () =>{this.setState(
            {count:this.state.count+1}
        )}

    render() {
        return <OrComponent name="kabilan" 
        count = {this.state.count}
        inc = {this.inc}/>
    }
}
    return NewComponent
    }
    export default ENComponent
