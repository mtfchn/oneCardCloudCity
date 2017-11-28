export default function (state = [], action) {
    switch (action.type) {
        case 'FINDORDER':
            var newstartorder = [...state]
            newstartorder = action.payload
            return newstartorder
        default:
            return state
    }
}
