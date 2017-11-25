//该组件是‘用户’页
import React, {Component} from 'react';
import '../css/public.css'
import {connect} from 'react-redux'
import Login from './login'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

const MyhomeUI = () => {
    return (
        <div className="My">
            {'my我的组件'}
            用户也
            <NavLink to={`/my/login`}>login</NavLink>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const Myhome = connect(mapStateToProps, mapDispatchToProps)(MyhomeUI);


export default Myhome;
