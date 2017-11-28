//从reducers/index.js中拆分出的classfy修改数据函数
export default function(state=[],action){
	// console.log(action.payload)
	switch(action.type){
		case "GET_List":
			var newState = [...state]
			newState.push(action.payload)
			return newState
		default:
			return state
	}
}
