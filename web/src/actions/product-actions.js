import {
    FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST,
    FETCH_PRODUCTS_FAILURE, FILL_ARRAY_CHOOSE_MENU,
    CLEAR_ARRAY_CHOOSE_MENU, SELECT_WEIGHT_PRODUCT,
    SELECT_QUANTITY_PRODUCT
} from '../types'

const productsLoaded = (newProducts) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: newProducts
    }
}

const productsRequested = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

const productsFetchError = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

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
        payloadWeight: menuId,
        valueWeight: val
    }
}

const selectQuantityProduct = (menuId, val) => {
    return {
        type: SELECT_QUANTITY_PRODUCT,
        payloadQuantity: menuId,
        valueQuantity: val
    }
}

// 1, - receive data
// 2. - dispatch action to store
const fetchProducts = (productService, dispatch) => () => {
    dispatch(clearArrayChooseMenu())
    dispatch(fillArrayChooseMenu())
    dispatch(productsRequested())
    productService.getAllPizza()
        .then((data) => {
            dispatch(productsLoaded(data))
        })
        .catch((err) => {
            dispatch(productsFetchError(err))
        })
}

export {
    fetchProducts,
    selectWeightProduct,
    selectQuantityProduct
}
