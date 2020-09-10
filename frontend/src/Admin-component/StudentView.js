import React, { Component } from 'react';
import Dashboard from '../user-components/Dashboard';

class StudentView extends Component{
    render(){
        return(
            <Dashboard login={this.props.match.params.id}></Dashboard> 
       )
    }
}
export default StudentView;