//该组件是‘登录’页
import React, {Component} from 'react';
// import styles from '../css/login.css'
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
            <div id='all'>
                <div className="header">
                    <NavLink to={`/my`} className='back'>后退</NavLink>
                    <div className='VIPlogin'>登录</div>
                    <div className='find'></div>
                </div>
                <div className='content'>
                    <div className='inputDiv'><input type="text" id='username' placeholder='请输入用户名'/></div>
                    <div className='inputDiv'><input type="text" id='password' placeholder='请输入密码'/></div>

                    <button onClick={() => this.login()}>登录</button>
                    <NavLink to={`/my/regist`} className='VIPregist'>会员注册</NavLink>
                </div>
            </div>
        )
    }
}


