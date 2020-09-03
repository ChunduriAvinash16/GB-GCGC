import React,{Component} from "react";
import { Link, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
  Row
} from "reactstrap";
import Leaderboard from "./Leaderboard";
import Dashboard from "./Dashboard";
import Personaldetails from "./Personaldetails";
import Changepassword from "./Changepassword";
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
                <img src={require("../asstes/gitamlogo.png")} height="50" width="50" />
                GITAM Bengaluru
                </NavbarBrand>
                </div>
                <div className="col-12 col-md-6 col-lg-7 col-x-1">
                <h2 style={{"color":"aliceblue"}} >
                      Gitam Career Guidance Cell
                    </h2>
                </div>
                <div className="col-12 col-md-2 col-lg-2 col-x-1" style={{"textAlign":"end"}}>
                    {/*<NavLink
                    classNam="nav-link"
                      tag={Link}
                      to="/settings"
                    >
                     
                    </NavLink>*/}
                    <i className="fa fa-cog fa-lg" style={{"color":"aliceblue"}}></i>
                    {/*<NavLink
                      className="nav-link"
                      tag={Link}
                      to="/"
                      style={{ color: "lightgreen" }}
                    >
                    
                    </NavLink>*/}
                    <i className="fa fa-power-off fa-lg p-3" style={{"color":"aliceblue"}}></i>
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
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Navbar1;
