import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
var redux = require("redux");
var Provider = require("react-redux").Provider;
var reducer = require("./reducer.jsx");

let store = redux.createStore(reducer);

store.dispatch({
    type: "SET_STATE",
    state: {
        showedMarkers: [],
        savedMarkers: [],
        pharmacies: [],
        gas: [],
        schools: [],
        restaurants: [],
        login: false,
        map: {
            zoom: 12,
            geo: [51, 0],
            location: [46.4782, 30.7399]
        }
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
