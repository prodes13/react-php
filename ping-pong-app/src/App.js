import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './css/tailwind.css';
import Login from './Login';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="bg-gray-300 h-screen">
          <Route path='/login' component={Login} />
        </div>
      </Router>
    );
  }
}

export default App;
