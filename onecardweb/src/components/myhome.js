//该组件是‘用户’页
import React from 'react';
import '../css/myhome.css'
import {connect} from 'react-redux'
import axios from 'axios'
import {createBrowserHistory} from 'history'
import {
    // BrowserRouter as Router,
    // Route,
    // Link,
    NavLink,
    // Switch,
    // Redirect
} from 'react-router-dom'

class MyhomeUI extends React.Component {
    componentDidMount() {
        this.props.getData();//刷新页面取cookie
        this.props.getName();//刷新页面取username
        this.drop = this.drop.bind(this);
    }

    drop() {
        var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
        axios.post('/users/quit')
        //注销登录，清除cookie
            .then((res) => {
                var now = new Date();
                now.setDate(now.getDate() - 1);
                setCookie('user', '', now, '/');

                function setCookie(name, value, expires, path) {
                    var str = window.encodeURIComponent(name) + '=' + window.encodeURIComponent(value);
                    if (expires) {
                        str += ';expires=' + (new Date(expires));
                    }
                    if (path) {
                        str += ';path=' + path;
                    }
                    document.cookie = str;

                }

                history.push('/my/myhome')//退出成功刷新页面
                alert('退出成功')
            })
    }

    render() {
        var list = '';//判定是否登录而产生不同页面，未登录返回code为100，登录返回的code为1
        if (this.props.product === 100) {
            list = (
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

        } else {
            list = (
                <div id='VipContent'>
                    <div className='header'>会员中心</div>
                    <div className='user'>
                        <div className='thisLogin'>欢迎您：{this.props.cookieName}</div>
                        <button onClick={() => this.drop()} className='drop'>注销</button>
                    </div>
                    <div className='myOrder'>
                        <i className='iconfont orderi'>&#xe69a;</i>
                        <NavLink to={`/my/order`} className='thisOrder'>我的订单</NavLink>
                        <NavLink to={`/my/order`} className='right'>全部订单<i className='iconfont'>&#xe686;</i></NavLink>
                    </div>
                </div>
            )
        }
        return (
            <div>
                {list}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        product: state.cookie,//返回判定是否存在cookie的code
        cookieName: state.cookiename//返回的username
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //判定是否登录
        getData: function () {
            axios.get('/users/findCookie')
                .then((res) => {
                    dispatch({
                        type: 'FINDCOOKIE',
                        payload: res.data.code
                    })
                })
        },
        //登录后返回username
        getName: function () {
            function getCookie(name) {
                // var cookie = document.cookie;
                var arr = document.cookie.split('; ');
                var name_value;
                for (var i = 0; i < arr.length; i++) {
                    name_value = arr[i].split('=');
                    if (name_value[0] === name) {
                        return name_value[1];
                    }
                }
                return null;
            }

            if (getCookie('user') === null) {
                return
            }
            dispatch({
                type: 'COOKIENAME',
                payload: getCookie('user')
            })
        }
    }
}

const Myhome = connect(mapStateToProps, mapDispatchToProps)(MyhomeUI);


export default Myhome;
