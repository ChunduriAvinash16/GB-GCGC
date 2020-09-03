import React, { Component } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Login from './Login';
import Loginpage from './Loginpage';
import AdminPage from './AdminPage';
import Guestpage from './Guestpage';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-social/bootstrap-social.css";
import Navbar1 from "../user-components/Navbar1";
import Footer from "../user-components/Footer";
import LandingRoute from '../Components/LandingRoute';
import AdminRoute from '../Admin-component/AdminRoute';
import Header from '../Components/Header'
import Dashboard from '../user-components/Dashboard';
class LoginComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            login_id:""
        }
    }
    parentFunction=(data_from_child)=>{
        this.setState({login_id:data_from_child});
        console.log(this.state.login_id)
    }

    render(){
    return (
            <Router>
                        <Switch>
                            <Route path='/login'><Login functionCallFromParent={this.parentFunction.bind(this)}/></Route>
                            <Route path="/Dashboard"><Navbar1 value={this.state.login_id}/><Footer/></Route>
                            <Route path="/home"><AdminRoute value={this.state.login_id}/></Route>
                            <Route path="/Guestpage/"><Guestpage value={this.state.login_id}/></Route>
                        </Switch>
                
            </Router>

        )
    }
}

export default LoginComponent;