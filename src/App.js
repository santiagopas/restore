import React from "react";
import { Switch, Route } from "react-router-dom";
//Layouts
import MainLayout from "./layouts/MainLayaut";

import './default.scss';
import Homepage from "./pages/Homepage";
import Registration from "./pages/Registration";
import HomepageLayout from "./layouts/HomepageLayout";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <HomepageLayout>
            <Homepage />
          </HomepageLayout>
        )} />
        <Route path="/registro" render={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;

