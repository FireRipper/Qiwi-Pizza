import updateList from './update-list'

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

export default updateTotal
