import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Category from './category/Index';


function Header() {
    return (
        <Router>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/category">Categories</Link>
            <Link to="/category/add">Add category</Link>
            
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Category />
        </Router>
        );
}

export default Header;