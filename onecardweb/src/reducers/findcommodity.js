export default function (state = [], action) {
    switch (action.type) {
        case 'FINDCOMMODITY':
            var newstatecart = [...state]
            newstatecart = action.payload
            return newstatecart
        default:
            return state
    }
}
