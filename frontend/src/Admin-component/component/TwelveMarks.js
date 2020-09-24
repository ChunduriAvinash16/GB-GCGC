import React from 'react';
import { Card,CardTitle, CardSubtitle,CardText,Container,Row,Col,Alert,Collapse,Table } from 'reactstrap';
import {Button,Modal} from 'react-bootstrap';
import Axios from "axios";

class TwelveMarks extends React.Component {
  constructor(props){
          super(props);
          this.state={
              show:false,
              inter:0
              
          }
          
          this.handleModaltwelve=this.handleModaltwelve.bind(this);
          this.onChangetwelve = this.onChangetwelve.bind(this);
          this.onSubmittwelve = this.onSubmittwelve.bind(this);

      }
      handleModaltwelve()
      {
        this.setState({show:!this.state.show})
      }

      onChangetwelve(e) {
        this.setState({
            inter: e.target.value
        });
      }

      componentDidMount(){
          Axios.get("http://localhost:80/login-backend/individualstudentdetails.php?id="+this.props.twe)
          .then(response => {
              this.setState({
                  
                  inter:response.data[0]['inter_percent']
                  
              }) 
              console.log(this.state.inter); 
          })
          .catch(function(err){
              console.log(err);
          })
      }
    onSubmittwelve(e){
        e.preventDefault();
        const obj={
            inter : this.state.inter
        };
        Axios.post("http://localhost/login-backend/individualupdatetwelve.php?id="+this.props.twe,obj)
            .then(res => console.log(res.data)
            );
    }
  
  render(){
  return (
    <div class="container-fluid">
          <Card color="warning" className="Rounded p-3" >
                <CardTitle align="left">{this.state.inter}</CardTitle>
                <CardSubtitle align="left">
                  <Row>
                    <Col style={{"padding":"0px"}}>
                      Inter Percentage 
                    </Col>
                    <Col style={{"textAlign":"end"}}>
                      <Button style={{"background-color": "rgb(42, 50, 75)"}} onClick={()=>{this.handleModaltwelve()}}>Edit</Button>
                    </Col>
                  </Row>
                </CardSubtitle> 
                  <Modal show={this.state.show} onHide={()=>this.handleModaltwelve()} >
                    <Modal.Header closeButton>Edit Inter Percentage</Modal.Header>
                    <Modal.Body>
                      <form onSubmit={this.onSubmittwelve}>
                        <Row>
                          <Col>
                          <input type="text" name="TwelveMarks" value={this.state.inter}
                               onChange={this.onChangetwelve}  />
                          </Col>
                          <Col>
                          <Button type="submit">
                                Submit
                            </Button>                            
                          </Col>
                        </Row>
                      </form>
                    </Modal.Body>
                  </Modal>
              </Card>
        </div>

        );
}
}

export default TwelveMarks;
