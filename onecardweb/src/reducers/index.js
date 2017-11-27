//从src/index.js中拆分出的reducers
import listReducers from './listReducers'
import productReducers from './productReducers'
import {combineReducers} from 'redux'
import findCookie from "./findCookie";
import cookieName from "./cookieName";

const reducers = combineReducers({
    list: listReducers,//拆分函数
    product: productReducers,
    cookie: findCookie,//判定是否登录
    cookiename: cookieName,//取登录名
})

export default reducers