import React from 'react'
import './App.css'
import './css/public.css'//公共样式
import Home from './components/Home'
import Classify from './components/Classify'
import Cart from './components/Cart'
import My from './components/My'
import Detail from './components/Detail'
import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch,
    Redirect
} from 'react-router-dom'


const App = () => (

    <Router>
        <div>
            <ul id='footer'>
                <li><NavLink activeClassName="autocolor" to="/home"><p><i className="iconfont">&#xe6bc;</i></p>首页</NavLink></li>
                <li><NavLink activeClassName="autocolor" to="/classify"><p><i className="iconfont">&#xe603;</i></p>分类</NavLink></li>
                <li><NavLink activeClassName="autocolor" to="/cart"><p><i className="iconfont">&#xf0148;</i></p>购物车</NavLink></li>
                <li><NavLink activeClassName="autocolor" to="/my"><p><i className="iconfont">&#xe612;</i></p>我的</NavLink></li>
            </ul>


            <Switch>
                <Redirect exact from='/' to='/home'/>
                <Route exact path="/home" component={Home}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/classify" component={Classify}/>
                <Route path="/my" component={My}/>
                <Route path="/detail/:productid" component={Detail}/>               
            </Switch>
        </div>
    </Router>
)
export default App