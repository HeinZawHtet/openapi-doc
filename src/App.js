import React, { Component } from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Home from './pages/Home.js';
import Preview from './pages/Preview.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/preview" component={Preview} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
