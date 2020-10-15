import React,{Component} from 'react';
import {
    faUser
  } from "@fortawesome/free-solid-svg-icons";
  import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from 'axios';
import {Redirect} from 'react-router';
import Tooltip from "@material-ui/core/Tooltip";

export default class Students extends Component{
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            val:1
        }
    }
    render(){
            return(
                <tr>
                    <td>{this.props.obj.sno}</td>
                    <td align="left">{this.props.obj.assessment}</td>
                    <td>{this.props.obj.YOP}</td>
                    <td>{this.props.obj.Date}</td>
                    <td>{this.props.obj.attended}</td>
                    <td>{this.props.obj.absent}</td>
                    <td>{this.props.obj.max}</td>
                    <td>{this.props.obj.avg}</td>
                    <td>{this.props.obj.min}</td>
                    <td>
                        <Tooltip title="Students" placement="right">
                            <Link to={"/user/"+this.props.obj.id} ><FontAwesomeIcon icon={faUser} className="ml-2 p-1 fa-lg" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/></Link>
                        </Tooltip>
                    </td>
                </tr>
            );
    }
}