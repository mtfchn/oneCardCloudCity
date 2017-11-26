//该组件是‘订单’页
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
            <div className="header">
                <NavLink to={`/my`}>后退</NavLink>
                <div>订单页</div>
                <div></div>
            </div>
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
