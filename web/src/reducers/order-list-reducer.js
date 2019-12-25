import {
    ALL_PRODUCTS_REMOVED_FROM_ORDER_LIST,
    PRODUCT_ADDED_TO_ORDER_LIST,
    PRODUCT_REMOVED_FROM_ORDER_LIST,
    UPDATE_COUNT_AND_TOTAL_ORDER
} from '../types'

const updateList = (List, item, idx) => {
    if (idx === -1) {
        return [
            ...List,
            item
        ]
    }

    return [
        ...List.slice(0, idx),
        item,
        ...List.slice(idx + 1)
    ]
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
            smallPrice: 0,
            middlePrice: 0,
            largePrice: 0,
            count: countProducts.selectedNumberValue,
            total: countProducts.totalCost
        }
    }
}

const updateProductOrderList = (state, action) => {

    if (state === undefined) {
        return {
            list: [],
            total: 0
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

        let newItem = updateListItem(product, countAndCost, item)

        return {
            ...state.orderList,
            list: updateList(state.orderList.list, newItem, itemIndex)
        }
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
