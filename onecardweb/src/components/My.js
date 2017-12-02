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

const MyUI = (props)=>{
	return(
		<div>
           {
         	props.children
           }
        </div>
	)
}

export default MyUI;
