import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
import Footer from "./Footer";
import Axios from 'axios';
class PlacementTrainingmore extends Component {
  constructor(props){
    super(props);
    this.state={
      train:[],
      year:"2021"
      }
  }

  componentDidMount(){
    Axios.get("http://localhost:80/Admin-backend/PlacementsDashBoardmore.php")
    .then(response=>{
      this.setState({
        train:response.data,
      })
      console.log(this.state.train[1])
    })
    .catch(err=>console.log(err));
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>
              <h3 align="center">Notice Board-Placements</h3>
            </Card.Title>
            &nbsp;
            <div>
              <Table size="sm" responsive>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name of the Programme</th>
                    <th>Date</th>
                    <th>CTC</th>
                  </tr>
                </thead>
                <tbody>
                {this.state.train.map((item =>
                      <tr>
                        <td>{this.state.train.indexOf(item)+1}</td>
                        <td>{item.Company_name}</td>
                        <td>{item.Date}</td>
                        <td>{item.CTC}</td>
                        </tr>
                        ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default PlacementTrainingmore;
