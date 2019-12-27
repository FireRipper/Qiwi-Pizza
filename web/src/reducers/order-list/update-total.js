import updateList from './update-list'

const updateTotal = (orderList, countCost, newItem, itemIndex) => {
    if (orderList.length > 0) {

        const newTotal = orderList.reduce(function (prevVal, curVal) {
                return {
                    total: prevVal.total + curVal.total
                }
            }
        )
        return {
            totalPrice: newTotal.total + countCost.totalCost,
            list: updateList(orderList, newItem, itemIndex)
        }
    } else {
        return {
            list: updateList(orderList, newItem, itemIndex),
            totalPrice: countCost.totalCost
        }
    }
}

export default updateTotal
