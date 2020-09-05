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
                <div className="col-12 col-md-4 col-lg-3 col-x-1">
                   <NavLink tag={Link} to="/Dashboard" style={{"color":"white"}}>
                    <img src={require("../asstes/gitamlogo.png")} height="50" width="50" />
                      GITAM Bengaluru
                    </NavLink>
                </div>
                <div className="col-12 col-md-6 col-lg-7 col-x-1" style={{"color":"aliceblue","font-size":"25px"}}>
                      GITAM Career Guidance Cell
                </div>
                <div className="col">
                      <Col>
                      <NavLink tag={Link} to="/changepassword">
                        <i className="fa fa-cog fa-lg" style={{"color":"aliceblue"}}></i>
                      </NavLink>  
                      </Col>
                      <Col>
                      <NavLink tag={Link} onClick={ e=>{localStorage.clear();
                              window.location.href = '/login';}}>
                           <i className="fa fa-power-off fa-lg" style={{"color":"aliceblue"}} ></i> 
                      </NavLink> 
                      </Col>
                </div>
              </Row>
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
