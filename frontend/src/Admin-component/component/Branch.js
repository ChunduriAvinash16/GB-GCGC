import React from 'react';
import { Card,CardTitle, CardSubtitle,CardText,Container,Row,Col,Alert,Collapse,Table } from 'reactstrap';
import {Button,Modal} from 'react-bootstrap';
import Axios from "axios";

class Branch extends React.Component {
  constructor(props){
    super(props)
    this.state={
        show:false,
        branch:""
    }
    this.handleModalbranch=this.handleModalbranch.bind(this);
    this.onChangebranch = this.onChangebranch.bind(this);
          
    this.onSubmitbranch = this.onSubmitbranch.bind(this);
  }
  handleModalbranch()
  {
    this.setState({show:!this.state.show})
  }

  onChangebranch(e) {
        this.setState({
            branch: e.target.value
        });
      }

  componentDidMount(){
          Axios.get("http://localhost:80/login-backend/individualstudentdetails.php?id="+this.props.brn)
          .then(response => {
              this.setState({
                  
                  branch:response.data[0]['Branch']
                  
              }) 
              console.log(this.state.branch); 
          })
          .catch(function(err){
              console.log(err);
          })
      }
    onSubmitbranch(e){
        e.preventDefault();
        const obj={
            branch : this.state.branch
        };
        Axios.post("http://localhost/login-backend/individualupdatebranch.php?id="+this.props.brn,obj)
            .then(res => console.log(res.data)
            );
    }
  render(){
  return (
    <div class="container-fluid">

          <Alert color="success" className="Rounded p-3" >
                <CardTitle align="left">{this.state.branch.slice(0,3)}</CardTitle>
                <CardSubtitle align="left">
                  <Row>
                    <Col style={{"padding":"0px"}}>
                      Branch
                    </Col>
                    <Col style={{"textAlign":"end"}}>
                      <Button style={{"background-color": "rgb(42, 50, 75)"}} onClick={()=>{this.handleModalbranch()}}>Edit</Button>
                    </Col>
                  </Row>
                  </CardSubtitle> 
                  <Modal show={this.state.show} onHide={()=>this.handleModalbranch()} >
                    <Modal.Header closeButton>Edit Branch</Modal.Header>
                    <Modal.Body>
                      <form onSubmit={this.onSubmitbranch}>
                        <Table className="branchMarks" responsive>
                        <tbody>
                        <tr>
                            <td>
                              <input type="text" name="Branch" value={this.state.branch}
                               onChange={this.onChangebranch}  />
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

export default Branch;
