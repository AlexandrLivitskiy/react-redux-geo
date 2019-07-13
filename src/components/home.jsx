import React from 'react';
var connect = require("react-redux").connect;

class Home extends React.Component{
    render(){
        if (this.props.login) {
            return (
                <div>
                <h2>Welcome this.props.login = {this.props.login} </h2>
                {this.props.markers.map(item => <h3> {item} </h3>)}
                </div>
            );
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
