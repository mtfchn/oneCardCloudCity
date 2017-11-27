export default function (state = [], action) {
    switch (action.type) {
        case 'FINDCOOKIE':
            var newStateCookie = [...state]
            newStateCookie = action.payload
            return newStateCookie
        default:
            return state
    }
}
