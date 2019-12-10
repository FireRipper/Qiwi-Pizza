const initialState = {
    products: [],
    loading: true,
    selectedNumberValue: 0,
    totalCost: 0,
    defaultCost: 0,
    selectValue: 'Выберите...',
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    error: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'PRODUCTS_REQUESTED':
        return {
            ...state,
            products: [],
            loading: true,
        }
    case 'PRODUCTS_LOADED':
        return {
            ...state,
            products: action.payload,
            loading: false
        }
    case 'PRODUCTS_FETCH_ERROR':
        return {
            ...state,
            products: [],
            loading: false,
            error: action.payload
        }
    default:
        return state
    }
}

export default productReducer
