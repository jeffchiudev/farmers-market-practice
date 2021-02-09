import React from 'react';
import Produce from './Produce';
import ProduceDisplay from './ProduceDisplay';
import ProduceMonth from './ProduceMonth';

class ProduceControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let produceButtonText = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <ProduceMonth/>;
      produceButtonText = "Return to yearly calendar";
    } else {
      currentlyVisibleState = <ProduceDisplay/>
      produceButtonText = "View Produce by Month";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick = {this.handleClick}>{produceButtonText}</button>
      </React.Fragment>
    );
  }
}

export default ProduceControl;
