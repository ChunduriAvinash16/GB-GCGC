import React from "react";
import classNames from "classnames";
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  ButtonDropdown,
  Row,
} from "reactstrap";
import { Switch, Route } from "react-router-dom";
import Topbar from "./Topbar";
import HomeCards from "../HomeCards";
import NoticeTraningmore from "../NoticeTraningmore";
import PlacementTrainingmore from "../NoticePlacementmore";
import TrainingBoardEdit from "../TrainingBoardEdit";
import PlacementBoardEdit from "../PlacementEditBoard";
import IndividualStudentEntry from "../IndividualStudentEntry";
import AllStudents from "../AllStudents";
import Settings from "../Settings";
import Navbar from "../Uploads/Navbar";
import Users from "../Uploads/users";
import Personaldetails from "../Uploads/personaldetails";
import Academicdetails from "../Uploads/academicdetails";
import Ari from "../Uploads/ari";
import AreAmcat from "../Uploads/areamcat";
import AreCoCubes from "../Uploads/arecocubes";
import Cdt from "../Uploads/cdt";
import Ita from "../Uploads/ita";
import Companydetails from "../Uploads/companydetails";
import EditTraining from "../EditTraining";
import EditPlacement from "../EditPlacement";
import Footer from "../../user-components/Footer";
import IndividualStudent from "../IndividualStudent";
import Login from "../../login-components/Login";
import UserStaff from "../../Admin-component/UserStaff"
import UserStudent from "../../Admin-component/UserStudent";
import Assessment from "../../Admin-component/Assessment";
import Placements from "../../Admin-component/Placements";
import StudentView from "../../Admin-component/StudentView";
import Dashboard from "../../user-components/Dashboard";
const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 20,
    }}
  />
);

const Content = ({id,sidebarIsOpen, toggleSidebar}) => (
  <Container
    fluid
    className={classNames("content", { "is-open": sidebarIsOpen })}
  >
    <Topbar toggleSidebar={toggleSidebar} />
    <Switch>
      <Route
        exact
        path="/home"
        component={() => (
          <div>
            <HomeCards />
            &nbsp;
            <div></div>
          </div>
        )}
      />
      <Route
        exact
        path="/IndividualStudentEntry"
        component={() => (
          <div>
            <IndividualStudentEntry />
          </div>
        )}
      />
      <Route
        exact
        path="/allstudents"
        component={() => (
          <div>
            <AllStudents />
          </div>
        )}
      />
      <Route
        exact
        path="/Uploads"
        component={() => (
          <div>
            <Navbar />
          </div>
        )}
      />
      <Route
        exact
        path="/settings"
        component={() => (
          <div>
            <Settings sid={id}/>
          </div>
        )}
      />
      <Route exact path="/Page-1" component={() => "Page-1"} />
      <Route
        exact
        path="/trainingdashboardmore/:id"
        component={NoticeTraningmore}
      />
      <Route
        exact
        path="/placementdashboardmore/:id"
        component={PlacementTrainingmore}
      />
      <Route
        exact
        path={"/TrainingBoardEdit/:id"}
        component={TrainingBoardEdit}
      />
      <Route
        exact
        path={"/PlacementEditBoard/:id"}
        component={PlacementBoardEdit}
      />
      <Route
        exact
        path="/Uploads/users"
        component={() => (
          <div>
            <Users />
          </div>
        )}
      />
      <Route path="/personaldetails" component={Personaldetails} />
      <Route path="/academicdetails" component={Academicdetails} />
      <Route path="/ari" component={Ari} />
      <Route path="/areamcat" component={AreAmcat} />
      <Route path="/arecocubes" component={AreCoCubes} />
      <Route path="/cdt" component={Cdt} />
      <Route path="/ita" component={Ita} />
      <Route path="/companydetails" component={Companydetails} />
      <Route exact path={"/edit/:id"} component={EditTraining}/>
      <Route exact path={"/editplacement/:id"} component={EditPlacement}/>
      <Route path={"/IndividualStudent/:id"} component={IndividualStudent}/>
      <Route path={"/DashBoard"} component={Dashboard}/>
      <Route path="/user-staff" component={UserStaff}/>
      <Route path="/user-student" component={UserStudent}/>
      <Route path="/assessment" component={Assessment}/>
      <Route path="/Placements" component={Placements}/>
    </Switch>
    <Footer />
  </Container>
);

export default Content;
