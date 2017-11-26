import React from 'react'
import axios from 'axios'
import './App.css'
import './css/public.css'//公共样式
import Home from './components/Home'
import Classify from './components/Classify'
import Find from './components/Find'
import Cart from './components/Cart'
import My from './components/My'
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'


const App = () => (

    <Router>
        <div>
            <ul id='footer'>
                <li><NavLink activeClassName="autocolor" to="/home">首页</NavLink></li>
                <li><NavLink activeClassName="autocolor" to="/classify">分类</NavLink></li>
                <li><NavLink activeClassName="autocolor" to="/find">发现</NavLink></li>
                <li><NavLink activeClassName="autocolor" to="/cart">购物车</NavLink></li>
                <li><NavLink activeClassName="autocolor" to="/my">我的</NavLink></li>
            </ul>


            <Switch>
                <Redirect exact from='/' to='/home'/>
                <Route exact path="/home" component={Home}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/find" component={Find}/>
                <Route path="/classify" component={Classify}/>
                <Route path="/my" component={My}/>
            </Switch>
        </div>
    </Router>
)
export default App