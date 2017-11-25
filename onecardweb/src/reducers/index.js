//从src/index.js中拆分出的reducers
import listReducers from './listReducers'
import productReducers from './productReducers'
import {combineReducers} from 'redux'

const reducers = combineReducers({
	list:listReducers,//拆分函数
	product:productReducers
})

export default reducers