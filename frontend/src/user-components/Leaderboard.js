import React,{Component} from "react";
import {Table} from "reactstrap";
import Axios from "axios";
import Students from './AllRecordsList';

class Leaderboard extends Component {
  constructor(props) {
        super(props);
        this.state={students: [],login:this.props.login};
    }
    componentDidMount() {
        Axios.get("http://localhost/login-backend/leaderboard.php?id="+this.props.login)
            .then(responses => {
                this.setState({students: responses.data});
                console.log(this.state.students);
            })
            .catch(function (error){
                console.log(error);
            })
    }
     StudentsList(id){
        return this.state.students.map(function (object,i){
            return <Students sid={id} obj={object} key={i} login={321710303054}/>;
        });
    }
  render() {
    return (
        <Table striped bordered hover zoom responsive>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Roll Number</th>
              <th>Name</th>
              <th>Branch & Section</th>
              <th>CoCubes</th>
              <th>Amcat</th>
              <th>Internal</th>
            </tr>
          </thead>
          <tbody>
            {this.StudentsList(this.props.login)}
          </tbody>
        </Table>
    );
  }
}

export default Leaderboard;
