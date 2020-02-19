//// adding Protected Route
import React from "react";
import { Route,Redirect } from "react-router-dom";
//import SignIn from './SignIn';

const PrivateRoute = ({component:Component}, ...rest) => {

    return(
      <Route
      { ...rest}
      render = {(props)=>(
        true? <Component {...props}/>
        : <Redirect to ="/"/>
      )}
      />
    )
  
  }
  export default PrivateRoute;
  