//该组件是‘注册’页
import React, {Component} from 'react';
import '../css/regist.css'
import axios from 'axios'
import {connect} from 'react-redux'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

export default class regist extends Component {
    constructor() {
        super();
        this.regist = this.regist.bind(this);
    }

    regist() {
        var that = this;
        axios.post('/users/regist', {
            username: document.querySelector('#username').value,
            password: document.querySelector('#password').value
        })
            .then((res) => {
                console.log(res)
                if (res.data.code !== 1) {
                    alert(res.data);
                    // console.log(res.data)
                    return;
                }
                alert('注册成功')
                // console.log('注册成功')
            })

    }

    render() {
        return (
            <div id='all'>
                <div className="header">
                    <NavLink to={`/my/login`} className='back'>后退</NavLink>
                    <div className='VIPregist'>会员注册</div>
                    <div className='find'></div>
                </div>
                <div className='content'>
                    <div className='inputDiv'><input type="text" id='username' placeholder='请输入用户名'/></div>
                    <div className='inputDiv'><input type="text" id='password' placeholder='请输入密码'/></div>
                    <div className='inputDiv'><input type="text" id='passwordagain' placeholder='请再次输入密码'/></div>
                    <button onClick={() => this.regist()}>立即注册</button>
                </div>

            </div>
        )
    }
}