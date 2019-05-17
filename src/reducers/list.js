function list(state = {
    loading: true,
    data: [],
}, action) {
    switch (action.type) {
        case "LIST_UPDATE":
            return {
                loading: true,
                data: state.data
            }
        case "LIST_UPDATA_SUCC":
            return {
                loading: false,
                data: action.data.data
            }
        case "LIST_UPDATA_ERROR":
            return {
                loaidng: false,
                data: []
            }
        default:
            return state;
    }
}


export default list;