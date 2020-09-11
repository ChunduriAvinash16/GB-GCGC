import React, { Component,useState } from 'react';
import { Container, Row, Col, Card,Button} from "reactstrap";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Axios from 'axios';
import {
    faUser,
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {MultiSelectComponent} from "@syncfusion/ej2-react-dropdowns";
import MultiSelect from "@khanacademy/react-multi-select";


const options = [
    { label: 'CSE', value: 'CSE'},
    { label: 'ECE', value: 'ECE'},
    {label:'EEE' , value:'EEE'},
    {label:'Mech',value:'Mech'},
    {label:'Civil',value:'Civil'}
  ];
class Placements extends Component{
    constructor(props){
        super(props);
        this.state={
            dropdownOpen:false,
            setDropdownOpen:false,
            dropdownOpen1:false,
            CompanyName:"",
            YOP:"",
            DateOfInter:"",
            Campus:"",
            JobDescript:"",
            Branch:"",
            Gender:"",
            PackageOffered:"",
            Backlogs:"",
            CompanyURL:"",
            SSC:"",
            Inter:"",
            ListOfStudents:"",
            selected: []
        }
        this.toggle=this.toggle.bind(this);
        this.toggle1=this.toggle1.bind(this);
        this.onSubmitAddPlacements = this.onSubmitAddPlacements.bind(this);
        this.onChangeCompanyName = this.onChangeCompanyName.bind(this);
        this.onChangeYOP = this.onChangeYOP.bind(this);
        this.onChangeDateOfInter = this.onChangeDateOfInter.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeInter = this.onChangeInter.bind(this);
        this.onChangeJobDescript = this.onChangeJobDescript.bind(this);
        this.onChangeListOfStudents = this.onChangeListOfStudents.bind(this);
        this.onChangeBacklogs = this.onChangeBacklogs.bind(this);
        this.onChangeBranch = this.onChangeBranch.bind(this);
        this.onChangeCompanyURL = this.onChangeCompanyURL.bind(this);
        this.onChangePackageOffered = this.onChangePackageOffered.bind(this);
        this.onChangeSSC = this.onChangeSSC.bind(this);
        this.onChangeYOP = this.onChangeYOP.bind(this);
        this.onChangeCampus=this.onChangeCampus.bind(this);
    }
    

    onChangeCompanyName(e){
        this.setState({
            CompanyName:e.target.value
        })
    }
    onChangeYOP(e){
        this.setState({
            YOP:e.target.value
        })
    }
    onChangeDateOfInter(e){
        this.setState({
            DateOfInter:e.target.value
        })
    }
    onChangeCampus(e){
        this.setState({
            Campus:e.target.value
        })
    }
    onChangeJobDescript(e){
        this.setState({
            JobDescript:e.target.value
        })
    }
    onChangeBranch(e){
        this.setState({
            Branch:e.target.value
        })
        console.log(this.state.Branch)
    }
    onChangeGender(e){
        this.setState({
            Gender:e.target.value
        })
    }
    onChangePackageOffered(e){
        this.setState({
            PackageOffered:e.target.value
        })
    }
    onChangeBacklogs(e){
        this.setState({
            Backlogs:e.target.value
        })
    }
    onChangeCompanyURL(e){
        this.setState({
            CompanyURL:e.target.value
        })
    }
    onChangeSSC(e){
        this.setState({
            SSC:e.target.value
        })
    }
    onChangeInter(e){
        this.setState({
            Inter:e.target.value
        })
    }
    onChangeListOfStudents(e){
        this.setState({
            ListOfStudents:e.target.value
        })
    }
    toggle(e){
        this.setState({
            dropdownOpen:!this.state.dropdownOpen
        })
    }
    toggle1(e){
        this.setState({
            dropdownOpen1:!this.state.dropdownOpen1
        })
    }
    onSubmitAddPlacements(e){
        e.preventDefault();
        const obj={
            CompanyName:this.state.CompanyName,
            YOP:this.state.YOP,
            DateOfInter:this.state.DateOfInter,
            Campus:this.state.Campus,
            JobDescript:this.state.JobDescript,
            Branch:this.state.Branch,
            Gender:this.state.Gender,
            PackageOffered:this.state.PackageOffered,
            Backlogs:this.state.Backlogs,
            CompanyURL:this.state.CompanyURL,
            SSC:this.state.SSC,
            Inter:this.state.Inter,
            ListOfStudents:this.state.ListOfStudents,
            selected: this.state.selected
        }
        console.log(obj);
        Axios.post("http://localhost:80/Admin-backend/AddPlacements.php",obj)
        .then((res)=>alert(res.data))
        .catch((err)=>console.log(err));
    }
    render(){
        const {selected} = this.state.selected;
        return( 
        <div className="container">
                <Row  style={{backgroundColor: "#2A324B",color: "white",fontSize: "14px",fontWeight: "700"}}>
                    <Col xs="12" className="p-2" align="center">
                        <div>Placements</div>
                    </Col>
                </Row>
            <form onSubmit={this.onSubmitAddPlacements}>
            <div className="container" style={{ backgroundColor: "white" }}>
                 
                <br/>
                <Row >
                        <Col lg="3" style={{textAlign:"left"}}>Company Name</Col>
                        <Col lg="3">
                            <input type="text" className="form-control" onChange={this.onChangeCompanyName} required/>
                        </Col>
                        <br/>
                        <Col lg="3" style={{textAlign:"left"}}>YOP</Col>
                        <Col lg="3" style={{"width":"inherit"}}>
                        <select className="form-control" onChange={this.onChangeYOP} required>
                            <option value={"2020"}>2020</option>
                            <option value={"2021"}>2021</option>
                            <option value={"2022"}>2022</option>
                            <option value={"2023"}>2023</option>
                        </select>
                      </Col>
                </Row>
                <br/>
                <Row>
                        <Col lg="3"  style={{textAlign:"left"}}>Date of interview</Col>
                            <Col lg="3">
                            <input  type="date" className="form-control" onChange={this.onChangeDateOfInter} required/>
                            </Col>
                        <Col lg="3"  style={{textAlign:"left"}}>Campus</Col>
                            <Col lg="3" style={{"width":"inherit"}}>
                            <select className="form-control" onChange={this.onChangeCampus} required>
                            <option value={"Vishakapatnam"}>Vishakapatnam</option>
                            <option value={"Hyderabad"}>Hyderabad</option>
                            <option value={"Bengaluru"}>Bengaluru</option>
                        </select>
                             </Col> 
                </Row>
                <br/>
                <Row>
                    <Col lg="3"  style={{textAlign:"left"}}>Job Description</Col>
                        <Col lg="3"><textarea className="form-control"  onChange={this.onChangeJobDescript} style={{height:"90px"}}/></Col>
                         <Col lg="6">
                            <Row>
                                <Col lg="6"  style={{textAlign:"left"}}>Branch</Col>
                                <div className="col lg-6">
                                <MultiSelect selected={this.state.selected} onSelectedChanged={selected => this.setState({selected})} options={options} />
                                {console.log(this.state.selected)}
                                </div>
                                    
                            </Row>
                            <br/>
                             <Row>   
                                <Col lg="6"  style={{textAlign:"left"}}>Gender</Col>
                                <Col lg="6">   
                                    <Row>
                                        <Col lg="4">
                                            <div className="form-check" required>
                                                <label>
                                                    <input type="radio" name="react-tips" value="male" onChange={this.onChangeGender} className="form-check-input"/>
                                                    Male
                                                </label>
                                            </div>
                                        </Col>
                                        <Col lg="4">
                                            <div className="form-check">
                                                <label>
                                                    <input type="radio" name="react-tips" value="female" onChange={this.onChangeGender}className="form-check-input"/>
                                                    Female
                                                </label>
                                            </div>
                                        </Col>
                                        <Col lg="4">
                                            <div className="form-check">
                                                <label>
                                                    <input type="radio" name="react-tips" value="Both" onChange={this.onChangeGender}className="form-check-input"/>
                                                    Both
                                                </label>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg="3"  style={{textAlign:"left"}}>Package Offered</Col>
                        <Col lg="3">
                            <input required type="text" className="form-control" onChange={this.onChangePackageOffered}/>
                        </Col>
                    <Col lg="3"  style={{textAlign:"left"}}>Backlogs</Col>
                        <Col lg="3">
                            <input required type="text" className="form-control" onChange={this.onChangeBacklogs}/>
                        </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg="3"  style={{textAlign:"left"}}>Company URL</Col>
                        <Col lg="3">
                            <input required type="text" className="form-control" onChange={this.onChangeCompanyURL}/>
                        </Col>
                    <Col lg="3"  style={{textAlign:"left"}}>SSC Percentage above</Col>
                        <Col lg="3">
                            <input required type="text" className="form-control" onChange={this.onChangeSSC}/>
                        </Col>
                </Row>
                <br/>
                <Row>
                    <Col lg="3"  style={{textAlign:"left"}}>List Of Students</Col>
                        <Col lg="3">
                            <input type="file" onChange={this.onChangeListOfStudents}/>
                        </Col>
                    <Col lg="3"  style={{textAlign:"left"}}>Inter Percentage Above</Col>
                        <Col lg="3">
                            <input required type="text" className="form-control" onChange={this.onChangeInter}/>
                        </Col>
                </Row>
                <br/>
                <Row align="center">
                    <Col align="center">
                        <Button type="submit"  style={{backgroundColor: "#2A324B",borderColor: "#2A324B",color: "white"}}>
                            Add Company
                        </Button>
                    </Col>
                  </Row>
                  <br/>
            </div>
            <br/><br/></form>
        </div>
        )
    }
}

export default Placements;