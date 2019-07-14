import React from 'react';
var actions = require("../actions/actions.jsx");
var connect = require("react-redux").connect;

class Home extends React.Component{
    render(){
        if (this.props.isLogin) {
            return (
                <div>
                <br></br>
                <h1>Welcome</h1>
                </div>
            );
        }
        return (
            <div>
                <h2>Login</h2>
                <button onClick={() => this.props.login(true)}>LOGIN</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLogin: state.get("login")
    };
}

export default connect(mapStateToProps, actions)(Home);
