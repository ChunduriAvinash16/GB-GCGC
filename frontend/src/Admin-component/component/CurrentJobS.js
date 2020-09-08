import React from "react";
import {
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
  Container,
  Row,
  Col,
  Alert,
  Collapse,
  Table,
} from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import Axios from "axios";
import { Doughnut } from "react-chartjs-2";

class CurrentJobS extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
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
    };
    this.handleModalcurrentjob = this.handleModalcurrentjob.bind(this);
    this.onChangeAnalyst = this.onChangeAnalyst.bind(this);
    this.onChangeCustomerSales = this.onChangeCustomerSales.bind(this);
    this.onChangePlantEngineer = this.onChangePlantEngineer.bind(this);
    this.onChangeRRDEngineer = this.onChangeRRDEngineer.bind(this);
    this.onChangeNetworkEngineer = this.onChangeNetworkEngineer.bind(this);
    this.onChangeOperationsEngineer = this.onChangeOperationsEngineer.bind(this);
    this.onChangeSoftwareEngineer = this.onChangeSoftwareEngineer.bind(this);
    this.onChangeSoftwareDeveloper = this.onChangeSoftwareDeveloper.bind(this);
    this.onChangeSoftwareTester = this.onChangeSoftwareTester.bind(this);
    this.onSubmitCurrentJob = this.onSubmitCurrentJob.bind(this)
  }
  handleModalcurrentjob() {
    this.setState({ show: !this.state.show });
  }
  onChangeAnalyst(e){
    this.setState({
      Analyst: e.target.value
    })
  }
  onChangeCustomerSales(e){
    this.setState({
      CustomerSales: e.target.value
    })
  }
  onChangePlantEngineer(e){
    this.setState({
      PlantEngineer:e.target.value
    })
  }
  onChangeRRDEngineer(e){
    this.setState({
      RRDEngineer: e.target.value
    })
  }
  onChangeNetworkEngineer(e){
    this.setState({
      NetworkEngineer:e.target.value
    })
  }
  onChangeOperationsEngineer(e){
    this.setState({
      OperationsEngineer:e.target.value
    })
  }
  onChangeSoftwareEngineer(e){
    this.setState({
      SoftwareEngineer:e.target.value
    })
  }
  onChangeSoftwareDeveloper(e){
    this.setState({
      SoftwareDeveloper: e.target.value
    })
  }
  onChangeSoftwareTester(e){
    this.setState({
      SoftwareTester: e.target.value
    })
  }
  componentDidMount(){
    Axios.get("http://localhost/login-backend/CurrentJob.php?id="+this.props.cs)
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
onSubmitCurrentJob(e){
  e.preventDefault();
  const obj = {
    Analyst: this.state.Analyst,
    CustomerSales: this.state.CustomerSales,
    PlantEngineer: this.state.PlantEngineer,
    RRDEngineer: this.state.RRDEngineer,
    NetworkEngineer: this.state.NetworkEngineer,
    OperationsEngineer: this.state.OperationsEngineer,
    SoftwareEngineer: this.state.SoftwareEngineer,
    SoftwareDeveloper: this.state.SoftwareDeveloper,
    SoftwareTester: this.state.SoftwareTester
  }
  console.log(obj);
  Axios.post(
    "http://localhost/Admin-backend/CurrentJobIndividual.php?id=" + this.props.cs,obj)
    .then((res) => console.log(res.data),alert("Updated"));
}
  render() {
    return (
      <div class="container-fluid">
        <Card className="Rounded p-3">
          <CardSubtitle align="left">Current Job Suitability</CardSubtitle>
          <hr></hr>

          <div class="container-fluid">
            <Row>
            <Col lg="4" md="6" sm="12">
         
                      <Doughnut data={{datasets: [{
                                data: [this.state.Analyst,100-this.state.Analyst],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      />Analyst
            </Col>
            <Col lg="4" md="6" sm="12">
            <Doughnut data={{datasets: [{
                                data: [this.state.CustomerSales,100-this.state.CustomerSales],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      />CustomerSales
            </Col>
            <Col lg="4" md="6" sm="12">
              <Doughnut data={{datasets: [{
                                data: [this.state.PlantEngineer,100-this.state.PlantEngineer],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      /> Plant Engineer
            </Col>
            <Col lg="4" md="6" sm="12">
              <Doughnut data={{datasets: [{
                                data: [this.state. RRDEngineer,100-this.state. RRDEngineer],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      />RRD Engineer
            </Col>
            <Col lg="4" md="6" sm="12">
            <Doughnut data={{datasets: [{
                                data: [this.state.NetworkEngineer,100-this.state.NetworkEngineer],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      /> Network Engineer
            </Col>
            <Col lg="4" md="6" sm="12">
            <Doughnut data={{datasets: [{
                                data: [this.state. OperationsEngineer,100-this.state.OperationsEngineer],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      /> Operations Engineer
            </Col>
            <Col lg="4" md="6" sm="12">
            <Doughnut data={{datasets: [{
                                data: [this.state.SoftwareDeveloper,100-this.state.SoftwareDeveloper],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      /> Software Developer
            </Col>
            <Col lg="4" md="6" sm="12">
            <Doughnut data={{datasets: [{
                                data: [this.state. SoftwareEngineer,100-this.state. SoftwareEngineer],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      /> Software Engineer
            </Col>
            <Col lg="4" md="6" sm="12">
            <Doughnut data={{datasets: [{
                                data: [this.state. SoftwareTester,100-this.state.SoftwareTester],
                                backgroundColor: ['#4169E1','#EEEEEE'],
                                 hoverBackgroundColor: ['#4169E1','#EEEEEE']
                           }]}} 
                      />Software Tester
            </Col>
          </Row>
          </div>
          <br></br>
          <Button
            onClick={() => {
              this.handleModalcurrentjob();
            }}
          >
            Edit
          </Button>
          <Modal
            show={this.state.show}
            onHide={() => this.handleModalcurrentjob()}
          >
            <Modal.Header closeButton>Edit </Modal.Header>
            <form onSubmit={this.onSubmitCurrentJob}>
            <Modal.Body>
              <Table className="CurrentJobSEdit" responsive>
                <tr>
                  <td>Analyst</td>
                  <td>
                    <input type="text" name="Analyst" onChange={this.onChangeAnalyst} value={this.state.Analyst} />
                  </td>
                </tr>
                <tr>
                  <td>CostumerSales</td>
                  <td>
                    <input type="text" name="CustomerSales" onChange={this.onChangeCustomerSales} value={this.state.CustomerSales} />
                  </td>
                </tr>
                <tr>
                  <td>Plant Engineer</td>
                  <td>
                    <input type="text" name="PlantEngineer" onChange={this.onChangePlantEngineer} value={this.state.PlantEngineer} />
                  </td>
                </tr>
                <tr>
                  <td>RRD Engineer</td>
                  <td>
                    <input type="text" name="RRDEngineer" onChange={this.onChangeRRDEngineer} value={this.state.RRDEngineer}/>
                  </td>
                </tr>
                <tr>
                  <td>Network Engineer</td>
                  <td>
                    <input type="text" name="NetworkEngineer" onChange={this.onChangeNetworkEngineer} value={this.state.NetworkEngineer} />
                  </td>
                </tr>
                <tr>
                  <td>Operations Engineer</td>
                  <td>
                    <input type="text" name="OperationsEngineer" onChange={this.onChangeOperationsEngineer} value={this.state.OperationsEngineer} />
                  </td>
                </tr>
                <tr>
                  <td>Software Developer</td>
                  <td>
                    <input type="text" name="SoftwareDeveloper" onChange={this.onChangeSoftwareDeveloper} value={this.state.SoftwareDeveloper} />
                  </td>
                </tr>
                <tr>
                  <td>Software Engineer</td>
                  <td>
                    <input type="text" name="SoftwareEngineer" onChange={this.onChangeSoftwareEngineer} value={this.state.SoftwareEngineer} />
                  </td>
                </tr>
                <tr>
                  <td>Software Tester</td>
                  <td>
                    <input type="text" name="SoftwareTester" onChange={this.onChangeSoftwareTester} value={this.state.SoftwareTester} />
                  </td>
                </tr>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button type="submit" >Submit</Button>
            </Modal.Footer>
            </form>
          </Modal>
        </Card>
      </div>
    );
  }
}

export default CurrentJobS;
