import updateList from './update-list'

const updateCountAndTotalInList = (orderList, fieldId, quantity) => {
    const itemIndex = orderList.list.findIndex(({ id }) => id === fieldId)
    const item = orderList.list[itemIndex]

    let newItem

    if (item.currentValue === item.smPrice && item.smCount > 0) {
        newItem = {
            ...item,
            smCount: item.smCount + quantity,
            count: item.count + quantity,
            total: item.total + item.currentValue * quantity
        }

    } else if (item.currentValue === item.mdPrice && item.mdCount > 0) {
        newItem = {
            ...item,
            mdCount: item.mdCount + quantity,
            count: item.count + quantity,
            total: item.total + item.currentValue * quantity
        }

    } else if (item.currentValue === item.lgPrice && item.lgCount > 0) {
        newItem = {
            ...item,
            lgCount: item.lgCount + quantity,
            count: item.count + quantity,
            total: item.total + item.currentValue * quantity
        }
    } else {
        return {
            ...orderList
        }
    }

    return {
        list: updateList(orderList.list, newItem, itemIndex),
        totalPrice: orderList.totalPrice + item.currentValue * quantity
    }
}

export {
    updateCountAndTotalInList
}
