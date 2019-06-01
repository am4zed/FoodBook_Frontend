import React from "react";
import MainContainer from "./containers/MainContainer";
import "./App.css";
import { BrowserRouter as Router, withRouter, Route } from "react-router-dom";

import auth from "./Auth/Auth"

const App = (props) => (
  <Router>
    <MainContainer auth={auth} />
  </Router>
);


export default App;
