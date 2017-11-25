//从reducers/index.js中拆分出的list修改数据函数
export default function(state=[],action){
	console.log('LR::run')
	switch(action.type){
		case "ADD_TODO":
			var newState = [...state]
			newState.push(action.payload)
			return newState
		default:
			return state
	}
}
