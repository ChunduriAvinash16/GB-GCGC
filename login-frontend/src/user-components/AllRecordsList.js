import React, {Component} from "react";

export default class Students extends Component{
    constructor(props) {
        super(props);
    }
    render(){
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