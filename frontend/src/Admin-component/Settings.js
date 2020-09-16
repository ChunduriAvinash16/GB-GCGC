import React from "react";
import { Container, Row, Col, Card } from "reactstrap";
import { Form, Button } from "react-bootstrap";
import Axios from "axios";

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmpID = this.onChangeEmpID.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeCampus = this.onChangeCampus.bind(this);
    this.onChangeInstituition = this.onChangeInstituition.bind(this);
    this.onChangeDepartment = this.onChangeDepartment.bind(this);
    this.onChangeoldPassword = this.onChangeoldPassword.bind(this);
    this.onChangenewPassword = this.onChangenewPassword.bind(this);
    this.onChangeverifyPassword = this.onChangeverifyPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.onChangeDesignation = this.onChangeDesignation.bind(this);
    this.state = {
      Emp_Id: "",
      fname: "",
      lname: "",
      email: "",
      phone: "",
      campus: "",
      instituition: "",
      department: "",
      redirect: false,
      settings: [],
      oldpassword: "",
      newpassword: "",
      verifypassword: "",
      designation: "",
    };
  }
  onChangeoldPassword(e) {
    this.setState({
      oldpassword: e.target.value,
    });
  }
  onChangenewPassword(e) {
    this.setState({
      newpassword: e.target.value,
    });
  }
  onChangeverifyPassword(e) {
    this.setState({
      verifypassword: e.target.value,
    });
  }
  onChangeFirstName(e) {
    this.setState({
      fname: e.target.value,
    });
  }
  onChangeLastName(e) {
    this.setState({
      lname: e.target.value,
    });
  }
  onChangeEmpID(e) {
    this.setState({
      Emp_Id: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }
  onChangeCampus(e) {
    this.setState({
      campus: e.target.value,
    });
  }
  onChangeInstituition(e) {
    this.setState({
      instituition: e.target.value,
    });
  }
  onChangeDepartment(e) {
    this.setState({
      department: e.target.value,
    });
  }
  onChangeDesignation(e) {
    this.setState({
      designation: e.target.value,
    });
  }
  componentDidMount() {
    Axios.get("http://localhost/Admin-backend/getByIdSettings.php?id=" +this.props.sid)
      .then((response) => {
        this.setState({
          Emp_Id: response.data.Emp_Id,
          fname: response.data.Emp_Name,
          lname: response.data.last_name,
          email: response.data.Email_id,
          phone: response.data.Mobile_No,
          campus: response.data.Campus,
          instituition: response.data.Institution,
          department: response.data.Department,
          settings: response.data,
          designation: response.data.Designation,
        });
        if (this.state.lname === null) {
          this.setState({
            lname: "",
          });
        }
        console.log(this.state.designation);
        console.log(this.state.settings);
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = {
      Emp_Id: this.state.Emp_Id,
      fname: this.state.fname,
      lname: this.state.lname,
      email: this.state.email,
      phone: this.state.phone,
      campus: this.state.campus,
      instituition: this.state.instituition,
      department: this.state.department,
      designation: this.state.designation,
    };
    console.log(obj);
    Axios.post(
      "http://localhost/Admin-backend/updateSettings.php?id=" + this.props.sid,
      obj
    ).then((res) => console.log(res.data), this.setState({ redirect: true }),alert("Updated"));
  }
  onSubmitPassword(e) {
    e.preventDefault();
    const obj = {
      oldpassword: this.state.oldpassword,
      newpassword: this.state.newpassword,
      verifypassword: this.state.verifypassword,
    };
    console.log(obj);
    Axios.post(
      "http://localhost/Admin-backend/updatePassword.php?id=" + this.props.sid,
      obj
    ).then((res) => console.log(res.data), 
      this.setState({ redirect: true,
        oldpassword:"",
      newpassword:"",
    verifypassword:"" 
  }),
  alert("Password Updated Successfully")
  );
  }

  render() {
    return (
      <Container>
        <Row
          style={{
            backgroundColor: "#2A324B",
            color: "white",
            fontSize: "14px",
            fontFamily: "Segoe UI",
            fontWeight: "700",
          }}
        >
          <Col xs="12" className="p-2" align="center">
            <div>Change Details</div>
          </Col>
        </Row>
        <Row style={{ backgroundColor: "white" }}>
          <Col>
            <form onSubmit={this.onSubmit}>
              <Row>
                <Col lg="2"></Col>
                <Col lg="8">
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Emp ID:</Col>
                    <Col lg="8">
                      <input
                        type="text"
                        value={this.state.Emp_Id}
                        onChange={this.onChangeEmpID}
                        className="form-control"
                      />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">First Name:</Col>
                    <Col lg="8">
                      <input
                        type="text"
                        value={this.state.fname}
                        onChange={this.onChangeFirstName}
                        className="form-control"
                      />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Last Name:</Col>
                    <Col lg="8">
                      <input
                        type="text"
                        value={this.state.lname}
                        onChange={this.onChangeLastName}
                        className="form-control"
                      />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Email:</Col>
                    <Col lg="8">
                      <input
                        type="text"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        className="form-control"
                      />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Phone:</Col>
                    <Col lg="8">
                      <input
                        type="text"
                        value={this.state.phone}
                        onChange={this.onChangePhone}
                        className="form-control"
                      />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Campus:</Col>
                    <Col lg="8">
                      <select
                        className="form-control"
                        value={this.state.campus}
                        onChange={this.onChangeCampus}
                      >
                        <option value={"Bengaluru"}>Bengaluru</option>
                        <option value={"Vizag"}>Vizag</option>
                        <option value={"Hyderabad"}>Hyderabad</option>
                      </select>
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Instituion:</Col>
                    <Col lg="8">
                      <input
                        className="form-control"
                        type="text"
                        value={this.state.instituition}
                        onChange={this.onChangeInstituition}
                      />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Department:</Col>
                    <Col lg="8">
                      <select
                        className="form-control"
                        value={this.state.department}
                        onChange={this.onChangeDepartment}
                      >
                        <option value={"EECE"}>ECEE</option>
                        <option value={"CSE"}>CSE</option>
                        <option value={"Mechanical"}>Mechanical</option>
                        <option value={"IT"}>IT</option>
                        <option value={"CIVIL"}>Civil</option>
                        <option value={"GST"}>Director</option>
                      </select>
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Designation:</Col>
                    <Col lg="8">
                      <select
                        className="form-control"
                        value={this.state.designation}
                        onChange={this.onChangeDesignation}
                      >
                        <option value={"Director"}>Director</option>
                        <option value={"HOD"}>Head Of Department</option>
                        <option value={"Professor"}>Professor</option>
                        <option value={"Associate Professor"}>
                          Associate Professor
                        </option>
                        <option value={"Assistant Professor"}>
                          Assistant Professor
                        </option>
                        <option value={"T&P"}>T&P</option>
                        <option value={"FC"}>FC</option>
                      </select>
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row>
                    <Col lg="4">Image:</Col>
                    <Col lg="8">
                      <input type="file" />
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                  <Row align="center">
                    <Col align="center">
                    <Button
                        type="submit"
                        style={{
                          backgroundColor: "#2A324B",
                          borderColor: "#2A324B",
                          color: "white",
                        }}
                      >
                        Update
                      </Button>
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                </Col>
                <Col lg="2"></Col>
              </Row>
            </form>
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: "#2A324B",
            color: "white",
            fontSize: "14px",
            fontFamily: "Segoe UI",
            fontWeight: "700",
          }}
        >
          <Col xs="12" className="p-2" align="center">
            <div>Change Password</div>
          </Col>
        </Row>
        <Row style={{ backgroundColor: "white" }}>
          <Col>
            <form
              onSubmit={this.onSubmitPassword}
              style={{
                fontSize: "12px",
                fontFamily: "Segoe UI",
                fontWeight: "400",
                color: "#999999",
              }}
            >
              <Row>
                <Col lg="2"></Col>
                <Col lg="8">
                  <Row>&nbsp;</Row>
                  <Form.Group as={Row} controlId="Old Password">
                    <Form.Label column lg="4" style={{"font-size":"16px","color":"#212529"}}>
                      Old Password:
                    </Form.Label>
                    <Col lg="8">
                      <Form.Control
                        value={this.state.oldpassword}
                        onChange={this.onChangeoldPassword}
                        type="password"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Segoe UI",
                          fontWeight: "400",
                          color: "#999999",
                        }}
                      />
                    </Col>
                  </Form.Group>
                  <br/>
                  <Form.Group as={Row} controlId="New Password">
                    <Form.Label column lg="4" style={{"font-size":"16px","color":"#212529"}}>
                      New Password:
                    </Form.Label>
                    <Col lg="8">
                      <Form.Control
                        value={this.state.newpassword}
                        onChange={this.onChangenewPassword}
                        type="password"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Segoe UI",
                          fontWeight: "400",
                          color: "#999999",
                        }}
                      />
                    </Col>
                  </Form.Group>
                  <br/>
                  <Form.Group as={Row} controlId="Confirm Password">
                    <Form.Label column lg="4" style={{"font-size":"16px","color":"#212529"}}>
                      Confirm Password:
                    </Form.Label>
                    <Col lg="8">
                      <Form.Control
                        value={this.state.verifypassword}
                        onChange={this.onChangeverifyPassword}
                        type="password"
                        style={{
                          fontSize: "12px",
                          fontFamily: "Segoe UI",
                          fontWeight: "400",
                          color: "#999999",
                        }}
                      />
                    </Col>
                  </Form.Group>
                  <br/>
                  <Row>
                    <Col align="center">
                      <Button
                        type="submit"
                        style={{
                          backgroundColor: "#2A324B",
                          borderColor: "#2A324B",
                          color: "white",
                        }}
                      >
                        Submit
                      </Button>
                    </Col>
                  </Row>
                  <Row>&nbsp;</Row>
                </Col>
                <Col lg="2"></Col>
              </Row>
            </form>
            <Row>&nbsp;</Row>
          </Col>
        </Row>
        <Row>&nbsp;</Row>
        <Row>&nbsp;</Row>
      </Container>
    );
  }
}
export default Settings;
