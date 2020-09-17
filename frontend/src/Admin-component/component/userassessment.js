import React,{Component} from "react";
import {Table,Col} from "reactstrap";
// import {Col} from 'reactstrap';
// import BootstrapTable from 'react-bootstrap-table-next';
// import Axios from "axios";
// import Students from './AllRecordsList';

class UserAssessment extends Component {
  constructor(props) {
        super(props);
        // this.state={students: [],login:this.props.login};
    }
    // componentDidMount() {
    //     Axios.get("http://localhost/login-backend/leaderboard.php?id="+this.props.login)
    //         .then(responses => {
    //             this.setState({students: responses.data});
    //             console.log(this.state.students);
    //         })
    //         .catch(function (error){
    //             console.log(error);
    //         })
    // }
    //  StudentsList(){
    //     return this.state.students.map(function (object,i){
    //         return <Students obj={object} key={i} login={321710303054}/>;
    //     });
    // }

    
  render() {
    return (

      <div className="lb">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th  scope="row">S No.</th>
              <th scope="row">Name of the Assessment</th>
              <th scope="row">YOP</th>
              <th scope="row">Date of the Assessment</th>
              <th scope="row">No. of Students Attended</th>
              <th scope="row">No. of Absentees</th>
              <th scope="row">Highest Score</th>
              <th scope="row">Minimum Score</th>
              <th scope="row">Average Score</th>
            </tr>
          </thead>
          <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          
          <td>Table cell</td>
          <td>Table cell</td>
          
        
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
          <td>Table cell</td>
        </tr>
        
        </tbody>
        </Table>
        <div className="form-group" style={{"text-align":"-webkit-center"}}>
       <button type="submit" className="btn btn-danger btn-block"style={{"backgroundColor":"#CC5200" ,"width": "100px","text-align": "center"}}>Add new Assessment</button>
   </div> 

   </div>
 

    );
  }
}

export default UserAssessment;