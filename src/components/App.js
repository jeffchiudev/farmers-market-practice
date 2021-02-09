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
        <ScheduleControl/>
        <ProduceControl/>
      </div>
    </React.Fragment>
  );
}

export default App;