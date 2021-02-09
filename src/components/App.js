import React from "react";
import Header from "./Header";
import Day from "./ProduceControl";
import ScheduleControl from "./ScheduleControl";
import ProduceControl from "./ProduceControl";

function App() {
  return (
    <React.Fragment>
      <div class="container">
        <Header/>
        <div style={{textAlign: "center"}}>
          <ScheduleControl/>
          <ProduceControl/>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;