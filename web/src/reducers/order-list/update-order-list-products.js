import updateTotal from './update-total'

const updateListItem = (product, countProducts, item) => {
    const defCost = countProducts.defaultCost
    const selNumVal = countProducts.selectedNumberValue
    const totalCost = countProducts.totalCost

    const { smallCost, mediumCost, largeCost, oneCost, doubleCost} = product

    if (item) {
        return {
            ...item,
            smCount: defCost === smallCost || defCost === oneCost ? item.smCount + selNumVal : item.smCount,
            mdCount: defCost === mediumCost || defCost === doubleCost ? item.mdCount + selNumVal: item.mdCount,
            lgCount: defCost === largeCost ? item.lgCount + selNumVal : item.lgCount,
            count: item.count + selNumVal,
            total: item.total + totalCost
        }
    } else {
        return {
            id: product.id,
            title: product.title,
            count: selNumVal,
            total: totalCost,
            currentValue: defCost,
            smPrice: smallCost || oneCost,
            mdPrice: mediumCost || doubleCost,
            lgPrice: largeCost || 0,
            smWeight: product.smallDesc || product.oneWeight,
            mdWeight: product.mediumDesc || product.doubleWeight,
            lgWeight: product.largeDesc || 0,
            smCount: defCost === smallCost || defCost === oneCost ? selNumVal : 0,
            mdCount: defCost === mediumCost || defCost === doubleCost ? selNumVal : 0,
            lgCount: defCost === largeCost ? selNumVal : 0
        }
    }
}

const addProductToList = (state, productId) => {
    const { productList: { products }, productChooseMenu: { chooseMenu }, orderList: { list } } = state

    const product = products.find(({ id }) => id === productId)
    const countAndCost = chooseMenu.find(({ id }) => id === productId)

    if (!countAndCost.defaultCost) {
        return {
            ...state.orderList
        }
    } else {
        const itemIndex = list.findIndex(({ id }) => id === productId)
        const item = list[itemIndex]

        const newItem = updateListItem(product, countAndCost, item)

        return updateTotal(list, countAndCost, newItem, itemIndex)
    }
}

export default addProductToList
