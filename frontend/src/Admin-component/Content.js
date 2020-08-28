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
import HomeCards from "./HomeCards";
import NoticeTraningmore from "./NoticeTraningmore";
import PlacementTrainingmore from "./NoticePlacementmore";
import TrainingBoardEdit from "./TrainingBoardEdit";
import PlacementBoardEdit from "./PlacementEditBoard";

import { Link } from "react-router-dom";




const ColoredLine = ({ color }) => (
  <hr
    style={{
      color: color,
      backgroundColor: color,
      height: 20,
    }}
  />
);

const Content = ({ sidebarIsOpen, toggleSidebar }) => (
  <Container fluid className={classNames("content", { "is-open": sidebarIsOpen })} >
    <Switch>
      <Route exact path="/"
        component={() => (
          <div>
            <hr style={{ visibility: "visible" }} />
            <HomeCards />
            &nbsp;
            <div></div>
          </div>
        )}
      />
 
      <Route exact path="/Page-1" component={() => "Page-1"} />
      <Route exact path="/trainingdashboardmore"
        component={() => (
          <div>
            <NoticeTraningmore />
          </div>
        )}
      />
      <Route exact path="/placementdashboardmore"
        component={() => (
          <div>
            <PlacementTrainingmore />
          </div>
        )}
      />
      <Route exact
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
      
    
        </Switch>
  </Container>
);

export default Content;
