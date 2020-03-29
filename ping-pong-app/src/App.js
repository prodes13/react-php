import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './css/tailwind.css';
import Login from './Login';
import Register from './Register';
import Profile from './Profile';  
import GuestRoute from './components/GuestRoute';
import AuthRoute from './components/AuthRoute';
import Layout from './components/Layout';


class App extends Component {

  render() {
    return (
      <Router>
        <Layout>
          <div className="bg-gray-300 h-screen">
            <GuestRoute path='/login' component={Login} />
            <GuestRoute path='/register' component={Register} />
            <AuthRoute path='/profile' component={Profile} />
          </div>
        </Layout>
      </Router>
    );
  }
}

export default App;
