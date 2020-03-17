import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Add from './Add';
import Listing from './Listing';

function Index() {
    return (
        <Router>
            <div>
                <Link to='/category'>Listing</Link>
                <Link to='/category/add'>Add</Link>
                <Route exact path="/category" component={Listing} />
                <Route exact path="/category/add" component={Add} />
            </div>
        </Router>
    );
}

export default Index;