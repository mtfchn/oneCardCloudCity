//从reducers/index.js中拆分出的list修改数据函数
export default function(state=[],action){
	console.log('PR::run')
	switch(action.type){
		case "PRODUCT":
			var newState = [...state]
			newState=action.payload
			console.log(newState)
			return newState
		default:
			return state
	}
}