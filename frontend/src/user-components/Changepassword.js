import React from "react";
import { Button, Modal } from "react-bootstrap";
import Axios from "axios";

class Changepassword extends React.Component {
  constructor(props){
          super(props);
          this.onChangeoldPassword = this.onChangeoldPassword.bind(this);
          this.onChangeverifyPassword = this.onChangeverifyPassword.bind(this);
          this.onChangenewPassword = this.onChangenewPassword.bind(this);
          this.onSubmit = this.onSubmit.bind(this);
          this.state={
              oldpassword: "",
              newpassword: "",
              verifypassword: ""
          }
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

   onSubmit(e) {
    e.preventDefault();
    const obj = {
      oldpassword: this.state.oldpassword,
      newpassword: this.state.newpassword,
      verifypassword: this.state.verifypassword
    };
    console.log(obj);
    Axios.post("http://localhost/login-backend/updatePassword.php?id="+this.props.login,obj)
            .then((response)=>{
            alert(response.data);
    })
  }

  render() {
    return (
      <div className="changepassword">
        <center>
          <div class="content">
            <br></br>
            <form onSubmit={this.onSubmit}>
              <label>
                <div> Old Password</div>
                <div>
                  <input type="password" name="oldpassword" className="form-control" value={this.state.oldpassword} onChange={this.onChangeoldPassword}/>
                </div>
              </label>
              <br></br>
              <label>
                <div>New Password</div>
                <div>
                  <input type="password" name="newpassword" className="form-control" onChange={this.onChangenewPassword}/>
                </div>
              </label>
              <br></br>
              <label>
                <div>Confirm New Password</div>
                <div>
                  <input type="Password" name="verifypassword" className="form-control" onChange={this.onChangeverifyPassword}/>
                </div>
              </label>
              <br></br>
              <label>
                <Button type="Submit" className="form-control">Submit</Button>
              </label>
            </form>
          </div>
        </center>
      </div>
    );
  }
}

export default Changepassword;
