import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import LoginComponent from './login-components/LoginComponent';
import LandingRoute from './Components/LandingRoute';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import './App.css';
class App extends Component {
  render() {
    return (
      <div  className="App">
             <LoginComponent/>
      </div>
    );
  }
}

export default App;
