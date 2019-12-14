import { CLEAR_ARRAY_CHOOSE_MENU, FILL_ARRAY_CHOOSE_MENU, SELECT_QUANTITY_PRODUCT, SELECT_WEIGHT_PRODUCT } from '../types'

const generateChooseMenu = (arrayLength) => {
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

const updateSelect = (state, action) => {
    const chooseId = action.payload
    const menuIndex = state.productChooseMenu.chooseMenu.findIndex(({ id }) => id === chooseId)
    const menuItem = state.productChooseMenu.chooseMenu[menuIndex]

    let newItem

    if (action.type === SELECT_WEIGHT_PRODUCT) {
        newItem = {
            ...menuItem,
            selectedNumberValue: 1,
            totalCost: action.value,
            defaultCost: action.value
        }
    } else {
        newItem = {
            ...menuItem,
            selectedNumberValue: action.value,
            totalCost: menuItem.defaultCost * action.value
        }
    }

    return [
        ...state.productChooseMenu.chooseMenu.slice(0, menuIndex),
        newItem,
        ...state.productChooseMenu.chooseMenu.slice(menuIndex + 1)
    ]
}

const updateProductChooseMenu = (state, action) => {
    if (state === undefined) {
        return {
            chooseMenu: [],
            numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
        }
    }

    switch (action.type) {
    case CLEAR_ARRAY_CHOOSE_MENU:
        return {
            ...state.productChooseMenu,
            chooseMenu: []
        }

    case FILL_ARRAY_CHOOSE_MENU:
        return {
            ...state.productChooseMenu,
            chooseMenu: generateChooseMenu(15)
        }
    case SELECT_QUANTITY_PRODUCT:

        return {
            ...state.productChooseMenu,
            chooseMenu: updateSelect(state, action)
        }

    case SELECT_WEIGHT_PRODUCT:

        return {
            ...state.productChooseMenu,
            chooseMenu: updateSelect(state, action)
        }

    default:
        return state.productChooseMenu
    }
}

export default updateProductChooseMenu
