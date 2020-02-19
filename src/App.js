import React from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import SignUp from "./Components/SignUp";
import { BrowserRouter, Route ,Switch} from "react-router-dom";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import Dashboard from "./Components/Dash";
import Error from "./Components/Error";
/* import PrivateRoute from "./Components/PrivateRoute"; */
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/SignUp" component={SignUp}></Route>
          <Route exact path="/SignIn" component={SignIn} />
          {/* <Route exact path="/Dash/:userName/:passWord" component={Dashboard} /> */}
          <Route exact path="/Dash/:userName/:passWord" component={Dashboard} />
          {/* <PrivateRoute path='/Dash' component={Dashboard} /> */}
          <Route component={Error} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}


export default App;
