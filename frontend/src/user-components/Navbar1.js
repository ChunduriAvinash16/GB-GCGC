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
  Row
} from "reactstrap";
import Leaderboard from "./Leaderboard";
import Dashboard from "./Dashboard";
import Personaldetails from "./Personaldetails";
import Changepassword from "./Changepassword";
import Login from "../login-components/Login";
import Calender from "./Calender";
import Axios from "axios";

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
      <div className="Navbar1">
        <Router>
        <Navbar dark color="dark" expand="lg">
            <div className="container-fluid">
              <Row>
                <div className="col-12 col-md-3 col-lg-3 col-x-1" style={{"textAlign": "initial"}}>
                  <NavbarBrand className="mr-auto">
                    <NavLink tag={Link} to="/Dashboard">
                    <img src={require("../asstes/gitamlogo.png")} height="50" width="50" />
                      GITAM Bengaluru
                    </NavLink>
                  </NavbarBrand>
                </div>
                <div className="col-12 col-md-6 col-lg-7 col-x-1">
                    <h3 style={{"color":"aliceblue"}} >
                      Gitam Career Guidance Cell
                    </h3>
                </div>
                <div className="col-6 col-md-1 col-lg-1 col-x-1" style={{"textAlign":"end"}}>
                    {/*<NavLink
                    classNam="nav-link"
                      tag={Link}
                      to="/settings"
                    >
                     
                    </NavLink>*/}
                    <NavLink tag={Link} to="/changepassword">
                      <i className="fa fa-cog fa-lg" style={{"color":"aliceblue"}}></i>
                    </NavLink>
                  </div>
                  <div className="col-6 col-md-1 col-lg-1 col-x-1" style={{"textAlign":"end"}}>
                    {/*<NavLink
                      className="nav-link"
                      tag={Link}
                      to="/"
                      style={{ color: "lightgreen" }}
                    >
                    
                    </NavLink>*/}
                     <NavLink tag={Link} onClick={ e=>{localStorage.clear();
                              window.location.href = '/login';}}>
                           <i className="fa fa-power-off fa-lg" style={{"color":"aliceblue"}} ></i> 
                      </NavLink>
                   
                   {/*<NavItem>
                    <NavLink
                      align="left"
                      className="nav-link active"
                      tag={Link}
                      to="/Dashboard1"
                      style={{ color: "lightgreen" }}
                    >
                    </NavLink>
                   </NavItem>*/}
                </div>
              </Row>
             
                          
               
                  {/*<NavItem>
                    <NavLink
                      align="left"
                      className="nav-link "
                      tag={Link}
                      to="/changepassword"
                      style={{ color: "lightgreen" }}
                    >
                      <span class="fa fa-key"></span>&nbsp;Change Password
                    </NavLink>
                  </NavItem>*/}
             </div>
          </Navbar>
          <Switch>
             <Route exact path="/Dashboard" component={()=>(<div><Dashboard login={this.props.value}/></div>)}></Route>
             <Route path="/changepassword" component={()=>(<Changepassword login={this.props.value}/>)}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navbar1;
