//该组件是‘我的’子路由页
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

const MyUI = () => {
    return (
        <div>
            <Router>
                <div>
	                <Switch>
	                    <Redirect exact from={`/my`} to={`/my/myhome`}/>
	                    <Route path={`/my/myhome`} component={Myhome}/>
	                    <Route path={`/my/regist`} component={Regist}/>
	                    <Route path={`/my/login`} component={Login}/>
	                </Switch>
                </div>
            </Router>
        </div>
    )
}

export default MyUI;
