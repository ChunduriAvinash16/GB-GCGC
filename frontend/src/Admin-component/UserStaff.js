import React,{Component} from 'react'
import {Form} from "reactstrap";
import {Button,Row,Col,Table} from "react-bootstrap";
import {BrowserRouter as Router,Route,Redirect,Switch,NavLink,Link} from "react-router-dom";
import {Nav} from "reactstrap";
import Axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";
import ReactHTMLTableToExcel from 'react-html-table-to-excel'; 
import jsPDF from 'jspdf';  
import html2canvas from 'html2canvas';  
import  EditStaff from './edituserstaff';
import RecordListuserstaff from './RecordListuserstaff';

class  UserStaff extends Component { 
	constructor(props) {
	    super(props);
	    this.onChangesearch = this.onChangesearch.bind(this);
     	
	    this.state = {
	      Emp_Id:"",
      	  Emp_Name:"",
      	  Email_id:"",
      	  Campus:"",
      	  Department:"",
      	  Mobile_No:"",
      	  sortby:'nill',
	      staff:[],
	      recordListuserstaff:[],
	      students:[]	    
	  };
	}
	

	

	componentDidMount()  {

		const obj={
		      Emp_Id:this.state.Emp_Id,
		      Emp_Name:this.state.Emp_Name,
		      Email_id:this.state.Email_id,
		      Campus:this.state.Campus,
		      Department:this.state.Department,
		      Mobile_No:this.state.Mobile_No

		    };

		    console.log(obj);
    	Axios.get("http://localhost:80/Admin-backend/userstaff.php",obj)
    	.then(response=>{
      	this.setState({
        	recordListuserstaff:response.data,
        	Emp_Id: response.data[0]["Emp_Id"],
        	Emp_Name: response.data[0]["Emp_Name"],
        	Email_id:response.data[0]["Email_id"],
        	Campus: response.data[0]["Campus"],
        	Department: response.data[0]["Department"],
        	Mobile_No: response.data[0]["Mobile_No"]
      	})
      	console.log(this.state.recordListuserstaff)
    })
    
    }



    StaffList(){
        return this.state.recordListuserstaff.map(function(object,i){
            return <RecordListuserstaff obj={object} key={i}/>;
        });
    }

    printDocument() {  
    const input = document.getElementById('Data');  
    html2canvas(input)  
      .then((canvas) => {  
        var imgWidth = 200;  
        var pageHeight = 290;  
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
        const imgData = canvas.toDataURL('image/png');  
        const pdf = new jsPDF('p', 'mm', 'a4')  
        var position = 0;  
        var heightLeft = imgHeight;  
        pdf.addImage(imgData, 'png', 0, position, imgWidth, imgHeight);  
        pdf.save("download.pdf");  
      });  
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

	render(){
	    return (
	        <div className="container">
	        	<Row style={{backgroundColor: "#2A324B",color: "white",fontSize: "14px",fontFamily: "Segoe UI",fontWeight: "700"}}>
		            <Col xs="12" className="p-2" align="center">
		              <div>Staff Details</div>
		            </Col>
	          	</Row>
	            <Row style={{ backgroundColor: "white" }} className="p-2 ">
	            	<Row >
	            	
	            		<Col md="2" >
		            		<Form >
				            	<NavLink tag={Redirect} to={"/userstaffAdd"}>
				              		<Button
                      					style={{backgroundColor: "#6c757d",color: "white",borderColor: "#6c757d"}}>
					                      Add Staff
					                </Button>
			              		</NavLink>
				            </Form>
				        </Col>
	            	</Row>
		            <Row className="p-3">
		            	<Col md="1">Show</Col>
						<Col md="3">
							<select name="sortby" className="runningtext container p-2" className="form-control" onChange={this.onChangesortby} >
			                    	<option value="nill">All</option>
			                        <option value="5">5</option>
			                        <option value="10">10</option>
			                        <option value="25">25</option>
			                        <option value="50">50</option>
			                        <option value="75">75</option>
			                        <option value="100">100</option>
			                    </select>
		                </Col>
						<Col md="4"></Col>
		                <Col md="1">Search</Col>
		                <Col md="3"><input type="text" name="search"  className="form-control"onChange={this.onChangesearch}/></Col>

		            </Row>
		           	<Row >
	            		
	            		<Col md="2">
		            		<Form >
								<ReactHTMLTableToExcel  
		                    			className="btn btn-secondary"  
		                    			table="Data"  
		                    			filename="Filtered Students"  
		                    			sheet="Sheet1"  
		                    			buttonText="Generate Excel"
		                    			style={{backgroundColor:"#2A324B",color:"white",borderColor:"#2A324B"}} 
		                    		/>
				            </Form>
				        </Col>
	            	</Row>
	            	<br/>
		            <Row className="p-2">
		            	<Col md="12">
			            	<Table id="Data" responsive striped style={{backgroundColor:'white'}}>
				                <thead style={{backgroundColor:'#2A324B',color:'white'}}>
				                  <tr>
				                    <th>Emp_Id</th>
				                    <th>Emp_Name</th>
				                    <th>Email</th>
				                    <th>Campus</th>
				                    <th>Department</th>
				                    <th>Mobile</th>
				                    <th>Action</th>
				                  </tr>
				                </thead>
				                <tbody>
				                	{this.StaffList()}
			                    </tbody>
			              	</Table>
		              	</Col>
		            </Row>
	            </Row>
	        </div>
	    )
	}
}

export default UserStaff;