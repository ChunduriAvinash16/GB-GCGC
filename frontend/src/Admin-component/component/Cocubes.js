import React from "react";
import {
  Card,
  CardSubtitle,
  Table,
} from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import {Radar} from 'react-chartjs-2';
import Axios from 'axios';


class Cocubes extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      cocubes_id:"", Remarks:"", Aptitude:"", English:"",
       Quantitative:"", Analytical:"", Domain:"", ComputerFundamentals:"", 
      Coding:"",WET:"",Personality:""
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
    this.onaHandleCocubes=this.onHandleCocubes.bind(this);
  }
  handleModalcocubes() {
    this.setState({ show: !this.state.show });
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
            cocubes_id:response.data[0]['Assessment_ID'],
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


  onHandleCocubes(e){
    e.preventdefault();
    const obj={
      Cocubes_id:this.state.cocubes_id,
      Overall_Aptitude:this.state.Aptitude,
      English:this.state.English,
      Quantitative:this.state.Quantitative,
      Analytical:this.state.Analytical,
      Domain:this.state.Domain,
      ComputerFundamentals:this.state.ComputerFundamentals,
      Coding:this.state.Coding,
      WET:this.state.WET
    }
    console.log(obj);
    Axios.post("http://localhost/Admin-backend/UpdateCocubes.php?id="+ this.props.cid,obj)
    .then((res) => console.log(res.data),alert("Updated"));
  }
  render() {
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
          //  style={{ maxWidth: "1600px", width: "80%" }}
          >
            <Modal.Header closeButton>Edit Cocubes Marks</Modal.Header>
            <form onSubmit={this.onHandleCocubes}>
            <Modal.Body>
                <Table className="cocubesedit" responsive>
                  <tbody>
                    <tr>
                      <td>Aptitude</td>
                      <td>
                        <input type="text" name="Aptitude"  value={this.state.Aptitude} onChange={this.onChangeApptitude}  />
                      </td>
                    </tr>
                    <tr>
                      <td>English</td>
                      <td>
                        <input type="text" name="English"  value={this.state.English} onChange={this.onChangeEnglish}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Quants</td>
                      <td>
                        <input type="text" name="Quants"  value={this.state.Quantitative} onChange={this.onChangeQuant}/>
                      </td>
                    </tr>
                    <tr>
                      <td>Domain</td>
                      <td>
                        <input type="text" name="Domain"  value={this.state.Domain} onChange={this.onChangeDomain}/>
                      </td>
                      </tr>
                      <tr>
                        <td>Analytical</td>
                        <td>
                          <input type="text" name="Analytical"  value={this.state.Analytical} onChange={this.onChangeAnalytical}/>
                        </td>
                      </tr>
                      <tr>
                        <td>CF</td>
                        <td>
                          <input type="text" name="CF"  value={this.state.ComputerFundamentals} onChange={this.onChangeCF}/>
                        </td>
                      </tr>
                      <tr>
                        <td>Coding</td>
                        <td>
                          <input type="text" name="Coding"  value={this.state.Coding} onChange={this.onChangeCoding}/>
                        </td>
                      </tr>
                      <tr>
                        <td>WET</td>
                        <td>
                          <input type="text" name="WET"  value={this.state.WET} onChange={this.onChangeWET}/>
                        </td>
                    </tr>
                  </tbody>
                </Table>
                </Modal.Body>
              <Modal.Footer>
                <Button type="submit">Submit</Button>
              </Modal.Footer>
            </form>
          </Modal>
        </Card>
      </div>
    );
  }
}

export default Cocubes;
