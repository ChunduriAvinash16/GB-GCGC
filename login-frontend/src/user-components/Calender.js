import * as ReactDOM from "react-dom";
import React, { Component } from "react";
import {
  ScheduleComponent,
  ViewsDirective,
  ViewDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Inject,
} from "@syncfusion/ej2-react-schedule";
import { extend } from "@syncfusion/ej2-base";
//mport { scheduleData } from './datasource';
class Calender extends Component {
  constructor() {
    super(...arguments);
    this.data = extend([], /*,scheduleData,*/ null, true);
  }
  onPopupOpen(args) {
    args.cancel = true;
  }
  render() {
    return (
      <div className="container-fluid">
        <ScheduleComponent
          width="100%"
          height="550px"
          selectedDate={new Date(2018, 1, 15)}
          ref={(schedule) => (this.scheduleObj = schedule)}
          eventSettings={{ dataSource: this.data }}
          popupOpen={this.onPopupOpen.bind(this)}
        >
          <ViewsDirective>
            <ViewDirective option="Day" />
            <ViewDirective option="Week" />
            <ViewDirective option="WorkWeek" />
            <ViewDirective option="Month" />
          </ViewsDirective>
          <Inject services={[Day, Week, WorkWeek, Month]} />
        </ScheduleComponent>
      </div>
    );
  }
}
export default Calender;
