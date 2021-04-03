import { FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_FAILURE } from '../types'
import { clearArrayChooseMenu, fillArrayChooseMenu } from './choose-menu-actions'

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
}
