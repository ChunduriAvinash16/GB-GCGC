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
                    <div className="container">
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to={"/login"}>Login</Link>
                            </li>
                            </ul>
                        </div>
                    </div>

                        <Switch>
                            <Route exact path='/' component={LandingRoute}/>
                            <Route path="/login/"><Login functionCallFromParent={this.parentFunction.bind(this)}/></Route>
                            <Route path="/Loginpage/"><Navbar1 value={this.state.login_id}/><Footer/></Route>
                            <Route path="/AdminPage/"><AdminPage value={this.state.login_id}/></Route>
                            <Route path="/Guestpage/"><Guestpage value={this.state.login_id}/></Route>
                        </Switch>
                
    </Router>
        )
    }
}

export default LoginComponent;