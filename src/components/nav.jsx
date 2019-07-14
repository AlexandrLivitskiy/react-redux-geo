import React from 'react';
import {Link} from 'react-router-dom';
var actions = require("../actions/actions.jsx");
var connect = require("react-redux").connect;

class Nav extends React.Component {
    render() {
        if (this.props.isLogin) {
            return (
                <div>
                    <Link to="/" className="nav-link">Start</Link>
                    <Link to="/main" className="nav-link">Main</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/" className="nav-link" onClick={() => this.props.login(false)}>Logout</Link>
                </div>
        )}
        return (
            <div>
                <Link to="/" className="nav-link">Start</Link>
                <Link to="/main" className="nav-link">Main</Link>
                <Link to="/about" className="nav-link">About</Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.get("login")
    };
}

export default connect(mapStateToProps, actions)(Nav);
