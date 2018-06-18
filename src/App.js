import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Test from "./test";
import DataProvider from "./DataProvider";
import Tweets from "./components/Tweets";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { getUser } from "./utils/reducers";

const store = createStore(combineReducers({ getUser }));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/" component={Login} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
