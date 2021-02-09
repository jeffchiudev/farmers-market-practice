import React from "react";
import PropTypes from "prop-types";

function Schedule(props){
  return (
    <React.Fragment>
      <h3>{props.dayOfWeek}: {props.location}</h3>
    </React.Fragment>
  )
}