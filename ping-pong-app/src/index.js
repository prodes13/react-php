import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import cookie from 'js-cookie';

import store from './store/index';
import { Provider } from 'react-redux';

const token = cookie.get("token");
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
