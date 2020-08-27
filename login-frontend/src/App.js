import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import LoginComponent from './login-components/LoginComponent';
import LandingRoute from './Components/LandingRoute';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div  className="App">
             <LoginComponent/>
      </div>
    );
  }
}

export default App;
