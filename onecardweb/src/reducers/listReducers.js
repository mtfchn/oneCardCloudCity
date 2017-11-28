//从reducers/index.js中拆分出的分类页获得详细信息数据函数
export default function(state=[],action){
	switch(action.type){
		case "GET_List_DATA":
			var newState = []
			newState=action.payload
			return newState
		default:
			return state
	}
}
