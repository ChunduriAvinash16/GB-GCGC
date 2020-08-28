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
import Example from "./DropDown";
import Topbar from "./Topbar";
import HomeCards from "../HomeCards";
import Footer from "../../user-components/Footer";
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
import LandingRoute from "../../Components/LandingRoute";
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
            <Row className="pl-3">
              <h4 className="pr-3">Glimpse - </h4>
              <Example />
            </Row>
            <hr style={{ visibility: "visible" }} />
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
        path="/trainingdashboardmore"
        component={() => (
          <div>
            <NoticeTraningmore />
          </div>
        )}
      />
      <Route
        exact
        path="/placementdashboardmore"
        component={() => (
          <div>
            <PlacementTrainingmore />
          </div>
        )}
      />
      <Route
        exact
        path="/TrainingBoardEdit"
        component={() => (
          <div>
            <TrainingBoardEdit />
          </div>
        )}
      />
      <Route
        exact
        path="/PlacementEditBoard"
        component={() => (
          <div>
            <PlacementBoardEdit />
          </div>
        )}
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
    </Switch>
    <Footer />
  </Container>
);

export default Content;
