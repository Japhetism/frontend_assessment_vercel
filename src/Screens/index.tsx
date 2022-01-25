import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import { HOMEURL, SIGNUPURL } from "./constants";

const Screens = () => {
  return <Fragment>
    <Router>
      <Routes>
        <Route path={HOMEURL} element={ <Signup /> } /> 
        <Route path={SIGNUPURL} element={ <Signup/> } />    
      </Routes>
    </Router>
  </Fragment>
}

export default Screens;