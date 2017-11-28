//该组件是‘我的’子路由页
import React from 'react';
import '../css/public.css'
import Login from './login'
import Regist from './regist'
import Order from './order'
import Myhome from './myhome'
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

const MyUI = () => {
    return (
        <div>
            <Router>
                <div>
	                <Switch>
	                    <Redirect exact from={`/my`} to={`/my/myhome`}/>{/*重定向到myhome页*/}
	                    <Route path={`/my/myhome`} component={Myhome}/>
	                    <Route path={`/my/regist`} component={Regist}/>
                        <Route path={`/my/login`} component={Login}/>
                        <Route path={`/my/order`} component={Order}/>
	                </Switch>
                </div>
            </Router>
        </div>
    )
}

export default MyUI;
