import updateList from './update-list'

const updateTotal = (orderList, countCost, newItem, itemIndex) => {
    if (orderList.list.length > 0) {

        const newTotal = orderList.list.reduce(function (prevVal, curVal) {
                return {
                    total: prevVal.total + curVal.total,
                    count: prevVal.count + curVal.count
                }
            }
        )
        return {
            totalItems: newTotal.count + countCost.selectedNumberValue,
            totalPrice: newTotal.total + countCost.totalCost,
            list: updateList(orderList.list, newItem, itemIndex)
        }
    } else {
        return {
            list: updateList(orderList.list, newItem, itemIndex),
            totalPrice: countCost.totalCost,
            totalItems: countCost.selectedNumberValue,
        }
    }
}

export default updateTotal
