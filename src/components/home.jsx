import React from 'react';
var connect = require("react-redux").connect;

class Home extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        if (this.props.login) {
            return <h2>Welcome this.props.login = {this.props.login} </h2>;
        }
        return <h2>Start this.props.login = {this.props.login} </h2>;
    }
}

function mapStateToProps(state) {
    return {
        markers: state.get("markers"),
        login: state.get("login")
    };
}

module.exports = connect(mapStateToProps)(Home);
