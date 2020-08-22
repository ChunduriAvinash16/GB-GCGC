import React from "react";
import { Button, Modal } from "react-bootstrap";

class changepassword extends React.Component {
  render() {
    return (
      <div className="changepassword">
        <center>
          <div class="content">
            <br></br>
            <form>
              <label>
                <div> Old Password</div>
                <div>
                  <input type="password" name="oldpass" />
                </div>
              </label>{" "}
              <br></br>
              <label>
                <div>New Password</div>
                <div>
                  <input type="password" name="newpass1" />
                </div>
              </label>{" "}
              <br></br>
              <label>
                <div>Confirm New Password</div>
                <div>
                  <input type="Password" name="newpass2" />
                </div>
              </label>{" "}
              <br></br>
              <label>
                <Button>Submit</Button>
              </label>
            </form>
          </div>
        </center>
      </div>
    );
  }
}

export default changepassword;
