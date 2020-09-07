import React, { Component } from "react";
import { Card, CardColumns, Button, Table } from "react-bootstrap";
import { render } from "react-dom";
import { NavItem, Navbar, NavLink,Row } from "reactstrap";
import "../App";
import Axios from 'axios';
import { Link } from "react-router-dom";
class HomeCards extends Component {
  constructor(props){
    super(props);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.state={
      Eligible:0,
      Placed:0,
      NotPlaced:0,
      TotalDrives:0,
      HighestPackage:"",
      AveragePacakge:"",
      LeastPackage:"",
      TOF:"",
      year:"2021",
      from_date:"",
      to_date:"",
      name_of_program:"",
      status:"",
      dash:[],
      train:[],
      }
  }
  onChangeYear(e) {
        this.setState({
            year: e.target.value
        });
         Axios.get("http://localhost:80/Admin-backend/AdminDashBoard.php?year="+e.target.value)
   		.then((response)=>{
    	this.setState({
      		Eligible:response.data["Eligible"],
      		Placed:response.data["Placed"],
      		NotPlaced:response.data["Not_placed"],
      		TotalDrives:response.data["total_drives"],
      		HighestPackage:response.data["highest package"],
      		AveragePacakge:response.data["average_package"],
      		LeastPackage:response.data["least_package"],
      		TOF:response.data["total_no.of_offers"]
    	});
    	console.log(response.data);
  		})
   		.catch(err=>console.log(err));
   		Axios.get("http://localhost:80/Admin-backend/TraningDashBoard.php?year="+e.target.value)
    		.then(response=>{
      		this.setState({
        		dash:response.data,
        		from_date: response.data[0]["from_date"],
        		to_date: response.data[0]["to_date"],
        		name_of_program:response.data[0]["name_of_the_program"],
        		status: response.data[0]["status"]
      		})
      		console.log(this.state.dash[1])
    	})
      .catch(err=>console.log(err));
      Axios.get("http://localhost:80/Admin-backend/PlacementsDashBoard.php?year="+e.target.value)
      .then(response=>{
        this.setState({
          train:response.data,
        })
        console.log(this.state.train[1])
      })
      .catch(err=>console.log(err));
  }
  componentDidMount()  {
  	Axios.get("http://localhost:80/Admin-backend/AdminDashBoard.php?year="+2021)
   		.then((response)=>{
    	this.setState({
      		Eligible:response.data["Eligible"],
      		Placed:response.data["Placed"],
      		NotPlaced:response.data["Not_placed"],
      		TotalDrives:response.data["total_drives"],
      		HighestPackage:response.data["highest package"],
      		AveragePacakge:response.data["average_package"],
      		LeastPackage:response.data["least_package"],
      		TOF:response.data["total_no.of_offers"]
    	});
    	console.log(response.data);
  		})
   		.catch(err=>console.log(err));
    Axios.get("http://localhost:80/Admin-backend/TraningDashBoard.php?year="+2021)
    	.then(response=>{
      	this.setState({
        	dash:response.data,
        	from_date: response.data[0]["from_date"],
        	to_date: response.data[0]["to_date"],
        	name_of_program:response.data[0]["name_of_the_program"],
        	status: response.data[0]["status"]
      	})
      	console.log(this.state.dash[1])
    })
    .catch(err=>console.log(err));
    Axios.get("http://localhost:80/Admin-backend/PlacementsDashboard.php?year="+2020)
    .then(response=>{
      this.setState({
        train:response.data,
      })
      console.log(this.state.train[1])
    })
    .catch(err=>console.log(err));
    }
/* {this.state.orderDetails.map((item =>
  <tr><td key={item.OrderID}>{item.UnitPrice}</td></tr>
  ))}
  */

   render() {
    return (
      <div className="container">
                  <div>
                  <Row className="pl-3">
              <h4 className="p-1">Glimpse - </h4>
              <select className="pr-1 pl-1" style={{backgroundColor:'#2A324B',borderColor:'#2A324B',fontSize:'25px',color:'white'}} value={this.state.year} onChange={this.onChangeYear}>
              	<option value="2020">2020</option>
              	<option value="2021">2021</option>
              	<option value="2022">2022</option>
              	<option value="2023">2023</option>
              </select>
            </Row>
            <hr style={{ visibility: "visible" }} />                    
                  </div>
          <div className="row">      
          <div className="col-xs-12 col-lg-3 col-md-6 p-3">
            <Card>
              <Card.Body className="p-3">
                <Card.Text style={{ fontSize: "12px", fontFamily: "Segoe UI" }}>
                  Eligible
                </Card.Text>
                <Card.Text>
                  <p
                    align="right"
                    style={{ fontSize: "14px", fontFamily: "Segoe UI" }}
                  >
                    {this.state.Eligible}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-3 col-md-6 p-3">
            <Card>
              <Card.Body className="p-3">
                <Card.Text style={{ fontSize: "12px", fontFamily: "Segoe UI" }}>
                  Placed
                </Card.Text>
                <Card.Text>
                  <p
                    align="right"
                    style={{ fontSize: "14px", fontFamily: "Segoe UI" }}
                  >
                    {this.state.Placed}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-3 col-md-6 p-3">
            <Card>
              <Card.Body className="p-3">
                <Card.Text style={{ fontSize: "12px", fontFamily: "Segoe UI" }}>
                  Not Placed
                </Card.Text>
                <Card.Text>
                  <p
                    align="right"
                    style={{ fontSize: "14px", fontFamily: "Segoe UI" }}
                  >
                    {this.state.NotPlaced}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-3 col-md-6 p-3">
            <Card>
              <Card.Body className="p-3">
                <Card.Text style={{ fontSize: "12px", fontFamily: "Segoe UI" }}>
                  Total Drives
                </Card.Text>
                <Card.Text>
                  <p
                    align="right"
                    style={{ fontSize: "14px", fontFamily: "Segoe UI" }}
                  >
                    {this.state.TotalDrives}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-3 col-md-6 p-3">
            <Card>
              <Card.Body className="p-3">
                <Card.Text style={{ fontSize: "12px", fontFamily: "Segoe UI" }}>
                  Highest Package
                </Card.Text>
                <Card.Text>
                  <p
                    align="right"
                    style={{ fontSize: "14px", fontFamily: "Segoe UI" }}
                  >
                    {this.state.HighestPackage} LPA
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-3 col-md-6 p-3">
            <Card>
              <Card.Body className="p-3">
                <Card.Text style={{ fontSize: "12px", fontFamily: "Segoe UI" }}>
                  Average Package
                </Card.Text>
                <Card.Text>
                  <p
                    align="right"
                    style={{ fontSize: "14px", fontFamily: "Segoe UI" }}
                  >
                    {this.state.AveragePacakge} LPA
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-3 col-md-6 p-3">
            <Card>
              <Card.Body className="p-3">
                <Card.Text style={{ fontSize: "12px", fontFamily: "Segoe UI" }}>
                  Least Package
                </Card.Text>
                <Card.Text>
                  <p
                    align="right"
                    style={{ fontSize: "14px", fontFamily: "Segoe UI" }}
                  >
                   {this.state.LeastPackage} LPA
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-3 col-md-6 p-3">
            <Card>
              <Card.Body className="p-3">
                <Card.Text style={{ fontSize: "12px", fontFamily: "Segoe UI" }}>
                  Total Number Of Offers
                </Card.Text>
                <Card.Text>
                  <p
                    align="right"
                    style={{ fontSize: "14px", fontFamily: "Segoe UI" }}
                  >
                  {this.state.TOF}
                  </p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        &nbsp;
        <div className="row">
          <div className="col-xs-12 col-lg-6 col-md-12 p-2">
            <Card>
              <Card.Body>
                <div className="row">
                  <div className="col-9">
                    <Card.Title
                      class="p-2"
                      style={{ fontSize: "20px", fontFamily: "Segoe UI" }}
                    >
                      Notice Board-Training
                    </Card.Title>
                  </div>
                  <NavLink tag={Link} to={"/TrainingBoardEdit/"+this.state.year}>
                    <Button
                      style={{
                        backgroundColor: "#2A324B",
                        color: "white",
                        borderColor: "#2A324B",
                      }}
                    >
                      Edit
                    </Button>
                  </NavLink>
                </div>
                &nbsp;
                <div>
                  <Table size="sm" responsive striped>
                    <thead style={{backgroundColor:'#2A324B',color:'white',fontSize:'24px'}}>
                      <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Name of the Programme</th>
                        <th>status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.dash.map((item =>
                      <tr>
                        <td>{item.from_date}</td>
                        <td>{item.to_date}</td>
                        <td>{item.name_of_the_program}</td>
                        <td>{item.status}</td>
                        </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
                <Card.Text>
                  <NavLink tag={Link} to={"/trainingdashboardmore/"+this.state.year}>
                    More..
                  </NavLink>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className="col-xs-12 col-lg-6 col-md-12 p-2">
            <Card>
              <Card.Body>
                <div className="row">
                  <div className="col-9">
                    <Card.Title
                      class="p-2"
                      style={{ fontSize: "20px", fontFamily: "Segoe UI" }}
                    >
                      Notice Board-Placements
                    </Card.Title>
                  </div>
                  <NavLink tag={Link} to={"/PlacementEditBoard/"+this.state.year}>
                    <Button
                      style={{
                        backgroundColor: "#2A324B",
                        color: "white",
                        borderColor: "#2A324B",
                      }}
                    >
                      Edit
                    </Button>
                  </NavLink>
                </div>
                &nbsp;
                <div>
                  <Table size="sm" responsive striped>
                    <thead style={{backgroundColor:'#2A324B',color:'white',fontSize:'24px'}}>
                      <tr>
                        <th>S.No</th>
                        <th>Name of the Programme</th>
                        <th>Date</th>
                        <th>CTC</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.train.map((item =>
                      <tr>
                        <td>{this.state.train.indexOf(item)+1}</td>
                        <td>{item.Company_name}</td>
                        <td>{item.Date}</td>
                        <td>{item.CTC}</td>
                        </tr>
                        ))}
                    </tbody>
                  </Table>
                </div>
                <Card.Text>
                  <NavLink tag={Link} to={"/placementdashboardmore/"+this.state.year}>
                    More..
                  </NavLink>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}
export default HomeCards;