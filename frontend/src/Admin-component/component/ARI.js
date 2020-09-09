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
import { Bar } from 'react-chartjs-2'; 
import Axios from 'axios';
class ARI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      AT1:0,AT2:0,AT3:0,AT4:0,AT5:0,AT6:0,TT1:0,TT2:0,TT3:0,TT4:0,TT5:0,TT6:0,TT7:0,TT8:0,DT1:0,DT2:0,DT3:0,DT4:0,
      student_id:321710307034,
    };
    this.handleModalARI = this.handleModalARI.bind(this);
    this.onChangeAT1 = this.onChangeAT1.bind(this);
    this.onChangeAT2 = this.onChangeAT2.bind(this);
    this.onChangeAT3 = this.onChangeAT3.bind(this);
    this.onChangeAT4 = this.onChangeAT4.bind(this);
    this.onChangeAT5 = this.onChangeAT5.bind(this);
    this.onChangeAT6 = this.onChangeAT6.bind(this);
    this.onChangeTT1 = this.onChangeTT1.bind(this);
    this.onChangeTT2 = this.onChangeTT2.bind(this);
    this.onChangeTT3 = this.onChangeTT3.bind(this);
    this.onChangeTT4 = this.onChangeTT4.bind(this);
    this.onChangeTT5 = this.onChangeTT5.bind(this);
    this.onChangeTT6 = this.onChangeTT6.bind(this);
    this.onChangeTT7 = this.onChangeTT7.bind(this);
    this.onChangeTT8 = this.onChangeTT8.bind(this);
    this.onChangeDT1 = this.onChangeDT1.bind(this);
    this.onChangeDT2 = this.onChangeDT2.bind(this);
    this.onChangeDT3 = this.onChangeDT3.bind(this);
    this.onChangeDT4 = this.onChangeDT4.bind(this);
    this.onSubmitARI = this.onSubmitARI.bind(this);
  }
  handleModalARI() {
    this.setState({ show: !this.state.show });
  }
  onChangeAT1(e){
    this.setState({
      AT1:e.target.value
    })
  }
  onChangeAT2(e){
    this.setState({
      AT2: e.target.value
    })
  }
  onChangeAT3(e){
    this.setState({
      AT3: e.target.value
    })
  }
  onChangeAT4(e){
    this.setState({
      AT4: e.target.value
    })
  }
  onChangeAT5(e){
    this.setState({
      AT5: e.target.value
    })
  }
  onChangeAT6(e){
    this.setState({
      AT6: e.target.value
    })
  }
  onChangeTT1(e){
    this.setState({
      TT1: e.target.value
    })
  }
  onChangeTT2(e){
    this.setState({
      TT2: e.target.value
    })
  }
  onChangeTT3(e){
    this.setState({
      TT3: e.target.value
    })
  }
  onChangeTT4(e){
    this.setState({
      TT4: e.target.value
    })
  }
  onChangeTT5(e){
    this.setState({
      TT5: e.target.value
    })
  }
  onChangeTT6(e){
    this.setState({
      TT6: e.target.value
    })
  }
  onChangeTT7(e){
    this.setState({
      TT7: e.target.value
    })
  }
  onChangeTT8(e){
    this.setState({
      TT8: e.target.value
    })
  }
  onChangeDT1(e){
    this.setState({
      DT1: e.target.value
    })
  }
  onChangeDT2(e){
    this.setState({
      DT2: e.target.value
    })
  }
  onChangeDT3(e){
    this.setState({
      DT3: e.target.value
    })
  }
  onChangeDT4(e){
    this.setState({
      DT4: e.target.value
    })
  }
  componentDidMount(){
    Axios.get("http://localhost/login-backend/ari.php?id="+this.props.ari)
    .then(response => {
        this.setState({
            AT1:response.data[0]['AT1_score'],
            AT2:response.data[0]['AT2_score'],
            AT3:response.data[0]['AT3_score'],
            AT4:response.data[0]['AT4_score'],
            AT5:response.data[0]['AT5_score'],
            AT6:response.data[0]['AT6_score'],
            TT1:response.data[0]['TT1_percentage'],
            TT2:response.data[0]['TT2_percentage'],
            TT3:response.data[0]['TT3_percentage'],
            TT4:response.data[0]['TT4_percentage'],
            TT5:response.data[0]['TT5_percentage'],
            TT6:response.data[0]['TT6_percentage'],
            TT7:response.data[0]['TT7_percentage'],
            TT8:response.data[0]['TT8_percentage'],
            DT1:response.data[0]['DT1_score'],
            DT2:response.data[0]['DT2_score'],
            DT3:response.data[0]['DT3_score'],
            DT4:response.data[0]['DT4_score'],
        })
        console.log(this.state.AT1)
    })
    .catch(function(err){
        console.log(err);
    })
}
onSubmitARI(e){
  e.preventDefault();
  const obj ={
    AT1:this.state.AT1,
    AT2:this.state.AT2,
    AT3:this.state.AT3,
    AT4:this.state.AT4,
    AT5:this.state.AT5,
    AT6:this.state.AT6,
    TT1:this.state.TT1,
    TT2:this.state.TT2,
    TT3:this.state.TT3,
    TT4:this.state.TT4,
    TT5:this.state.TT5,
    TT6:this.state.TT6,
    TT7:this.state.TT7,
    TT8:this.state.TT8,
    DT1:this.state.DT1,
    DT2:this.state.DT2,
    DT3:this.state.DT3,
    DT4:this.state.DT4,
  }
  console.log(obj);
  Axios.post(
    "http://localhost/Admin-backend/ARIIndividual.php?id=" + this.props.ari,obj)
    .then((res) => console.log(res.data),alert("Updated"));
}
  render() {
    return (
      <div class="container-fluid">
        <Row>
          <Col sm="12">
            <Card className="Rounded p-3">
              <CardSubtitle align="left">
                Assesment Report Internal
              </CardSubtitle>
              <hr></hr>
              <Bar
                data={{
                    labels: ['CT1','CT2','CT3','CT4','CT5','CT6','TT1','TT2','TT3','TT4','TT5','TT6','TT7','TT8','DT1','DT2','DT3','DT4'],
                datasets: [
                        {
                          backgroundColor: ['lightblue','lightblue','lightblue','lightblue','lightblue','lightblue',
                            'lightgreen','lightgreen','lightgreen','lightgreen','lightgreen','lightgreen','lightgreen','lightgreen',
                            'pink','pink','pink','pink'
                          ],
                          borderColor: ['lightblue','lightblue','lightblue','lightblue','lightblue','lightblue',
                            'lightgreen','lightgreen','lightgreen','lightgreen','lightgreen','lightgreen','lightgreen','lightgreen',
                            'pink','pink','pink','pink'
                          ],
                          borderWidth: 1,
                          hoverBackgroundColor: ['blue','blue','blue','blue','blue','blue','green','green','green','green','green','green','green','green','red','red','red','red'],
                          hoverBorderColor: ['blue','blue','blue','blue','blue','blue','green','green','green','green','green','green','green','green','red','red','red','red'],
                          data: [this.state.AT1,this.state.AT2,this.state.AT3,this.state.AT4,this.state.AT5,this.state.AT6,this.state.TT1,this.state.TT2,this.state.TT3,this.state.TT4,
                            this.state.TT5,this.state.TT6,this.state.TT7,this.state.TT8,this.state.DT1,this.state.DT2,this.state.DT3,this.state.DT4], 
                          },
                        ],
                }}
                options={{
                    scales: {
                      yAxes: [{
                        ticks: {
                          beginAtZero: true,
                          max: 100,
                          stepSize: 20  
                        }
                      }]
                    },
                  }}
                  />
              <br></br>
              <Button
                onClick={() => {
                  this.handleModalARI();
                }}
              >
                Edit
              </Button>
              <Modal
                show={this.state.show}
                onHide={() => this.handleModalARI()}
                size="lg"
                style={{ maxWidth: "1600px", width: "80%" }}
              >
                <Modal.Header closeButton>Edit ARI Marks</Modal.Header>
                <form onSubmit={this.onSubmitARI}>
                <Modal.Body>
                  <form>
                    <Table className="ARIedit" responsive>
                      <tr>
                        <td> </td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                      </tr>
                      <tr>
                        <td>AT</td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="at1"
                            value={this.state.AT1}
                            onChange={this.onChangeAT1}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="at2"
                            value={this.state.AT2}
                            onChange={this.onChangeAT2}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="at3"
                            value={this.state.AT3}
                            onChange={this.onChangeAT3}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="at4"
                            value={this.state.AT4}
                            onChange={this.onChangeAT4}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="at5"
                            value={this.state.AT5}
                            onChange={this.onChangeAT5}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="at6"
                            value={this.state.AT6}
                            onChange={this.onChangeAT6}
                          />
                        </td>
                        <td></td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>TT</td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt1"
                            value={this.state.TT1}
                            onChange={this.onChangeTT1}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt2"
                            value={this.state.TT2}
                            onChange={this.onChangeTT2}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt3"
                            value={this.state.TT3}
                            onChange={this.onChangeTT3}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt4"
                            value={this.state.TT4}
                            onChange={this.onChangeTT4}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt5"
                            value={this.state.TT5}
                            onChange={this.onChangeTT5}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt6"
                            value={this.state.TT6}
                            onChange={this.onChangeTT6}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt7"
                            value={this.state.TT7}
                            onChange={this.onChangeTT7}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="tt8"
                            value={this.state.TT8}
                            onChange={this.onChangeTT8}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>DT</td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="dt1"
                            value={this.state.DT1}
                            onChange={this.onChangeDT1}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="dt2"
                            value={this.state.DT2}
                            onChange={this.onChangeDT2}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="dt3"
                            value={this.state.DT3}
                            onChange={this.onChangeDT3}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            style={{ width: "50px" }}
                            name="dt4"
                            value={this.state.DT4}
                            onChange={this.onChangeDT4}
                          />
                        </td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                      </tr>
                    </Table>
                  </form>
                </Modal.Body>
                <Modal.Footer>
                  <Button type="submit">Submit</Button>
                </Modal.Footer>
                </form>
              </Modal>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ARI;
