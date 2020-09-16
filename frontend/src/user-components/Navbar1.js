import React,{Component} from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Jumbotron,
  Row,
  Col
} from "reactstrap";
import Leaderboard from "./Leaderboard";
import Dashboard from "./Dashboard";
import Personaldetails from "./Personaldetails";
import Changepassword from "./Changepassword";
import Login from "../login-components/Login";
import Axios from "axios";
import Tooltip from "@material-ui/core/Tooltip";


class Navbar1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login:"",
      fName:"",
      lName:"",
      isNavOpen: false,
      redirect:false
    };
        this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

 /* componentDidMount(){
        Axios.get("http://localhost:80/login-backend/UserNavbar.php?id="+this.state.login)
        .then(res => {
          console.log(res.data);
          this.setState({
            fName: res.data[0]['first_name'],
            lName: res.data[0]['last_name']
          })
        })
  }*/

  render() {
    return (
        <Router>
        <Navbar dark color="dark" expand="lg">
              <Row>
                <div className="col-3 col-md-4 col-lg-3 col-x-1">
                   <NavLink tag={Link} to="/Dashboard" style={{"color":"white","padding":"0px","text-align":"initial"}}>
                    <img src={require("../asstes/gitamlogo.png")} height="50" width="50" />
                      GITAM Bengaluru
                    </NavLink>
                </div>
                <div className="col-7 col-md-6 col-lg-7 col-x-1 pt-2" style={{"color":"aliceblue","font-size":"25px"}}>
                      <h4 className="pr-3"> GITAM Career Guidance Cell </h4>
                </div>
                <div className="col-1 col-md-1 pt-2" style={{"padding":"0px"}}>
                      <NavLink tag={Link} to="/changepassword" style={{"text-align":"right","padding":"0px"}}>
                        <Tooltip title="Settings">
                        <i className="fa fa-cog fa-lg" style={{"color":"aliceblue"}}></i>
                        </Tooltip>
                      </NavLink>  
                     
                </div>
                      <div className="col-1 col-md-1 pt-2">
                        <NavLink tag={Link} style={{"text-align":"left","padding":"0px"}} onClick={ e=>{localStorage.clear();
                                window.location.href = '/login';}}>
                                  <Tooltip title="Log Out">
                                    <i className="fa fa-power-off fa-lg" style={{"color":"aliceblue"}} ></i> 
                                  </Tooltip>
                        </NavLink> 
                </div>
              </Row>
          </Navbar>
          <Switch>
             <Route exact path="/Dashboard" component={()=>(<div><Dashboard login={this.props.value}/></div>)}></Route>
             <Route path="/changepassword" component={()=>(<Changepassword login={this.props.value}/>)}></Route>
          </Switch>
        </Router>
    );
  }
}

export default Navbar1;
