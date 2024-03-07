// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'; // Assuming you have an App component
import Resume from './Resume';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/resume" component={Resume} />
        <Route path="/" component={App} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
