//该组件是‘登录’页
import React, {Component} from 'react';
import '../css/public.css'
import {connect} from 'react-redux'
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

export default class login extends Component {
    constructor(){
        super()
        this.login = this.login.bind(this)
    }
    login(){
        var that = this;
        axios.post('/users/login', {
            username: document.querySelector('#username').value,
            password: document.querySelector('#password').value
        })
            .then((res) => {
                console.log(res)
                if (res.data.code !== 1) {
                    alert(res.data.message);
                    // console.log(res.data.message)
                    return;
                }
                alert('登录成功')
                // console.log('登录成功')
            })
    }
    render(){
        return(
            <div>
                <div className="header">
                    <NavLink to={`/my`}>后退</NavLink>
                    <div>登录</div>
                    <div></div>
                </div>
                <div className='content'>
                    <input type="text" id='username' placeholder='请输入用户名'/><br/>
                    <input type="text" id='password' placeholder='请输入密码'/><br/>

                    <button onClick={() => this.login()}>登录</button>
                    <NavLink to={`/my/regist`}>会员注册</NavLink>
                </div>
            </div>
        )
    }
}



