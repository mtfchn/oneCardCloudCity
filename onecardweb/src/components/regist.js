//该组件是‘注册’页
import React, {Component} from 'react';
import '../css/regist.css'
import axios from 'axios'
import {createBrowserHistory} from 'history'
import {NavLink} from 'react-router-dom'

export default class regist extends Component {
    constructor() {
        super();
        this.regist = this.regist.bind(this);
    }

    regist() {
        //注册——————————————————————————————————————————————————————————
        var history = createBrowserHistory({
            basename: '', // 基链接
            forceRefresh: true, // 是否强制刷新整个页面
            keyLength: 6, // location.key的长度
            getUserConfirmation: (message, callback) => callback(window.confirm(message)) // 跳转拦截函数
        })
        if(document.querySelector('#username').value.length < 6){
            alert('用户名长度要大于等于6位');
            return;
        }
        if(document.querySelector('#password').value.length < 6){
            alert('密码长度要大于等于6位');
            return;
        }
        if(document.querySelector('#password').value !== document.querySelector('#passwordagain').value){
            alert('两次输入的密码不一致');
            return;
        }
        axios.post('/users/regist', {
            username: document.querySelector('#username').value,
            password: document.querySelector('#password').value
        })
            .then((res) => {
                if (res.data.code !== 1) {
                    alert(res.data);
                    return;
                }
                history.push('/my/login')//注册成功跳转到登录页
                alert('注册成功')
            })

    }

    render() {
        return (
            <div id='regist'>
                <div className="header">
                    <NavLink to={`/my/login`} className='back iconfont'>&#xe50d;</NavLink>
                    <div className='VIPregist'>会员注册</div>
                    <div className='find iconfont'>&#xe60b;</div>
                </div>
                <div className='content'>
                    <div className='inputDiv'>
                        <i className='user iconfont'>&#xe612;</i>
                        <input type="text" id='username' placeholder='请输入用户名'/>
                        <i className='erweima iconfont'>&#xe642;</i>
                    </div>
                    <div className='inputDiv'>
                        <i className='lock iconfont'>&#xe639;</i>
                        <input type="password" id='password' placeholder='请输入密码'/>
                    </div>
                    <div className='inputDiv'>
                        <i className='lock iconfont'>&#xe690;</i>
                        <input type="password" id='passwordagain' placeholder='请再次输入密码'/>
                    </div>
                    <button onClick={() => this.regist()}>立即注册</button>
                </div>

            </div>
        )
    }
}