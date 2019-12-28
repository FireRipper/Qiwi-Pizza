import updateList from './update-list'

const removeProductFromList = (state, productId) => {
    const { list, totalPrice } = state

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
        totalPrice: totalPrice - item.total,
        list: updateList(list, newItem, itemIndex)
    }
}

export default removeProductFromList
