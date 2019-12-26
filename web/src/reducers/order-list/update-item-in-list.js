import updateList from './update-list'

const updateItemInList = (orderList, listId, radioEvent) => {
    const itemIndex = orderList.list.findIndex(({ id }) => id === listId)
    const item = orderList.list[itemIndex]

    const newItem = {
        ...item,
        currentValue: radioEvent
    }

    return {
        ...orderList,
        list: updateList(orderList.list, newItem, itemIndex)
    }
}

export {
    updateItemInList
}
