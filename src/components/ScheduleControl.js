//handles state for schedule for toggleable elements
import React from 'react';
import ScheduleDisplay from './ScheduleDisplay';
import ScheduleDay from './ScheduleDay';
import Schedule from './Schedule';

class ScheduleControl extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      scheduleVisibleOnPage: false
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      scheduleVisibleOnPage: !prevState.scheduleVisibleOnPage
    }));
  }

  render(){
    let currentlyVisibleState = null;
    let scheduleButtonText = null;
    if (this.state.scheduleVisibleOnPage) {
      currentlyVisibleState = <ScheduleDay />;
      scheduleButtonText = "Return to weekly schedule";
    } else {
      currentlyVisibleState = <ScheduleDisplay />;
      scheduleButtonText = "View Hours & Locations";
    }
    //if (this.state.//props.Monday)
    // currentlyVisibleState =<ScheduleDay />;
    //else {
      //currentlyVisibleState = <ScheduleDisplay />;
      //scheduleButtonText = "View Hours & Locations";
    //}
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{scheduleButtonText}</button>
      </React.Fragment>
    );
  }
}

export default ScheduleControl;