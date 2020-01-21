import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { TodosPage } from "./pages/TodosPage";
import { AboutPage } from "./pages/AboutPage";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="container">
        <Switch>
          <Route exact path="/" component={TodosPage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
