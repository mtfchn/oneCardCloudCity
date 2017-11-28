//从reducers/index.js中拆分出的存储首页获取商品信息函数
export default function (state = [], action) {
    // console.log('PR::run')
    // var starts = state;
    // console.log(starts)
    switch (action.type) {
        case "PRODUCT":
            var newState = [...state]
            newState = action.payload
            // console.log(newState)
            return newState
        case "GET_DETAIL":
            var newStateNew = [...state]
            newStateNew = action.payload
            // console.log(newState)
            return newStateNew
        default:
            return state
    }
}
