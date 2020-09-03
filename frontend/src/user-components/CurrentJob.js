import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import Axios from "axios";
import {
  Card,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";

class  CurrentJob extends Component {
  constructor(props){
    super(props);
    this.state={
            current:[],
            CustomerSales:"",
            Analyst:'',
            PlantEngineer:'',
            RRDEngineer:'',
            NetworkEngineer:'',
            OperationsEngineer:'',
            SoftwareEngineer:'',
            SoftwareDeveloper:'',
            SoftwareTester:'',
            student_id:"321710306001",
    }
};
componentDidMount(){
    Axios.get("http://localhost/login-backend/CurrentJob.php?id="+this.props.jobid)
    .then(response => {
        console.log(response)
        this.setState({
        current:response.data,
        Analyst:response.data[0]['Analyst'],
        CustomerSales:response.data[0]['Customer_Sales_Executive'],
        PlantEngineer:response.data[0]['Graduate_Engineer_Plant'],
        RRDEngineer:response.data[0]['Graduate_Engineer_RD'],
        NetworkEngineer:response.data[0]['Network_Engineer'],
        OperationsEngineer:response.data[0]['Operations_and_Executive'],
        SoftwareEngineer:response.data[0]['Software_Engineer'],
        SoftwareDeveloper:response.data[0]['Software_Developer'],
        SoftwareTester:response.data[0]['Software_Tester'],
        })
        console.log(this.state.Analyst)  
        console.log(this.state.CustomerSales)  
        console.log(this.state.PlantEngineer)  
    })
    .catch(function(err){
    console.log(err);
    })
}
  render(){
  return (
    <div className="CurrentJob">
      <Card className="Rounded p-3">
        <CardSubtitle align="left">Current Job Suitability</CardSubtitle>
        <hr></hr>
        <div className="container">
          <Row className="p-4">
            <Col lg="4" md="6" sm="12">
         
                      <Doughnut data={{datasets: [{
                                data: [this.state.Analyst,100-this.state.Analyst],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      />   
                         Analyst
            </Col>
            <Col lg="4" md="6" sm="12">
            <Doughnut data={{datasets: [{
                                data: [this.state.CustomerSales,100-this.state.CustomerSales],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      />
              CustomerSales
            </Col>
            <Col lg="4" md="6" sm="12">
              <Doughnut data={{datasets: [{
                                data: [this.state.PlantEngineer,100-this.state.PlantEngineer],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      />
              Plant Engineer

            </Col>
            <Col lg="4" md="6" sm="12">
              <Doughnut data={{datasets: [{
                                data: [this.state. RRDEngineer,100-this.state. RRDEngineer],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      />   
              RRD Engineer

            </Col>
            <Col lg="4" md="6" sm="12">
            <Doughnut data={{datasets: [{
                                data: [this.state.NetworkEngineer,100-this.state.NetworkEngineer],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      /> 
              Network Engineer
            </Col>
            <Col lg="4" md="6" sm="12">
            <Doughnut data={{datasets: [{
                                data: [this.state. OperationsEngineer,100-this.state.OperationsEngineer],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      />  
              Operations Engineer
            </Col>
            <Col lg="4" md="6" sm="12">
            <Doughnut data={{datasets: [{
                                data: [this.state.SoftwareDeveloper,100-this.state.SoftwareDeveloper],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      />
              Software Developer
            </Col>
            <Col lg="4" md="6" sm="12">
            <Doughnut data={{datasets: [{
                                data: [this.state. SoftwareEngineer,100-this.state. SoftwareEngineer],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      /> 
              Software Engineer
            </Col>
            <Col lg="4" md="6" sm="12">
            <Doughnut data={{datasets: [{
                                data: [this.state. SoftwareTester,100-this.state.SoftwareTester],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      />
              Software Tester
            </Col>
          </Row>
        </div>
        <br />
       <br />
      </Card>
    </div>
  );
}
}
export default CurrentJob;
