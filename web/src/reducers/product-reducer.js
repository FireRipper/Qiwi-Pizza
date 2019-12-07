
const initialState = {
    data: []
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'DATA_LOADED':
        return {
            data: action.payload
        }
    default:
        return state
    }
}

export default productReducer
