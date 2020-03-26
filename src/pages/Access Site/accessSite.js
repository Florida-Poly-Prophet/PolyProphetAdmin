import React from 'react';
import './accessSite.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import QuestionB from '../Question Bank/questionB.js'

function AccessSite() {
  return (
    <div className="AccessSite">
        <header>Access Site</header>
        <Router>
          <div>
            <nav>
              <Link to="/dashboard">Log-in</Link>
            </nav>
            <Switch>
              <Route path="/dashboard">
                <QuestionB />
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default AccessSite;