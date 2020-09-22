import React, { Component } from 'react';
import { Card, Table, Button } from "react-bootstrap";
import { Container ,Row, Col,Form, FormGroup,Label,Input} from "reactstrap";
import {Redirect} from 'react-router';
import Axios from 'axios';

class EditStaff extends Component {
    constructor(props){
        super();
        this.state = {
            
            edit:[],
            Emp_Id:"",
            Emp_Name:"",
            Email_id:"",
            Campus:"",
            Department:"",
            Mobile_No:"",
            Institution:"",
            Designation:"",
            Gender:"",
            Employee_Type:"",
            redirect:false

          };
      
          this.onChangeemail=this.onChangeemail.bind(this);
          this.onChangemobileno=this.onChangemobileno.bind(this);
          this.onChangedesignation=this.onChangedesignation.bind(this);
          this.onChangecampus=this.onChangecampus.bind(this);
          this.onChangeinstitution=this.onChangeinstitution.bind(this);
          this.onChangedepartment=this.onChangedepartment.bind(this);
          this.onChangeEname=this.onChangeEname.bind(this);
          this.onChangegender=this.onChangegender.bind(this);
          this.onChangeemptype=this.onChangeemptype.bind(this);
          this.handleSubmit=this.handleSubmit.bind(this);
      
        }

        onChangeemail(e){
          this.setState({
            Email_id:e.target.value
          });
        }
        onChangemobileno(e){
          this.setState({
            Mobile_No:e.target.value
          });
        }
        onChangedesignation(e){
          this.setState({
            Designation:e.target.value
          });
        }
        onChangecampus(e){
          this.setState({
          Campus:e.target.value
          });
        }
        onChangeinstitution(e){
          this.setState({
            Institution:e.target.value
          });
        }
        onChangedepartment(e){
          this.setState({
            Department:e.target.value
          });
        }
        onChangeEname(e){
          this.setState({
          Emp_Name:e.target.value
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
        
        componentDidMount(){

        
          Axios.get("http://localhost/Admin-backend/edituserstaff.php?id="+this.props.match.params.id)
          .then((response)=>{
            this.setState({
              edit: response.data,
              Emp_Id:response.data[0].Emp_Id,
              Emp_Name:response.data[0].Emp_Name,
              Email_id:response.data[0].Email_id,
              Campus:response.data[0].Campus,
              Department:response.data[0].Department,
              Designation:response.data[0].Designation,
              Mobile_No:response.data[0].Mobile_No,
              Institution:response.data[0].Institution,
              Gender:response.data[0].Gender,
              Employee_Type:response.data[0].Employee_Type
            })
            console.log(this.response.data)
          })
          .catch(err=>console.log(err))
        }


    handleSubmit(e){
        e.preventDefault();
        const obj={
          Emp_Id:this.props.match.params.id,
          Emp_Name:this.state.Emp_Name,
          Email_id:this.state.Email_id,
          Campus:this.state.Campus,
          Department:this.state.Department,
          Mobile_No:this.state.Mobile_No,
          Designation:this.state.Designation,
          Institution:this.state.Institution,
          Gender:this.state.Gender,
          Employee_Type:this.state.Employee_Type
        };
    console.log(obj);
    Axios.post("http://localhost:80/Admin-backend/userstaffupdate.php",obj)
      .then(res=>alert(res.data+"Updated Sucessfully"))
      .catch(err=>console.log(err))
      this.setState({
      
        Emp_Name:"",
        Email_id:"",
        Campus:"",
        Department:"",
        Mobile_No:"",
        Designation:"",
        Institution:"",
        Gender:"",
        Employee_Type:"",
        redirect:true

      })
    }
    render(){
      const {redirect} = this.state;
      if(redirect){
        return <Redirect to={"/user-staff"}/>
      }
     return (
        <div>
          <Container>
            <Row style={{backgroundColor: "#2A324B",color: "white",fontSize: "14px",fontFamily: "Segoe UI",fontWeight: "700"}}>
              <Col xs="12" className="p-2" align="center">
                <div>Edit Staff</div>
              </Col>
            </Row>
            <Row style={{ backgroundColor: "white" }}>
                <Col>
                  <Form onSubmit={this.handleSubmit}>
                    <Row>
                      <Col lg="2"></Col>
                      <Col lg="8">
                      <Row>&nbsp;</Row>
                          <Row>&nbsp;</Row>
                          <Row>
                            <Col lg="4">Employee Name</Col>
                            <Col lg="8">
                              <Input type="text" id="Emp_Name"  value ={this.state.Emp_Name} name="Emp_Name" onChange={this.onChangeEname} />
                            </Col>
                          </Row>
                          <Row>&nbsp;</Row>
                          <Row>
                            <Col lg="4">Email ID:</Col>
                            <Col lg="8">
                              <Input type="text" id="Email_id" value={this.state.Email_id} name="Email_id" onChange={this.onChangeemail} />
                            </Col>
                          </Row>
                          <Row>&nbsp;</Row>
                          <Row>
                            <Col lg="4">Phone Number</Col>
                            <Col lg="8">
                              <Input type="text" id="Mobile_No" value={this.state.Mobile_No} name="Mobile_No" onChange={this.onChangemobileno} />
                            </Col>
                          </Row>
                          <Row>&nbsp;</Row>
                          <Row>
                            <Col lg="4">Gender</Col>
                            <Col lg="8">
                                <input type="radio" id="Male" name="Gender" value="Male" checked={this.state.Gender === "Male"}  onChange={this.onChangegender}/>
                                <label for="male">Male</label>
                                <input type="radio" id="Female" name="Gender" value="Female" checked={this.state.Gender === "Female"} onChange={this.onChangegender}/>
                                <label for="female">Female</label>
                            </Col>
                          </Row>
                          <Row>&nbsp;</Row>
                          <Row>
                            <Col lg="4">Designation</Col>
                            <Col lg="8">
                              <Input type="text" id="Designation" value={this.state.Designation} name="Designation" onChange={this.onChangedesignation} />
                            </Col>
                          </Row>
                          <Row>&nbsp;</Row>
                          <Row>
                            <Col lg="4">Campus</Col>
                            <Col lg="8">
                              <Input type="text" id="Campus" value={this.state.Campus} name="Campus" onChange={this.onChangecampus} />
                            </Col>
                          </Row>
                          <Row>&nbsp;</Row>
                          <Row>
                            <Col lg="4">Institution</Col>
                            <Col lg="8">
                              <Input type="text" id="Institution" value={this.state.Institution} name="Institution" onChange={this.onChangeinstitution} />
                            </Col>
                          </Row>
                          <Row>&nbsp;</Row>
                          <Row>
                            <Col lg="4">Department</Col>
                            <Col lg="8">
                              <Input type="text" id="Department" value={this.state.Department} name="Department" onChange={this.onChangedepartment} />
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
                          <Row className="p-3">
                            <Col lg="4"></Col>
                            <Col lg="8">
                              <Button type="submit" value="submit" color="primary">
                                Update
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
     )
    }
}

export default EditStaff;
