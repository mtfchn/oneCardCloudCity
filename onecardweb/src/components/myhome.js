//该组件是‘用户’页
import React  from 'react';
import '../css/myhome.css'
import {connect} from 'react-redux'
import {
    // BrowserRouter as Router,
    // Route,
    // Link,
    NavLink,
    // Switch,
    // Redirect
} from 'react-router-dom'

const MyhomeUI = () => {
    return (
        <div id='VipContent'>
            <div className='header'>会员中心</div>
            <div className='user'>
                <NavLink to={`/my/login`} className='thisLogin'>点击登录</NavLink>
            </div>
            <div className='myOrder'>
                <i className='iconfont orderi'>&#xe69a;</i>
                <NavLink to={`/my/order`} className='thisOrder'>我的订单</NavLink>
                <NavLink to={`/my/order`} className='right'>全部订单<i className='iconfont'>&#xe686;</i></NavLink>
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
