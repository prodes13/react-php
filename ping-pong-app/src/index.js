import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import cookie from 'js-cookie';
import jwt from 'jsonwebtoken';

import store from './store/index';
import { Provider } from 'react-redux';

const jwtSecret = 'XhcACDn7ltjUZYSdxlN2JFduPnk8Ru9eYdvtq9qyBiq4zofiO8U8HleRpUgdq5cK';
let token = cookie.get("token");

function removeToken() {
    token = null;
    cookie.remove("token");
}

if(token) {
    jwt.verify(token, jwtSecret, (err, decoded) => {
        if(err) {
            removeToken();
        } else {
            if(decoded.iss !== 'http://localhost:8000/api/auth/login') {
                removeToken();
            }
        }
    })
}

axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axios.post('http://localhost:8000/api/auth/me')
    .then(res => {
        store.dispatch({ type: "SET_LOGIN", payload: res.data})
    });

ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
