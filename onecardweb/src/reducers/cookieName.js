export default function (state = [], action) {
    switch (action.type) {
        case 'COOKIENAME':
            var newStateName = [...state]
            newStateName = action.payload
            return newStateName
        default:
            return state
    }
}