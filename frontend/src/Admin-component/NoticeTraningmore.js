import React, { Component } from "react";
import { Card, Table } from "react-bootstrap";
import Footer from "./Footer";
import Axios from 'axios';
class NoticeTraningmore extends Component {
  constructor(props){
    super(props);
    this.state={
      dash:[],
      }
  }
  componentDidMount(){
    Axios.get("http://localhost:80/Admin-backend/TrainingDashBoardmore.php?id="+this.props.match.params.id)
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
      <div className="container">
        <Card>
          <Card.Body>
            <Card.Title>
              <h5
                align="center"
                style={{ fontSize: "20px", fontFamily: "Segoe UI" }}
              >
                Notice Board-Training
              </h5>
            </Card.Title>
            &nbsp;
            <Card.Text>
              <div>
                <Table size="sm" responsive striped>
                  <thead className="p-3" style={{backgroundColor:'#2A324B',color:'white',fontSize:'24px'}}>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                      <th>Name of the Programme</th>
                      <th>Status</th>
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