import listReducers from './listReducers'
import {combineReducers} from 'redux'

const reducers = combineReducers({
	list:listReducers
})

export default reducers