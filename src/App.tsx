import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home}  from 'containers/home';
import { About }   from 'containers/about';

import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <div>
        <div className="menu">
          <Link to="/">Home</Link>  
          <Link to="/about">About</Link> 
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
