import React from "react";
class Lifecycle extends React.Component
{
constructor(props) {  
    super(props);
    console.log('component initialized')  
    this.state = {msg: "hello"};  
    this.changeState = this.changeState.bind(this)  
 }    
 render() {  
   console.log('component rendered');
    return (  
       <div>  
           <h3>ReactJS component's Lifecycle</h3>  
           <h3> {this.state.msg}</h3>  
           <button onClick = {this.changeState}>Click Here!</button>
</div>  
    );  
 }  
 componentWillMount() {  
    console.log('Component Will MOUNT!')  
 }  
 componentDidMount() {  
    console.log('Component Did MOUNT!')  
 }  
 changeState(){  
    this.setState({msg:"hai"});  
 }  

 shouldComponentUpdate(newProps, newState) {  
    return true;  
 }  
 componentWillUpdate(nextProps, nextState) {  
    console.log('Component Will UPDATE!');  
 }  
 componentDidUpdate(prevProps, prevState) {  
    console.log('Component Did UPDATE!')  
 }
componentWillUnmount() {  
    console.log('Component Will UNMOUNT!')  
 }  
}  
export default Lifecycle;