import React, { Component } from "react";
import { Table } from "reactstrap";
import "../App.css";
import { Link } from "react-router-dom";
//import Image from 'react-bootstrap/Image';

class leaderboard extends Component {
  render() {
    return (
      <div className="lb">
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
            <tr className="rank1">
              <th scope="row">1</th>
              <td>321710XXXXXX</td>
              <td>Name-1</td>
              <td>ABC</td>
              <td>1</td>
              <td>19</td>
              <td>3</td>
            </tr>
            <tr className="rank2">
              <th scope="row">2</th>

              <td>321710XXXXXX</td>
              <td>Name-2</td>
              <td>ABC</td>
              <td>2</td>
              <td>13</td>
              <td>4</td>
            </tr>
            <tr className="rank3">
              <th scope="row">3</th>
              <td>321710XXXXXX</td>
              <td>Name-3</td>
              <td>ABC</td>
              <td>3</td>
              <td>1</td>
              <td>6</td>
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>321710XXXXXX</td>
              <td>Name-4</td>
              <td>ABC</td>
              <td>4</td>
              <td>13</td>
              <td>62</td>
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>321710XXXXXX</td>
              <td>Name-5</td>
              <td>ABC</td>
              <td>5</td>
              <td>14</td>
              <td>66</td>
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>321710XXXXXX</td>
              <td>Name-6</td>
              <td>ABC</td>
              <td>6</td>
              <td>15</td>
              <td>68</td>
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>321710XXXXXX</td>
              <td>Name-7</td>
              <td>ABC</td>
              <td>7</td>
              <td>13</td>
              <td>61</td>
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>321710XXXXXX</td>
              <td>Name-8</td>
              <td>ABC</td>
              <td>8</td>
              <td>10</td>
              <td>60</td>
            </tr>
            <tr>
              <th scope="row">9</th>

              <td>321710XXXXXX</td>
              <td>Name-9</td>
              <td>ABC</td>
              <td>9</td>
              <td>22</td>
              <td>90</td>
            </tr>
            <tr>
              <th scope="row">10</th>

              <td>321710XXXXXX</td>
              <td>Name-10</td>
              <td>ABC</td>
              <td>10</td>
              <td>99</td>
              <td>45</td>
            </tr>
            <br></br>
            <tr className="u" style={{ fontWeight: "bold" }}>
              <th scope="row">XX</th>

              <td>321710XXXXXX</td>
              <td>Name-XX</td>
              <td>ABC</td>
              <td>XX</td>
              <td>XX</td>
              <td>XX</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}

export default leaderboard;
