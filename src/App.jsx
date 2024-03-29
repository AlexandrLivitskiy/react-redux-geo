import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/nav.jsx';
import Home from './components/home.jsx';
import Main from './components/main.jsx';
import About from './components/about.jsx';
import NotFound from './components/notfound.jsx';
var connect = require("react-redux").connect;
var actions = require("./actions/actions.jsx");
import { withRouter } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React Redux Geo</h2>
        </div>
          <div>
              <Nav />
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/main" component={Main} />
                  <Route path="/about" component={About} />
                  <Route component={NotFound} />
              </Switch>
          </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        markers: state.get("markers"),
        login: state.get("login")
    };
}

export default withRouter(connect(mapStateToProps, actions)(App));
