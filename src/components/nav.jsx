import React from 'react';
import {Link}  from 'react-router-dom';

export default class Nav extends React.Component{
    render(){
        return <div>
            <Link to="/" class="nav-link">Start</Link>
            <Link to="/main" class="nav-link">Main</Link>
            <Link to="/about" class="nav-link">About</Link>
        </div>;
    }
}
