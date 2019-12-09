function _transformPizzaAndSalads(item) {
    return {
        id: item.id,
        name: item.name,
        description: item.description,
        needChooseMenu: item.needChooseMenu,
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
        name: item.name,
        description: item.description,
        needChooseMenu: item.needChooseMenu,
        cost: item.cost
    }
}

export {
    _transformPizzaAndSalads,
    _transformData
}
