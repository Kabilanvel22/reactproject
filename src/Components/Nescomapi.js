import React from 'react';

export const UserContext = React.createContext();

export default function RContext() {
  return (
    <UserContext.Provider value="Sai">
      <User />
    </UserContext.Provider>
  )
}

function User() {
  return (
    <UserContext.Consumer>
      {value => <h1>{value}</h1>} 
    
    </UserContext.Consumer>
  )
}