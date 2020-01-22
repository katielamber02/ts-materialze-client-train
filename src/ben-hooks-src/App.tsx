import React from "react";

import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Main } from "./useState/Main";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
