import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Header() {
  return(
    <React.Fragment>
      <div class="container">
        <div id="jumboBG" class="jumbotron">
          <div style={{textAlign: "center"}}>
            <h1>Avery's Organics</h1>
            <br/>
            <h3 style={{fontStyle: "italic"}}>Your number one source of organic produce year-round in North Portland.</h3>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Header;