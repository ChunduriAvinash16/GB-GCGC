import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Redirect} from "react-router";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@material-ui/core/Tooltip";
import Axios from 'axios';

export default class RecordListuserstaff extends Component {
    
    

    deletestaff(){
        if(window.confirm('Are you sure to DELETE?'))
        {
            fetch("http://localhost:80/Admin-backend/userstaffDelete.php?id="+this.props.obj.Emp_Id,
            {
                method:'DELETE',
                header:{'Accept':'application/json',
                'Content-Type':'application/json'
                }
            })
            .then(res=>alert("Sucessfully Deleted!"))
            .catch(err=>console.log(err))
        }
    }

    render(){
    return (
        <tr>
            <td>{this.props.obj.Emp_Id}</td>
            <td>{this.props.obj.Emp_Name}</td>
            <td>{this.props.obj.Email_id}</td>
            <td>{this.props.obj.Campus}</td>
            <td>{this.props.obj.Department}</td>
            <td>{this.props.obj.Mobile_No}</td>
            <td>
                <Tooltip title="Edit" placement="left">
                    <Link to={"/edituserstaff/"+this.props.obj.Emp_Id} ><FontAwesomeIcon icon={faEdit} className="ml-2 p-1 fa-lg" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/></Link>
                </Tooltip>
                <Tooltip title="Delete" placement="right">
                    <FontAwesomeIcon icon={faTrash} onClick={()=>this.deletestaff()} className="ml-2 p-1" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/>
                </Tooltip>
            </td>        
        </tr>  
        )
    }
}