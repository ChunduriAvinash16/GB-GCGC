import React from 'react';
import { Card,CardTitle, CardSubtitle,CardText,Container,Row,Col,Alert,Collapse,Table } from 'reactstrap';
import {Button,Modal} from 'react-bootstrap';
import Axios from "axios";

class Section extends React.Component {
  constructor(props){
    super(props)
    this.state={
        show:false,
        sect:""
    }
    this.handleModalsection=this.handleModalsection.bind(this);
    this.onChangesection = this.onChangesection.bind(this);
    this.onSubmitsection = this.onSubmitsection.bind(this);
  }
  handleModalsection()
  {
    this.setState({show:!this.state.show})
  }

  onChangesection(e) {
        this.setState({
            sect: e.target.value
        });
      }

  componentDidMount(){
          Axios.get("http://localhost:80/login-backend/individualstudentdetails.php?id="+this.props.sec)
          .then(response => {
              this.setState({
                  
                  sect:response.data[0]['section']
                  
              }) 
              console.log(this.state.sect); 
          })
          .catch(function(err){
              console.log(err);
          })
      }
    onSubmitsection(e){
        e.preventDefault();
        const obj={
            sect : this.state.sect
        };
        Axios.post("http://localhost/login-backend/individualupdatesection.php?id="+this.props.sec,obj)
            .then(res => console.log(res.data)
            );
    }

  render(){
  return (
    <div class="container-fluid">
          <Alert color="danger" className="Rounded p-3" >
                <CardTitle align="left">{this.state.sect}</CardTitle>
                <CardSubtitle align="left">
                    <Row>
                      <Col style={{"padding":"0px"}}>Section</Col>
                      <Col style={{"textAlign":"end"}}><Button onClick={()=>{this.handleModalsection()}}>Edit</Button></Col>
                    </Row>
                  </CardSubtitle> 
                  <Modal show={this.state.show} onHide={()=>this.handleModalsection()} >
                    <Modal.Header closeButton>Edit Section</Modal.Header>
                    <Modal.Body>
                      <form onSubmit={this.onSubmitsection}>
                        <Table className="section" responsive>
                        <tbody>
                        <tr>
                            <td>
                              <input type="text" name="section" value={this.state.sect}
                               onChange={this.onChangesection}  />
                            </td>
                            <td>
                              <div className={"form-group"}>
                                  <input type={"submit"} value={"Submit"} className={"btn btn-primary"}/>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                        </Table>
                      </form>
                    </Modal.Body>
                  </Modal>

              </Alert>
        </div>

        );
}
}

export default Section;
