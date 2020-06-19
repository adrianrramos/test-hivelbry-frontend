import React from "react";
import history from "../history";
import axios from "axios";
import { Router, Route, Switch } from "react-router-dom";

import Header from "./layout/Header";
import Submit from "./pages/Submit";

import "../styles/App.css";

axios.defaults.baseURL = "https://content.fbslo.net/";

const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/submit" component={Submit} />
      </Switch>
    </Router>
  );
};

export default App;
