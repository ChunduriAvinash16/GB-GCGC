import React from "react";
import {
  Card,
  CardSubtitle,

  Table,
} from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import {Radar} from 'react-chartjs-2';
import Axios from 'axios';
import { TimelineMonth } from "@syncfusion/ej2-react-schedule";


class Cocubes extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      id:0, Remarks:"", Aptitude:0, English:0, Quantitative:0, Analytical:0, Domain:0, ComputerFundamentals:0, 
      Coding:0,WET:0,Personality:0
    };
    this.handleModalcocubes = this.handleModalcocubes.bind(this);
    this.onChangeApptitude=this.onChangeApptitude.bind(this);
    this.onChangeEnglish=this.onChangeEnglish.bind(this);
    this.onChangeQuant=this.onChangeQuant.bind(this);
    this.onChangeAnalytical=this.onChangeAnalytical.bind(this);
    this.onChangeDomain=this.onChangeDomain.bind(this);
    this.onChangeCF=this.onChangeCF.bind(this);
    this.onChangeCoding=this.onChangeCoding.bind(this);
    this.onChangeWET=this.onChangeWET.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  onChangeApptitude(e){this.setState({Aptitude:e.target.value})}
  onChangeEnglish(e){this.setState({English:e.target.value})}
  onChangeQuant(e){this.setState({Quantitative:e.target.value})}
  onChangeAnalytical(e){this.setState({Analytical:e.target.value})}
  onChangeDomain(e){this.setState({Domain:e.target.value})}
  onChangeCF(e){this.setState({ComputerFundamentals:e.target.value})}
  onChangeCoding(e){this.setState({Coding:e.target.value})}
  onChangeWET(e){this.setState({WET:e.target.value})}
  componentDidMount(){
    Axios.get("http://localhost/login-backend/are_cocubes.php?id="+this.props.cid)
    .then(response => {
        this.setState({
            id:response.data[0]['Assessment_ID'],
            Aptitude:response.data[0]['Overall_Aptitude'],
            English:response.data[0]['English'],
            Quantitative:response.data[0]['Quantitative'],
            Analytical:response.data[0]['Analytical'],
            Domain:response.data[0]['Domain'],
            ComputerFundamentals:response.data[0]['Computer_Fundamentals'],
            Coding:response.data[0]['Coding'],
            WET:response.data[0]['WET'],
            Personality:response.data[0]['Personality'],
            Remarks:response.data[0]["Remarks"]
        })
        console.log(this.state.Personality)
    })
    .catch(function(err){
        console.log(err);
    })
}
handleSubmit(e){
  e.preventdefault();
  const obj={
    Cocubes_id:this.state.id,
    Overall_Aptitude:this.state.Aptitude,
    English:this.state.English,
    Quantitative:this.state.Quantitative,
    Analytical:this.state.Analytical,
    Domain:this.state.Domain,
    ComputerFundamentals:this.state.ComputerFundamentals,
    Coding:this.state.Coding,
    WET:this.state.WET
  };
  console.log(obj);
  Axios.post("http://localhost:80/Admin-backend/UpdateCocubes.php",obj)
  .then((res)=>alert("Sucessfully Updated"))
  .catch(err=>console.log(err));
  this.setState({
    Cocubes_id:0,
    Overall_Aptitude:0,
    English:0,
    Quantitative:0,
    Analytical:0,
    Domain:0,
    ComputerFundamentals:0,
    Coding:0,
    WET:0
  });
}
  handleModalcocubes() {
    this.setState({ show: !this.state.show });
  }
  render() {
    if (this.state.id==0){
      return(  <div>
        </div>);
    }
    return (
      <div class="container-fluid">
        <Card className="Rounded p-3">
          <CardSubtitle align="left">Cocubes Analysis</CardSubtitle>
          <hr></hr>
          <Radar 
            data = {{
                labels: ['Aptitude', 'English', 'Quantitative', 'Analytical', 'Domain', 'Computer Fundamentals', 
                'Coding','WET'],
                datasets: [
                  {
                    label: 'COCUBES1',
                    backgroundColor: 'rgba(30,144,255,0.2)',
                    borderColor: 'rgba(30,144,255,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [this.state.Aptitude,this.state.English,this.state.Quantitative,this.state.Analytical,this.state.Domain,
                        this.state.ComputerFundamentals,this.state.Coding,this.state.WET],
                  },
                  {
                    label: 'COCUBES2',
                    backgroundColor: 'rgba(50,205,50,0.2)',
                    borderColor: 'rgba(50,205,50,1)',
                    pointBackgroundColor: 'rgba(255,0,0,1)',
                    pointBorderColor: '#ff0000',
                    pointHoverBackgroundColor: '#ff0000',
                    pointHoverBorderColor: 'rgba(255,0,0,1)',
                    data: [0, 0, 0, 0, 0, 0, 0,0,0],
                  },
                ],
              }}
              />
          <br></br>
          <Button
            onClick={() => {
              this.handleModalcocubes();
            }}
          >
            Edit
          </Button>
          <Modal
            show={this.state.show}
            onHide={() => this.handleModalcocubes()}
            size="lg"
            style={{ maxWidth: "1600px", width: "80%" }}
          >
            <Modal.Header closeButton>Edit Cocubes Marks</Modal.Header>
            <Modal.Body>
              <form  onSubmit={this.handleSubmit}>
                <Table className="cocubesedit" responsive>
                  <thead>
                    <tr>
                      <th>Aptitude</th>
                      <th>English</th>
                      <th>Quants</th>
                      <th>Domain</th>
                      <th>Analytical</th>
                      <th>CF</th>
                      <th>Coding</th>
                      <th>WET</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                    <td>
                        <input
                          type="text"
                          name="Aptitude"
                          style={{ width: "50px" }}
                          value={this.state.Aptitude}
                          onChange={this.onChangeApptitude}

                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="English"
                          style={{ width: "50px" }}
                          value={this.state.English}
                          onChange={this.onChangeEnglish}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Quants"
                          style={{ width: "50px" }}
                          value={this.state.Quantitative}
                          onChange={this.onChangeQuant}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Domain"
                          style={{ width: "50px" }}
                          value={this.state.Domain}
                          onChange={this.onChangeDomain}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Analytical"
                          style={{ width: "50px" }}
                          value={this.state.Analytical}
                          onChange={this.onChangeAnalytical}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="CF"
                          style={{ width: "50px" }}
                          value={this.state.ComputerFundamentals}
                          onChange={this.onChangeCF}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Coding"
                          style={{ width: "50px" }}
                          value={this.state.Coding}
                          onChange={this.onChangeCoding}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="WET"
                          style={{ width: "50px" }}
                          value={this.state.WET}
                          onChange={this.onChangeWET}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
                <Button type="submit" value="submit" color="primary">
                   Submit
              </Button>
              </form>
            </Modal.Body>
          </Modal>
        </Card>
      </div>
    );
  }
}

export default Cocubes;
