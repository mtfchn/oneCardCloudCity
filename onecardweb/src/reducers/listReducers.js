export default function(state=[],action){
	switch(action.type){
		case "ADD_TODO":
			var newState = [...state]
			newState.push(action.payload)
			return newState
		default:
			return state
	}
}
