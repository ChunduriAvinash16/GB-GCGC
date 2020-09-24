import React, {Component} from "react";

export default class Students extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        if(this.props.sid==this.props.obj.user_id){
            return(

                <tr>
                <td style={{"color":"red","font-weight":"bolder"}}>
                    {this.props.obj.rank}
                </td>
                <td style={{"color":"red","font-weight":"bolder"}}>
                    {this.props.obj.user_id}
                </td>
                <td style={{"color":"red","font-weight":"bolder"}}>
                    {this.props.obj.first_name} {this.props.obj.middle_name}  {this.props.obj.last_name}
                </td>
                <td style={{"color":"red","font-weight":"bolder"}}>
                    {this.props.obj.Branch}
                </td>
                <td style={{"color":"red","font-weight":"bolder"}}>
                    {this.props.obj.Cocubes_score}
                </td>
                <td style={{"color":"red","font-weight":"bolder"}}>
                    {this.props.obj.Amcat_score}
                </td>
                <td style={{"color":"red","font-weight":"bolder"}}>
                    {this.props.obj.Ati_score}
                </td>
            </tr>
            )
        }
        else{
        return(
            <tr>
                <td>
                    {this.props.obj.rank}
                </td>
                <td>
                    {this.props.obj.user_id}
                </td>
                <td>
                    {this.props.obj.first_name} {this.props.obj.middle_name}  {this.props.obj.last_name}
                </td>
                <td>
                    {this.props.obj.Branch}
                </td>
                <td>
                    {this.props.obj.Cocubes_score}
                </td>
                <td>
                    {this.props.obj.Amcat_score}
                </td>
                <td>
                    {this.props.obj.Ati_score}
                </td>
            </tr>
        
        );
        }
    }
}