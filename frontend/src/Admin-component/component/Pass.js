import React from 'react';
import { Card,CardTitle, CardSubtitle,CardText,Container,Row,Col,Alert,Collapse,Table } from 'reactstrap';
import {Button,Modal} from 'react-bootstrap';
import Axios from "axios";

class Pass extends React.Component {
  constructor(){
    super()
    this.state={
        show:false,
        pass:""
    }
    this.handleModalpass=this.handleModalpass.bind(this);
    this.onChangepass = this.onChangepass.bind(this);  
    this.onSubmitpass = this.onSubmitpass.bind(this);
  }
  handleModalpass()
  {
    this.setState({show:!this.state.show})
  }

  onChangepass(e) {
        this.setState({
            pass: e.target.value
        });
      }

  componentDidMount(){
          Axios.get("http://localhost:80/login-backend/individualstudentdetails.php?id="+this.props.pas)
          .then(response => {
              this.setState({
                  pass:response.data[0]['pass_category']
                  
              }) 
              console.log(this.state.pass); 
          })
          .catch(function(err){
              console.log(err);
          })
      }
    onSubmitpass(e){
        e.preventDefault();
        const obj={
            pass : this.state.pass
        };
        Axios.post("http://localhost/login-backend/individualupdatepass.php?id="+this.props.pas,obj)
            .then(res => console.log(res.data)
            );
    }
  render(){
  return (
    <div class="container-fluid">
          <Alert color="warning" className="Rounded p-3" >
                <CardTitle align="left">{this.state.pass}</CardTitle>
                <CardSubtitle align="left">
                  <Row>
                    <Col style={{"padding":"0px"}}>
                      Pass Category 
                    </Col>
                    <Col style={{"textAlign":"end"}}>
                      <Button style={{"background-color": "rgb(42, 50, 75)"}} onClick={()=>{this.handleModalpass()}}>Edit</Button>
                    </Col>
                  </Row>
                  </CardSubtitle> 
                  <Modal show={this.state.show} onHide={()=>this.handleModalpass()} >
                    <Modal.Header closeButton>Edit Pass Category</Modal.Header>
                    <Modal.Body>
                      <form onSubmit={this.onSubmitpass}>
                        <Table className="passcategory" responsive>
                        <tbody>
                        <tr>
                            <td>
                              <input type="text" name="passcategory" value={this.state.pass}
                               onChange={this.onChangepass}  />
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

export default Pass;
