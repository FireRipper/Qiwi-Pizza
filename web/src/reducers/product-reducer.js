import {
    FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE, CLEAR_ARRAY_CHOOSE_MENU,
    FILL_ARRAY_CHOOSE_MENU, SELECT_WEIGHT_PRODUCT
} from '../types'

const initialState = {
    products: [],
    loading: true,
    chooseMenu: [],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    error: null
}

const productReducer = (state = initialState, action) => {

    switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
        return {
            ...state,
            products: [],
            loading: true
        }
    case FETCH_PRODUCTS_SUCCESS:
        return {
            ...state,
            products: action.payload,
            loading: false
        }
    case FETCH_PRODUCTS_FAILURE:
        return {
            ...state,
            products: [],
            loading: false,
            error: action.payload
        }
    case CLEAR_ARRAY_CHOOSE_MENU:
        return {
            ...state,
            chooseMenu: []
        }
    case FILL_ARRAY_CHOOSE_MENU:
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
            chooseMenu: filledArray
        }
    case SELECT_WEIGHT_PRODUCT:
        const { payload, value } = action
        const menuId = payload
        const menu = state.chooseMenu.find((menu) => menuId === menu.id)
        const itemIndex = state.chooseMenu.findIndex(({ id }) => id === menuId)
        const item = state.chooseMenu[itemIndex]
        let newMenu

        if (item) {
            newMenu = {
                ...item,
                selectedNumberValue: 1,
                totalCost: value,
                defaultCost: value
            }
        } else {
            newMenu = {
                id: menu.id,
                selectedNumberValue: 1,
                totalCost: value,
                defaultCost: value
            }
        }

        if (itemIndex < 0) {
            return {
                ...state,
                chooseMenu: [
                    ...state.chooseMenu,
                    newMenu
                ]
            }
        } else {
            return {
                ...state,
                chooseMenu: [
                    ...state.chooseMenu.slice(0, itemIndex),
                    newMenu,
                    ...state.chooseMenu.slice(itemIndex + 1)
                ]
            }
        }


    default:
        return state
    }
}

export default productReducer
