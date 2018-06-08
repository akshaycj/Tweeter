import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Home from './components/Home'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Test from './test'
import DataProvider from './DataProvider'

class App extends Component{
  render(){
    return(
      <DataProvider>
        <Router>
          <Switch>
          <Route path='/home/:user' component={Home} />
          <Route path='/' component={Login} />
          
          </Switch>
        </Router>
      </DataProvider>
    )
  }
}

export default App;
