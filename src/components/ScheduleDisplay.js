import React from "react";
import Schedule from "./Schedule";

function ScheduleDisplay(props) {
  return (
    <React.Fragment>
      <h3>Weekly Farmer's Market Schedule</h3>
      <p>Join us at farmer's markets Sunday-Thursday, and Saturdays!</p>
      <div class="row">
        <div class="col-2">
          <p>Sunday</p>
        </div>
        <div class="col-2">
          <p>Monday</p>
        </div>
        <div class="col-2">
          <p>Tuesday</p>
        </div>
        <div class="col-2">
          <p>Wednesday</p>
        </div>
        <div class="col-2">
          <p>Thursday</p>
        </div>
        <div class="col-2">
          <p>Saturday</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ScheduleDisplay;