import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Form from "./registration-form/Form";
import ToDo from "./to-do-app/ToDo";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Form Registration</Link>
          </li>
          <li>
            <Link to="/todo">To Do</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Form />
          </Route>
          <Route path="/todo">
            <ToDo />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
