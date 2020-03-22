import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './css/tailwind.css';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';  
import GuestRoute from './components/GuestRoute';
import AuthRoute from './components/AuthRoute';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="bg-gray-300 h-screen">
          <GuestRoute path='/login' component={Login} />
          <GuestRoute path='/register' component={Register} />
          <AuthRoute path='/profile' component={Profile} />
        </div>
      </Router>
    );
  }
}

export default App;
