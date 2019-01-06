import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Landing from "./layout/Landing";
import Register from "./auth/Register";
import Login from "./auth/Login";
import history from "../history";

export class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Landing} />
            <div className="container">
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} />
            </div>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
