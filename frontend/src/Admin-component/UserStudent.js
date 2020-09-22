import React,{Component} from 'react';
import {Container,Row,Col,Button,Card,Table} from 'reactstrap';
import Axios from 'axios';
import Students from './UserStudents';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 
import { NavItem, Navbar, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default class UserStudent extends Component{
	constructor(props){
        super(props);
        this.onChangesearch = this.onChangesearch.bind(this);
        this.state = {
            students:[]
        }
    }
    componentDidMount(){
    	 Axios.get("http://localhost/Admin-backend/User-Student.php")
          .then(response => {
          	console.log(response.data);
              this.setState({
                  students:response.data
              })  
          })
          .catch(function(err){
              console.log(err);
          })
    }
    onChangesearch(e) {
        Axios.get("http://localhost/Admin-backend/Students.php?search="+e.target.value)
          .then(response => {
          	console.log(response.data);
              this.setState({
                  students:response.data
              })  
          })
          .catch(function(err){
              console.log(err);
          })
    }
    StudentsList(){
        return this.state.students.map(function(object,i){
            return <Students obj={object} key={i}/>;
        });
    }
    render(){
    return (
        <div style={{backgroundColor:'#C7CCDB'}}>
        	<Container>
        	<Row>
        		<NavLink tag={Link} to={"/AddStudent"}>
                    <Button
                      style={{
                        backgroundColor: "#2A324B",
                        color: "white",
                        borderColor: "#2A324B",
                      }}
                    >
                      Add Student
                    </Button>
                  </NavLink>
        	</Row>
        	<Row>
        		<Col align="left" styles={{padding:'10'}}>
                		<div>
                			<ReactHTMLTableToExcel  
                    			className="btn btn-secondary"  
                    			table="Data"  
                    			filename="Filtered Students"  
                    			sheet="Sheet1"  
                    			buttonText="EXCEL"
                    			style={{backgroundColor:"#2A324B",color:"white",borderColor:"#2A324B"}} 
                    		/>
                    	</div>
                    </Col>
        		<Col>
        		<div align="right">Search:<input type="text" name="search" onChange={this.onChangesearch}/></div>
        		</Col>
        	</Row>
        	<br/>
        	<Row>
            	<Table id="Data" responsive striped style={{backgroundColor:'white'}}>
                    <thead style={{backgroundColor:'#2A324B',color:'white'}}>
                        <tr>
                            <th>ID</th>
                            <th align="left">Name</th>
                            <th align="left">Branch</th>
                            <th>Section</th>
                            <th>Batch</th>
                            <th>Faculty Coordinator</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.StudentsList()}
                    </tbody>
            	</Table>
            </Row>
            </Container>
        </div>
    )
	}
}

