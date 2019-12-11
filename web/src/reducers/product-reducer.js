const initialState = {
    products: [],
    loading: true,
    chooseMenu: [],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    error: null
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
    case 'FETCH_PRODUCTS_REQUEST':
        return {
            ...state,
            products: [],
            loading: true,
        }
    case 'FETCH_PRODUCTS_SUCCESS':
        return {
            ...state,
            products: action.payload,
            loading: false
        }
    case 'FETCH_PRODUCTS_FAILURE':
        return {
            ...state,
            products: [],
            loading: false,
            error: action.payload
        }
    case 'CLEAR_ARRAY_CHOOSE_MENU':
        return {
            ...state,
            chooseMenu: []
        }
    case 'FILL_ARRAY_CHOOSE_MENU':
        const arrayLength = 15

        let filledArray = new Array(arrayLength)
        for (let i = 0; i < arrayLength; i++) {
            filledArray[i] = {
                id: i,
                selectedNumberValue: 0,
                totalCost: 0,
                defaultCost: 0,
                selectValue: 'Выберите...'
            }
        }

        return {
            ...state,
            chooseMenu : filledArray
        }
    default:
        return state
    }
}

export default productReducer
