import updateList from './update-list'

const updateValueRadioBtnInList = (orderList, listId, radioEvent) => {
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


export default updateValueRadioBtnInList
