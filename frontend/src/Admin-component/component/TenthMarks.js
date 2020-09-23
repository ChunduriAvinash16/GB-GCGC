import React from 'react';
import { Card,CardTitle, CardSubtitle,CardText,Container,Row,Col,Alert,Collapse,Table } from 'reactstrap';
import {Button,Modal} from 'react-bootstrap';
import Axios from "axios";

class TenthMarks extends React.Component {
  constructor(props){
    super(props);
    this.state={
        show:false,
        ssc:0
        
    }
    
    this.handleModaltenth=this.handleModaltenth.bind(this);
    this.onChangetenth = this.onChangetenth.bind(this);
    
    this.onSubmittenth = this.onSubmittenth.bind(this);

}
handleModaltenth()
{
  this.setState({show:!this.state.show})
}

onChangetenth(e) {
  this.setState({
      ssc: e.target.value
  });
}

componentDidMount(){
    Axios.get("http://localhost:80/login-backend/individualstudentdetails.php?id="+this.props.tenth)
    .then(response => {
        this.setState({
            
            ssc:response.data[0]['SSC_percent']
            
        }) 
        console.log(this.state.ssc); 
    })
    .catch(function(err){
        console.log(err);
    })
}
onSubmittenth(e){
  e.preventDefault();
  const obj={
      ssc : this.state.ssc
  };
  Axios.post("http://localhost/login-backend/individualupdate.php?id="+this.props.tenth,obj)
      .then(res => console.log(res.data)
      );
}
    
  
  render(){
  return (
    <div class="container-fluid">
    <Card color="success" className="Rounded p-3" >
          <CardTitle align="left">{this.state.ssc}</CardTitle>
            <CardSubtitle align="left">
              <Row>
                <Col style={{"padding":"0px"}}>
                  Tenth Percentage  
                </Col>
                <Col style={{"textAlign":"end"}}>
                  <Button style={{"background-color": "rgb(42, 50, 75)"}} onClick={()=>{this.handleModaltenth()}}>Edit</Button>
                </Col>
              </Row>              
            </CardSubtitle> 
            <Modal show={this.state.show} onHide={()=>this.handleModaltenth()} >
              <Modal.Header closeButton>Edit Tenth Percentage</Modal.Header>
              <Modal.Body>
                <form onSubmit={this.onSubmittenth} responsive>
                    <Row>
                        <Col>
                            <input type="text" name="TenthMarks" value={this.state.ssc}
                                 onChange={this.onChangetenth}  />    
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

export default TenthMarks;
