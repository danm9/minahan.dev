import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home/Home.js";
import { Portfolio } from "./Components/Portfolio/Portfolio.js";
import { Resume } from "./Components/Resume/Resume.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />  
      </Switch>
    </BrowserRouter>
  );
}

export default App;
