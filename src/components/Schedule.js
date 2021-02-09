import React from "react";
import PropTypes from "prop-types";

function Schedule(props){
  return (
    <React.Fragment>
      <h3>{props.day}</h3>
      <p>Location: {props.location}</p>
      <p>Booth: {props.booth}</p>
      <p>Hours: {props.hours}</p>
    </React.Fragment>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  booth: PropTypes.string,
  hours: PropTypes.string
};

export default Schedule;