//从src/index.js中拆分出的reducers
import listReducers from './listReducers'
import productReducers from './productReducers'
import {combineReducers} from 'redux'
import findCookie from "./findCookie";
import cookieName from "./cookieName";
import classifyRender from "./classifyRender";
import findcommodity from "./findcommodity";
import findOrder from "./findOrder";

const reducers = combineReducers({
    list: listReducers,//拆分函数
    product: productReducers,//主页商品
    cookie: findCookie,//判定是否登录
    cookiename: cookieName,//取登录名
    classify: classifyRender,//分类页
    commodity: findcommodity,//取购物车商品
    order: findOrder,//取订单页商品
})

export default reducers