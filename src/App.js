import React from 'react';
import logo from './image.png';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AccessSite from './pages/Access Site/accessSite.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <div>
          <nav>
                <Link to="/log-in">Log In</Link>
          </nav>
          <Switch>
            <Route path="/log-in">
              <AccessSite />
            </Route>
          </Switch> 
        </div>
      </Router>
      </header>
    </div>
    
  );
}


export default App;

