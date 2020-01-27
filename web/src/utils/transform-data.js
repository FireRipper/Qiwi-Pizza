function _transformPizzaAndSalads(item) {
    return {
        id: item.id,
        title: item.title,
        description: item.description,
        smallCost: item.smallCost,
        smallDesc: item.smallDesc,
        mediumCost: item.mediumCost,
        mediumDesc: item.mediumDesc,
        largeCost: item.largeCost,
        largeDesc: item.largeDesc
    }
}

function _transformData(item) {
    return {
        id: item.id,
        title: item.title,
        img: item.img,
        description: item.description,
        oneCost: item.oneCost,
        oneWeight: item.oneWeight,
        doubleCost: item.doubleCost,
        doubleWeight: item.doubleWeight,
    }
}

export {
    _transformPizzaAndSalads,
    _transformData
}
