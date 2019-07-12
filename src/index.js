import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
var redux = require("redux");
var Provider = require("react-redux").Provider;
var reducer = require("./reducer.jsx");

var store = redux.createStore(reducer);

store.dispatch({
    type: "SET_STATE",
    state: {
        markers: [ "Marker1", "Marker2", "Marker3" ],
        login: true
    }
});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
  document.getElementById('root')
);
