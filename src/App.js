import React from "react";
import TagManager from "react-gtm-module";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home/Home.js";
import { Portfolio } from "./Components/Portfolio/Portfolio.js";
import { Resume } from "./Components/Resume/Resume.js";
import { LoginPage } from "./Components/Login/LoginPage.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const tagManagerArgs = {
    gtmId: 'GTM-5C7STSC'
  }

  TagManager.initialize(tagManagerArgs);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/LoginPage" component={LoginPage} />
        <Route path="/resume" component={Resume} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
