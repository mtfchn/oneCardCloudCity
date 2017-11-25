//该组件是‘我的’页
import React, {Component} from 'react';
import '../css/public.css'
import {connect} from 'react-redux'
import Login from './login'
import Regist from './regist'
import Myhome from './myhome'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'

const MyUI = ({match}) => {
    return (
        <div>
            <Router>
                <div>
                    <Redirect exact from={`${match.url}/`} to={`${match.url}/myhome`}/>
                    <Route path={`${match.url}/myhome`} component={Myhome}/>
                    <Route path={`/my/regist`} component={Regist}/>
                    <Route path={`/my/login`} component={Login}/>
                </div>
            </Router>
        </div>
    )
}

export default MyUI;
