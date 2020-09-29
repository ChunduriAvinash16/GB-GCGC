import React,{Component} from 'react'
import {Form} from "reactstrap";
import {Button,Row,Col,Table,Container} from "react-bootstrap";
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
     	this.onChangeshow = this.onChangeshow.bind(this);
     	this.onChangesearch = this.onChangesearch.bind(this);

	    this.state = {
	      Emp_Id:"",
      	  Emp_Name:"",
      	  Email_id:"",
      	  Campus:"",
      	  Department:"",
      	  Mobile_No:"",
      	  show:"0",
	      recordListuserstaff:[]
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

		   // console.log(obj);
    	Axios.get("http://localhost:80/Admin-backend/userstaff.php?show="+0,obj)
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
    })
    
    }

    onChangeshow(e) {
        this.setState({
            show: e.target.value
        });
        Axios.get("http://localhost:80/Admin-backend/userstaff.php?show="+e.target.value)
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
      		//console.log(this.state.recordListuserstaff)
   		})
   		.catch(err=>console.log(err));
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
        Axios.get("http://localhost/Admin-backend/Staffsearch.php?search="+e.target.value)
          .then(response => {
              this.setState({
                recordListuserstaff:response.data,
	        	Emp_Id: response.data[0]["Emp_Id"],
	        	Emp_Name: response.data[0]["Emp_Name"],
	        	Email_id:response.data[0]["Email_id"],
	        	Campus: response.data[0]["Campus"],
	        	Department: response.data[0]["Department"],
	        	Mobile_No: response.data[0]["Mobile_No"]
              })  
              {/*console.log(this.state.recordListuserstaff)*/}
          })
          .catch(function(err){
              console.log(err);
          })
    }

	render(){
	    return (
	    	<div style={{backgroundColor:'#C7CCDB'}}>
	        	<Container>
	            	<Row>
	            		<Col align="left">
				        	<NavLink tag={Redirect} to={"/userstaffAdd"}>
				            	<Button	style={{backgroundColor: "#2A324B",color: "white",borderColor: "#2A324B"}}>
					            	Add Staff
					        	</Button>
			            	</NavLink>
			            </Col>
	            	</Row>
		            {/*<Row className="pt-3 pb-3">
		            	<Col md="6"style={{"text-align":"initial"}}>
							Show
							<span style={{"padding":"10px"}}>
								<select value={this.state.show} onChange={this.onChangeshow}>
										<option value="0">All</option>
										<option value="5">5</option>
										<option value="10">10</option>
										<option value="25">25</option>
										<option value="50">50</option>
										<option value="75">75</option>
										<option value="100">100</option>
									</select>
							</span>
		                	Entities
		                </Col>
		            </Row>*/}
		           	<Row >
		           		<Col align="left" className="pt-1">
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
	            	</Row>
	            </Container>
	        </div>
	    )
	}
}

export default UserStaff;