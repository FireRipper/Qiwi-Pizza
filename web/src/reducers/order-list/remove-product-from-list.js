import updateList from './update-list'

const removeProductFromList = (state, productId) => {
    const { list, totalPrice, totalItems } = state

    const itemIndex = list.findIndex(({ id }) => id === productId)
    const item = list[itemIndex]

    const newItem = {
        ...item,
        smCount: item.smCount - item.smCount,
        mdCount: item.mdCount - item.mdCount,
        lgCount: item.lgCount - item.lgCount,
        count: item.count - item.count
    }

    return {
        totalItems: totalItems - item.count,
        totalPrice: totalPrice - item.total,
        list: updateList(list, newItem, itemIndex),
    }
}

export default removeProductFromList
