import React, {Component} from "react";

export default class RecordsListPlaceAnalysis extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <tr>
                <td>
                    <img src={this.props.obj.logo} width="100" height="100"/>
                </td>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.attendance}
                </td>
                <td>
                    {this.props.obj.WTS}
                </td>
                <td>
                    {this.props.obj.GDS}
                </td>
                <td>
                    {this.props.obj.TIS}
                </td>
                <td>
                    {this.props.obj.PIU}
                </td>
            </tr>
        );
    }
}