import React,{Component} from "react";
import {Table} from "reactstrap";
import Axios from "axios";
import Records from './RecordsList';

class Placements extends Component {
  constructor(props) {
        super(props);
        this.state={Records: []};
    }
    componentDidMount() {
        Axios.get("http://localhost/login-backend/placements.php?id="+this.props.login)
            .then(responses => {
                this.setState({Records: responses.data});
                console.log(this.state.Records);
            })
            .catch(function (error){
                console.log(error);
            })
    }
     RecordsList(){
        return this.state.Records.map(function (object,i){
            return <Records obj={object} key={i} login={321710303054}/>;
        });
    }
  render() {
    return (
      <div className="lb">
        <Table bordered hover zoom responsive style={{backgroundColor:"white"}} className="container-fluid">
          <thead>
            <tr>
              <th>Company Logo</th>
              <th>Company Name</th>
              <th>Attendance</th>
              <th>Written Test</th>
              <th>GroupDiscussion</th>
              <th>Technical Test</th>
              <th>Personal Interview</th>
            </tr>
          </thead>
          <tbody>
            {this.RecordsList()}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default Placements;