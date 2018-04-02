import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from "./components/News";
import Sitenavigation from "./components/Sitenavigation";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Sitenavigation />
          <Route exact path='/' component={Home} />
          <Route path="/About" component={About} />
          <Route path="/News" component={News} />
        </div>
      </Router>
      
    );
  }
}

export default App;
