//该组件是‘登录’页
import React, {Component} from 'react';
import '../css/public.css'
import {connect} from 'react-redux'
import Regist from './regist'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

const LoginUI = () => {
    return (
        <div className="My">
            {'my我的组件'}
            登录也
            <NavLink to={`/my/regist`}>regist</NavLink>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginUI);


export default Login;
