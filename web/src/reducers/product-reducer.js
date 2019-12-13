import {
    FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS,
    FETCH_PRODUCTS_FAILURE, CLEAR_ARRAY_CHOOSE_MENU,
    FILL_ARRAY_CHOOSE_MENU, SELECT_WEIGHT_PRODUCT,
    SELECT_QUANTITY_PRODUCT
} from '../types'

const initialState = {
    products: [],
    loading: true,
    chooseMenu: [],
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    error: null
}

const updateChooseMenu = (chooseMenu, newItem, itemIndex) => {
    return [
        ...chooseMenu.slice(0, itemIndex),
        newItem,
        ...chooseMenu.slice(itemIndex + 1)
    ]
}

const generateChooseMenu = ( arrayLength ) => {
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

    return filledArray
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
        return {
            ...state,
            chooseMenu: generateChooseMenu(15)
        }

    case SELECT_QUANTITY_PRODUCT:
        const chooseId = action.payloadQuantity
        const menuIndex = state.chooseMenu.findIndex(({ id }) => id === chooseId)
        const menuItem = state.chooseMenu[menuIndex]

        const newQuantity = {
            ...menuItem,
            selectedNumberValue: action.valueQuantity,
            totalCost: menuItem.defaultCost * action.valueQuantity
        }

        return {
            ...state,
            chooseMenu: updateChooseMenu(state.chooseMenu, newQuantity, menuIndex)
        }

    case SELECT_WEIGHT_PRODUCT:
        const menuId = action.payloadWeight
        const itemIndex = state.chooseMenu.findIndex(({ id }) => id === menuId)
        const item = state.chooseMenu[itemIndex]

        const newMenu = {
            ...item,
            selectedNumberValue: 1,
            totalCost: action.valueWeight,
            defaultCost: action.valueWeight
        }

        return {
            ...state,
            chooseMenu: updateChooseMenu(state.chooseMenu, newMenu, itemIndex)
        }
    default:
        return state
    }
}

export default productReducer
