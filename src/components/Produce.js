import React from "react";
import PropTypes from "prop-types";

function Produce(props){
  return (
    <React.Fragment>
      <h2>{props.month}</h2>
    </React.Fragment>
  );
}

Produce.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
};

export default Produce;