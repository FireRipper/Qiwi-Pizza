import {
    ALL_PRODUCTS_REMOVED_FROM_ORDER_LIST,
    PRODUCT_ADDED_TO_ORDER_LIST,
    PRODUCT_REMOVED_FROM_ORDER_LIST,
    UPDATE_COUNT_AND_TOTAL_ORDER
} from '../types'

const updateList = (list, item, idx) => {
    if (item.count === 0) {
        return [
            ...list.slice(0, idx),
            ...list.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...list,
            item
        ]
    }

    return [
        ...list.slice(0, idx),
        item,
        ...list.slice(idx + 1)
    ]
}

const updateTotal = (arr, orderList, countCost, newItem, itemIndex) => {
    if (arr.length > 0) {

        const newTotal = arr.reduce(function (prevVal, curVal) {
                return {
                    total: prevVal.total + curVal.total
                }
            }
        )
        return {
            totalPrice: newTotal.total + countCost.totalCost,
            list: updateList(orderList.list, newItem, itemIndex)
        }
    } else {
        return {
            list: updateList(orderList.list, newItem, itemIndex),
            totalPrice: countCost.totalCost
        }
    }
}

const updateListItem = (product, countProducts, item) => {

    if (item) {
        return {
            ...item,
            count: item.count + countProducts.selectedNumberValue,
            total: item.total + countProducts.totalCost
        }
    } else {
        return {
            id: product.id,
            title: product.title,
            price: countProducts.defaultCost,
            count: countProducts.selectedNumberValue,
            total: countProducts.totalCost
        }
    }
}

const updateProductOrderList = (state, action) => {

    if (state === undefined) {
        return {
            list: [],
            totalPrice: 0
        }
    }

    switch (action.type) {
    case PRODUCT_ADDED_TO_ORDER_LIST:
        const { productList: { products }, productChooseMenu: { chooseMenu }, orderList: { list } } = state

        const productId = action.payload
        const product = products.find(({ id }) => id === productId)
        const countAndCost = chooseMenu.find(({ id }) => id === productId)
        const itemIndex = list.findIndex(({ id }) => id === productId)
        const item = list[itemIndex]

        const newItem = updateListItem(product, countAndCost, item)

        return updateTotal(list, state.orderList, countAndCost, newItem, itemIndex)

    case UPDATE_COUNT_AND_TOTAL_ORDER:
        return {
            ...state.orderList
        }
    case PRODUCT_REMOVED_FROM_ORDER_LIST:
        return {
            ...state.orderList
        }
    case ALL_PRODUCTS_REMOVED_FROM_ORDER_LIST:
        return {
            ...state.orderList
        }
    default:
        return state.orderList
    }
}

export default updateProductOrderList
