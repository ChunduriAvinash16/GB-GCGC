import React from "react";
import { Container, Row, Col, Card,Form, FormGroup,Label,Input } from "reactstrap";
import { Button } from "react-bootstrap";
import Axios from "axios";
import {Redirect} from 'react-router';

class userstaffAdd extends React.Component {

  constructor(props){
        super(props);
        this.state = {
            
            empidno:"",
            empname:"",
            empemail:"",
            camp:"",
            empdept:"",
            empmobile:"",
            empinsti:"",
            empdesig:"",
            Gender:"",
            Employee_Type:"",
            redirect: false
            
          };
      
          this.onChangeempid=this.onChangeempid.bind(this);
          this.onChangeemail=this.onChangeemail.bind(this);
          this.onChangemobileno=this.onChangemobileno.bind(this);
          this.onChangeempdesig=this.onChangeempdesig.bind(this);
          this.onChangecampus=this.onChangecampus.bind(this);
          this.onChangeempinsti=this.onChangeempinsti.bind(this);
          this.onChangeempdept=this.onChangeempdept.bind(this);
          this.onChangeEname=this.onChangeEname.bind(this);
          this.onChangegender=this.onChangegender.bind(this);
          this.onChangeemptype=this.onChangeemptype.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
      
        }

        onChangeempid(e){
          this.setState({
            empidno:e.target.value
          });
        }

        onChangeemail(e){
          this.setState({
            empemail:e.target.value
          });
        }
        onChangemobileno(e){
          this.setState({
            empmobile:e.target.value
          });
        }
        onChangeempdesig(e){
          this.setState({
            empdesig:e.target.value
          });
        }
        onChangecampus(e){
          this.setState({
          camp:e.target.value
          });
        }
        onChangeempinsti(e){
          this.setState({
            empinsti:e.target.value
          });
        }
        onChangeempdept(e){
          this.setState({
            empdept:e.target.value
          });
        }
        onChangeEname(e){
          this.setState({
          empname:e.target.value
          });
        }
        onChangegender(e){
          this.setState({
          Gender:e.target.value
          });
        }
        onChangeemptype(e){
          this.setState({
          Employee_Type:e.target.value
          });
        }

  handleSubmit(e){
    e.preventDefault();
    const obj={
          empidno:this.state.empidno,
          empname:this.state.empname,
          empemail:this.state.empemail,
          camp:this.state.camp,
          empdept:this.state.empdept,
          empmobile:this.state.empmobile,
          empdesig:this.state.empdesig,
          empinsti:this.state.empinsti,
          Gender:this.state.Gender,
          Employee_Type:this.state.Employee_Type
    };
    console.log(obj);
    Axios.post("http://localhost/Admin-backend/userstaffadd.php",obj)
      .then(res=>alert(res.data+"Sucessfully Added"))
      .catch(err=>console.log(err))
      this.setState({
        empidno:"",
        empname:"",
        empemail:"",
        camp:"",
        empdept:"",
        empmobile:"",
        empdesig:"",
        empinsti:"",
        Gender:"",
        Employee_Type:""
      })
      this.setState({redirect : true});
  }


  render(){
    const {redirect} = this.state;

        if(redirect){
            return <Redirect to={"/user-staff"}/>
        }
    return(
      <div style={{ align: "left" }}>
        <Container>
          <Row style={{backgroundColor: "#2A324B",color: "white",fontSize: "14px",fontFamily: "Segoe UI",fontWeight: "700"}}>
            <Col xs="12" className="p-2" align="center">
              <div>Add Staff</div>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "white" }}>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col lg="2"></Col>
                <Col lg="8">
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Employee ID:</Col>
                    <Col lg="8">
                      <input type="text" id="empidno" value={this.state.empidno} className="form-control" name="empidno" onChange={this.onChangeempid} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Employee Name</Col>
                    <Col lg="8">
                      <Input type="text" id="empname"  value ={this.state.empname} name="empname" onChange={this.onChangeEname} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Email ID:</Col>
                    <Col lg="8">
                      <Input type="text" id="empemail" value={this.state.empemail} name="empemail" onChange={this.onChangeemail} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Phone Number</Col>
                    <Col lg="8">
                      <Input type="text" id="empmobile" value={this.state.empmobile} name="empmobile" onChange={this.onChangemobileno} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Gender</Col>
                    <Col lg="8">
                        <input type="radio" id="Male" name="Gender" value="Male" onChange={this.onChangegender}/>
                        <label for="male">Male</label>
                        <input type="radio" id="Female" name="Gender" value="Female" onChange={this.onChangegender}/>
                        <label for="female">Female</label>
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Designation</Col>
                    <Col lg="8">
                      <Input type="text" id="empdesig" value={this.state.empdesig} name="empdesig" onChange={this.onChangeempdesig} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Campus</Col>
                    <Col lg="8">
                      <Input type="text" id="camp" value={this.state.camp} name="camp" onChange={this.onChangecampus} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Institution</Col>
                    <Col lg="8">
                      <Input type="text" id="empinsti" value={this.state.empinsti} name="empinsti" onChange={this.onChangeempinsti} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Department</Col>
                    <Col lg="8">
                      <Input type="text" id="empdept" value={this.state.empdept} name="empdept" onChange={this.onChangeempdept} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Employee Type</Col>
                    <Col lg="8">
                      <Input type="text" id="Employee_Type" value={this.state.Employee_Type} name="Employee_Type" onChange={this.onChangeemptype} />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Image</Col>
                    <Col lg="8">
                      <input type="file" className="form-control" />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4"></Col>
                    <Col lg="8">
                      <Button type="submit" value="submit" color="primary">
                        Upload
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        </Container> 
      </div>
      );
  }
}
export default userstaffAdd;
