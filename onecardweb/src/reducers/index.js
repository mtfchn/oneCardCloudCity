//从src/index.js中拆分出的reducers
import listReducers from './listReducers'
import {combineReducers} from 'redux'

const reducers = combineReducers({
	list:listReducers//拆分函数
})

export default reducers