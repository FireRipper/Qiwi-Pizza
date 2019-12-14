import {
    CLEAR_ARRAY_CHOOSE_MENU,
    FILL_ARRAY_CHOOSE_MENU,
    SELECT_QUANTITY_PRODUCT,
    SELECT_WEIGHT_PRODUCT
} from '../types'

const fillArrayChooseMenu = () => {
    return {
        type: FILL_ARRAY_CHOOSE_MENU
    }
}

const clearArrayChooseMenu = () => {
    return {
        type: CLEAR_ARRAY_CHOOSE_MENU
    }
}

const selectWeightProduct = (menuId, val) => {
    return {
        type: SELECT_WEIGHT_PRODUCT,
        payload: menuId,
        value: val
    }
}

const selectQuantityProduct = (menuId, val) => {
    return {
        type: SELECT_QUANTITY_PRODUCT,
        payload: menuId,
        value: val
    }
}

export {
    fillArrayChooseMenu,
    clearArrayChooseMenu,
    selectWeightProduct,
    selectQuantityProduct
}
