import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Redirect} from "react-router";
import {
    faPlus,
    faEdit,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";
import Axios from 'axios';
export default class RecordList extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false
        }
    }
    delete(e) {
        Axios.get("http://localhost:80/Admin-backend/TrainingDashBoardDelete.php?id="+this.props.obj.id)
        .then(
            this.setState({redirect : true})
        )
            .catch(err => console.log(err))
    }
    render(){
        const {redirect} = this.state;

        if(redirect){
            return <Redirect to={"/TrainingBoardEdit"}/>
        }
    return (
          <tr>
                <td>
                    {this.props.obj.from_date}
                </td>
                <td>
                    {this.props.obj.to_date}
                </td>
                <td>
                    {this.props.obj.name_of_the_program}
                </td>
                <td>
                    {this.props.obj.status}
                </td>
                <td>
                    <Link to={"/edit/"+this.props.obj.id} ><FontAwesomeIcon icon={faEdit} className="ml-2 p-1 fa-lg" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/></Link>
                   <Link><FontAwesomeIcon icon={faTrash} onClick={this.delete} className="ml-2 p-1" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/></Link>
                </td>
            </tr>  
    )
    }
}