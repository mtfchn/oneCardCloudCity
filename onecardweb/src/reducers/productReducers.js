//从reducers/index.js中拆分出的list修改数据函数
export default function(state=[],action){
	switch(action.type){
		case "PRODUCT":
			var newState = [...state]
			newState.push(action.payload)
			return newState
		default:
			return state
	}
}
