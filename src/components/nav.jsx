import React from 'react';
import {Link, BrowserRouter}  from 'react-router-dom';

export default class Nav extends React.Component{
    render(){
        return <div>
            <Link to="/"> Start </Link>
            <Link to="/main"> Main </Link>
            <Link to="/about"> About </Link>
        </div>;
    }
}
