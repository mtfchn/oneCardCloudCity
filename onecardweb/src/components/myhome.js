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
            <div>会员中心</div>
            <div>
                <div>这里是头像</div>
                <NavLink to={`/my/login`}>点击登录</NavLink>
            </div>
            <div>
                <NavLink to={`/my/order`}>我的订单</NavLink>
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
