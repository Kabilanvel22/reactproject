import React from "react";
class Nestedcomp extends React.Component {  
    render() {  
      return <ComponentA name="Login" />;  
    }  
  }  
   function ComponentA(props) {  
    return (  
      <div>  
        <ComponentB name={props.name} />  
      </div>  
    );  
  }  
  class ComponentB extends React.Component {  
    render() {  
      return <button>{this.props.name}</button>;  
    }  
  }  
  
export default Nestedcomp;