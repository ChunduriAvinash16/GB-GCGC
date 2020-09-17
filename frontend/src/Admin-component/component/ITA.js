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
import { Bar } from "react-chartjs-2";
import "chartjs-plugin-datalabels";
import  Axios from 'axios';

class ARI extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,SST1:0,SST2:0,
      TT1:0,TT2:0,TT3:0,TT4:0,TT5:0,
      CRT1:0,CRT2:0,CRT3:0,
    };
    this.handleModalITA = this.handleModalITA.bind(this);
    this.onChangeSST1=this.onChangeSST1.bind(this);
    this.onChangeSST2=this.onChangeSST2.bind(this);
    this.onChangeTT1=this.onChangeTT1.bind(this);
    this.onChangeTT2=this.onChangeTT2.bind(this);
    this.onChangeTT3=this.onChangeTT3.bind(this);
    this.onChangeTT4=this.onChangeTT4.bind(this);
    this.onChangeTT5=this.onChangeTT5.bind(this);
    this.onChangeCRT1=this.onChangeCRT1.bind(this);
    this.onChangeCRT2=this.onChangeCRT2.bind(this);
    this.onChangeCRT3=this.onChangeCRT3.bind(this);
  }
  handleModalITA() {
    this.setState({ show: !this.state.show });
  }
  onChangeSST1(e){this.setState({SST1:e.target.value})}
  onChangeSST2(e){this.setState({SST2:e.target.value})}
  onChangeTT1(e){this.setState({TT1:e.target.value})}
  onChangeTT2(e){this.setState({TT2:e.target.value})}
  onChangeTT3(e){this.setState({TT3:e.target.value})}
  onChangeTT4(e){this.setState({TT4:e.target.value})}
  onChangeTT5(e){this.setState({TT5:e.target.value})}
  onChangeCRT1(e){this.setState({CRT1:e.target.value})}
  onChangeCRT2(e){this.setState({CRT2:e.target.value})}
  onChangeCRT3(e){this.setState({CRT3:e.target.value})}



      componentDidMount(){
        Axios.get("http://localhost:80/login-backend/ita.php?id="+this.props.aid)
        .then(response => {
            console.log(response)
            this.setState({
                SST1:response.data[3]['att'],
                SST2:response.data[4]['att'],
                TT1:response.data[5]['att'],
                TT2:response.data[6]['att'],
                TT3:response.data[7]['att'],
                TT4:response.data[8]['att'],
                TT5:response.data[9]['att'],
                CRT1:response.data[0]['att'],
                CRT2:response.data[1]['att'],
                CRT3:response.data[2]['att']
            })  
        })
        .catch(function(err){
            console.log(err);
        })
    }
  render() {
    return (
      <div class="container-fluid">
        <Row>
          <Col md="12">
            <Card className="Rounded p-3">
              <CardSubtitle align="left">
                Integrated Training Attendance
              </CardSubtitle>
              <hr></hr>
              <Bar
                  style={{height:"500"}}
                  data={{
                            labels: ["SST1","SST2","TT1","TT2","TT3","TT4","TT5","CRT1","CRT2","CRT3"],
                            datasets: [
                            {
                                label: "Attendance",
                                backgroundColor: "lightblue",
                                borderColor: "lightblue",
                                borderWidth: 1,
                                hoverBackgroundColor: "lightblue",
                                hoverBorderColor: "lightblue",
                                data: [this.state.SST1,this.state.SST2,this.state.TT1,this.state.TT2,this.state.TT3,this.state.TT4,
                                this.state.TT5,this.state.CRT1,this.state.CRT2,this.state.CRT3],
                            },
                            {
                                label: "Average Attendance",
                                backgroundColor: "pink",
                                borderColor: "pink",
                                borderWidth: 1,
                                hoverBackgroundColor: "pink",
                                hoverBorderColor: "pink",
                                data: [40, 65, 59, 80, 81, 56, 55],
                            },
                            ],
                        }
                    }
                  options={{
                    scales: {
                      yAxes: [
                        {
                          ticks: {
                            beginAtZero: true,
                            min: 0,
                            max: 100,
                            stepSize: 20,
                          },
                        },
                      ],
                    },
                  }}
              />
              <br></br>
              <Button
                onClick={() => {
                  this.handleModalITA();
                }}
            >
                Edit
              </Button>
              <Modal
                show={this.state.show}
                onHide={() => this.handleModalITA()}
                size="lg"
                style={{ maxWidth: "1600px", width: "80%" }}
              >
                <Modal.Header closeButton>Edit ITA Attandance</Modal.Header>
                <Modal.Body>
                  <form>
                    <Table className="itaedit" responsive>
                      <tr>
                        <td>SST</td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="asst1"
                            value={this.state.SST1}
                            onChange={this.onChangeSST1}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="asst2"
                            value={this.state.SST2}
                            onChange={this.onChangeSST2}

                          />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>TT</td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="aat1"
                            value={this.state.TT1}
                            onChange={this.onChangeTT1}

                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="aat2"
                            value={this.state.TT2}
                            onChange={this.onChangeTT2}

                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="aat3"
                            value={this.state.TT3}
                            onChange={this.onChangeTT3}

                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="aat4"
                            value={this.state.TT4}
                            onChange={this.onChangeTT4}

                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="aat5"
                            value={this.state.TT5}
                            onChange={this.onChangeTT5}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>CRT</td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="acrt1"
                            value={this.state.CRT1}
                            onChange={this.onChangeCRT1}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="acrt2"
                            value={this.state.CRT2}
                            onChange={this.onChangeCRT2}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="acrt3"
                            value={this.state.CRT3}
                            onChange={this.onChangeCRT3}
                          />
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                    </Table>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button>Submit</Button>
                </Modal.Footer>
              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ARI;
