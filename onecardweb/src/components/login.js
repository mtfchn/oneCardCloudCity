//该组件是‘登录’页
import React, {Component} from 'react';
import '../css/login.css'
import axios from 'axios'
import {createBrowserHistory} from 'history'
import { NavLink } from 'react-router-dom'

export default class login extends Component {
    constructor() {
        super()
        this.login = this.login.bind(this)
    }

    login() {
        var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
        //登录——————————————————————————————————————————————
        axios.post('/users/login', {
            username: document.querySelector('#username').value,
            password: document.querySelector('#password').value
        })
            .then((res) => {
                if (res.data.code !== 1) {
                    alert(res.data.message);
                    return;
                }
                document.cookie = 'user=' + document.querySelector('#username').value + ';path=/';
                history.push('/my/myhome')//登录成功刷新界面
                alert('登录成功')
            })
    }

    render() {
        return (
            <div id='login'>
                <div className="header">
                    <NavLink to={`/my`} className='back'>后退</NavLink>
                    <div className='VIPlogin'>登录</div>
                    <div className='find'></div>
                </div>
                <div className='content'>
                    <div className='inputDiv'>
                        <i className='user iconfont'>&#xe612;</i>
                        <input type="text" id='username' placeholder='请输入用户名'/>
                    </div>
                    <div className='inputDiv'>
                        <i className='lock iconfont'>&#xe639;</i>
                        <input type="password" id='password' placeholder='请输入密码'/>
                    </div>
                    <button onClick={() => this.login()}>登录</button>
                    <NavLink to={`/my/regist`} className='VIPregist'>会员注册</NavLink>
                </div>
            </div>
        )
    }
}



