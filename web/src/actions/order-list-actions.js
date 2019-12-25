import {
    PRODUCT_ADDED_TO_ORDER_LIST, ALL_PRODUCTS_REMOVED_FROM_ORDER_LIST,
    PRODUCT_REMOVED_FROM_ORDER_LIST, UPDATE_COUNT_AND_TOTAL_ORDER
} from '../types'

const productAddedToOrderList = (productId) => {
    return {
        type: PRODUCT_ADDED_TO_ORDER_LIST,
        payload: productId
    }
}

const allProductsRemovedFromOrderList = (productId) => {
    return {
        type: ALL_PRODUCTS_REMOVED_FROM_ORDER_LIST,
        payload: productId
    }
}

const productRemovedFromOrderList = (productId) => {
    return {
        type: PRODUCT_REMOVED_FROM_ORDER_LIST,
        payload: productId
    }
}

const updateCountAndTotalOrder = (productId) => {
    return {
        type: UPDATE_COUNT_AND_TOTAL_ORDER,
        payload: productId
    }
}

export {
    productAddedToOrderList,
    allProductsRemovedFromOrderList,
    productRemovedFromOrderList,
    updateCountAndTotalOrder
}
