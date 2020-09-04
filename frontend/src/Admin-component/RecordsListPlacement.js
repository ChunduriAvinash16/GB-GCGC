import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Axios from 'axios';
import {Redirect} from 'react-router';
import {
    faPlus,
    faEdit,
    faTrash,
  } from "@fortawesome/free-solid-svg-icons";
export default class RecordList extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            redirect: false,
            val:1,
        }
    }
    delete(e) {
        Axios.get("http://localhost:80/Admin-backend/PlacementsDashBoardDelete.php?id="+this.props.obj.id)
        .then(
            this.setState({redirect : true})
        )
            .catch(err => console.log(err))
    }
    render(){
        const {redirect} = this.state;

        if(redirect){
            return <Redirect to={"/PlacementEditBoard"}/>
        }
    return (
        
        //let count = {this.state};
          <tr>
              <td>
                  {this.props.obj.sno}
              </td>
                <td>
                    {this.props.obj.Company_name}
                </td>
                <td>
                    {this.props.obj.Date}
                </td>
                <td>
                    {this.props.obj.CTC}
                </td>
                <td>
                    {this.props.obj.status}
                </td>
                <td>
                    <Link to={"/editplacement/"+this.props.obj.id} ><FontAwesomeIcon icon={faEdit} className="ml-2 p-1 fa-lg" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/></Link>
                
                    <Link><FontAwesomeIcon icon={faTrash} onClick={this.delete} className="ml-2 p-1" style={{backgroundColor:'#2A324B',color:'white',fontSize:'20',borderRadius:'10'}}/></Link>
                </td>
            </tr>  
    )
    }
}