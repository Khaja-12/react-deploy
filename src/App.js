import React from "react";
import InputData from "./Component/InputData";
import ReactCsv from "./Component/ReactCsv";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import CompanyName from "./CompanyName";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
            
        <Route exact path="/">
       <CompanyName/>
          </Route>
          
        <Route exact path="/inputData">
        <InputData />
          </Route>

        <Route exact path="/reactCsv">
            <ReactCsv/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
