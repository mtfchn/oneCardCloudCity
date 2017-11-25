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

const MyUI = () => {
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

const My = connect(mapStateToProps, mapDispatchToProps)(MyUI);


export default My;
