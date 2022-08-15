import Navi from "./nav";
import React from "react";
import Accordeon from "./accordeon";
import Cardd from "./card";

function App() {
  return (
    <div className="container bg-p h-100">
      <div className="row">
        <div className="col">
          <div className="px-4 py-1 m-2 text-center">
            <Navi/>
            <h2>Alsara</h2>
            <div className="d-flex">
              <Accordeon/>
              <Cardd/>
            </div>
          </div>          
        </div> 
      </div>
    </div>
  );
}

export default App;
