import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
import Footer from "./Footer";
import Axios from 'axios';
class NoticeTraningmore extends Component {
  constructor(props){
    super(props);
    this.state={
      dash:[],
      year:"2021"
      }
  }
  componentDidMount(){
    Axios.get("http://localhost:80/Admin-backend/TrainingDashBoardmore.php")
    .then(response=>{
      this.setState({
        dash:response.data,
      })
      console.log(this.state.dash[1])
    })
    .catch(err=>console.log(err));
  }
  render() {
    return (
      <div>
        <Card>
          <Card.Body>
            <Card.Title>
              <h3
                align="center"
                style={{ fontSize: "20px", fontFamily: "Segoe UI" }}
              >
                Notice Board-Training
              </h3>
            </Card.Title>
            &nbsp;
            <Card.Text>
              <div>
                <Table size="sm" responsive>
                  <thead>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Name of the Programme</th>
                      <th>status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.dash.map((item =>
                      <tr>
                        <td>{item.from_date}</td>
                        <td>{item.to_date}</td>
                        <td>{item.name_of_the_program}</td>
                        <td>{item.status}</td>
                        
                        </tr>
                        ))}
                  </tbody>
                </Table>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
export default NoticeTraningmore;
