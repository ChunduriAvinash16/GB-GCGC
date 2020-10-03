import React,{Component} from 'react';
import {Container,Row,Col,Button,Card,Table} from 'reactstrap';
import Axios from 'axios';
import Students from './AmcatAssess';
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 
import { NavItem, Navbar, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export default class Assessment extends Component{
	constructor(props){
        super(props);
        this.state = {
            students:[]
        }
    }
    componentDidMount(){
    	 Axios.get("http://localhost/Admin-backend/Assessments.php")
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
                      Add Assessment
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
        	</Row>
        	<br/>
        	<Row>
            	<Table id="Data" responsive striped style={{backgroundColor:'white'}}>
                    <thead style={{backgroundColor:'#2A324B',color:'white'}}>
                        <tr>
                            <th>Sno</th>
                            <th align="left">Name of the Assessment</th>
                            <th align="left">YOP</th>
                            <th>Date Of Assessment</th>
                            <th>No of students attended</th>
                            <th>No of Absentees</th>
                            <th>Highest Score</th>
                            <th>Average Score</th>
                            <th>Least Score</th>
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

