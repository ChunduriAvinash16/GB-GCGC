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
import Axios from 'axios';
import {Radar} from 'react-chartjs-2';

class Amcat extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      id:"",LogicalAbility:0, EnglishComprehension:0, QuantitativeAbility:0, Automata:0, AutomataFix:0, Domain1:0, Domain2:0,
    };
    this.handleModalamcat = this.handleModalamcat.bind(this);
    this.onChangeLogical=this.onChangeLogical.bind(this);
    this.onChangeEnglish=this.onChangeEnglish.bind(this);
    this.onChangeQuant=this.onChangeLogical.bind(this);
    this.onChangeDomain1=this.onChangeDomain1.bind(this);
    this.onChangeDomain2=this.onChangeDomain2.bind(this);
    this.onChangeAutomata=this.onChangeAutomata.bind(this);
    this.onChangeAutomataFix=this.onChangeAutomataFix.bind(this);
  }
  handleModalamcat() {
    this.setState({ show: !this.state.show });
  }
  onChangeLogical(e){
    this.setState({
      LogicalAbility:e.target.value
    });
  }
  onChangeEnglish(e){
    this.setState({
      EnglishComprehension:e.target.value
    })
  }
  onChangeLogical(e){this.setState({QuantitativeAbility:e.target.value})}
  onChangeAutomata(e){this.setState({Automata:e.target.value})}
  onChangeAutomataFix(e){this.setState({AutomataFix:e.target.value})}
  onChangeDomain1(e){this.setState({Domain1:e.target.value})}
  onChangeDomain2(e){this.setState({Domain2:e.target.value})}
  componentDidMount(){
    Axios.get("http://localhost/login-backend/are_amcat.php?id="+this.props.aid)
    .then(response => {
        this.setState({
            id:response.data[0]['Assessment_ID'],
            LogicalAbility:response.data[0]['1_Logical_Ability_900M'],
            EnglishComprehension:response.data[0]['2_English_Comprehension_900M'],
            QuantitativeAbility:response.data[0]['3_Quantitative_Ability_900M'],
            Automata:response.data[0]['4_Automata_100M'],
            AutomataFix:response.data[0]['5_Automata_Fix_100M'],
            Domain1:response.data[0]['6a_domain_1_900M'],
            Domain2:response.data[0]['6b_domain_2_900M'],
        })
        console.log(this.state.LogicalAbility)
    })
    .catch(function(err){
        console.log(err);
    })
}
  render() {
    if(this.state.id==="NI" || this.state.id=="NA"){
      return(<div></div>)
    }
    return (
      <div class="container-fluid">
        <Card className="Rounded p-3">
          <CardSubtitle align="left">Amcat Analysis</CardSubtitle>
          <hr></hr>
          <Radar 
        data = {{
            labels: ['Logical Ability', 'English Comprehension', 'Quantitative Ability', 'Automata', 'Automata Fix', 'Domain_1', 'Domain_2'],
            datasets: [
              {
                label: 'AMCAT1',
                backgroundColor: 'rgba(30,144,255,0.2)',
                borderColor: 'rgba(30,144,255,1)',
                pointBackgroundColor: 'rgba(179,181,198,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: [this.state.LogicalAbility,this.state.EnglishComprehension,this.state.QuantitativeAbility,this.state.Automata,
                this.state.AutomataFix,this.state.Domain1,this.state.Domain2],
              },
              {
                label: 'AMCAT2',
                backgroundColor: 'rgba(50,205,50,0.2)',
                borderColor: 'rgba(50,205,50,1)',
                pointBackgroundColor: 'rgba(255,0,0,1)',
                pointBorderColor: '#ff0000',
                pointHoverBackgroundColor: '#ff0000',
                pointHoverBorderColor: 'rgba(255,0,0,1)',
                data: [0, 0, 0, 0, 0, 0, 0]
              }
            ]
          }}
          />
          <br></br>
          <Button
            onClick={() => {
              this.handleModalamcat();
            }}
          >
            Edit
          </Button>
          <Modal
            show={this.state.show}
            onHide={() => this.handleModalamcat()}
            size="lg"
            style={{ maxWidth: "1600px", width: "80%" }}
          >
            <Modal.Header closeButton>Edit Amcat Marks</Modal.Header>
            <Modal.Body>
              <form>
                <Table className="amcatedit" responsive>
                  <thead>
                    <tr>
                      <th>Logical</th>
                      <th>English</th>
                      <th>Quants</th>
                      <th>Automata</th>
                      <th>Automata_Fix</th>
                      <th>Domain_1</th>
                      <th>Domain_2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <input
                          type="text"
                          name="Logical"
                          style={{ width: "50px" }}
                          value={this.state.LogicalAbility}
                          onChange={this.onChangeLogical}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="English"
                          style={{ width: "50px" }}
                          value={this.state.EnglishComprehension}
                          onChange={this.onChangeEnglish}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Quants"
                          style={{ width: "50px" }}
                          value={this.state.QuantitativeAbility}
                          onChange={this.onChangeQuant}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Automata"
                          style={{ width: "50px" }}
                          value={this.state.Automata}
                          onChange={this.onChangeAutomata}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Automata_Fix"
                          style={{ width: "50px" }}
                          value={this.state.AutomataFix}
                          onChange={this.onChangeAutomataFix}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Domain_1"
                          style={{ width: "50px" }}
                          value={this.state.Domain1}
                          onChange={this.onChangeDomain1}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="Domain_2"
                          style={{ width: "50px" }}
                          value={this.state.Domain2}
                          onChange={this.onChangeDomain2}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button>Submit</Button>
            </Modal.Footer>
          </Modal>
        </Card>
      </div>
    );
  }
}

export default Amcat;
