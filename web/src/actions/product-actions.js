const productsLoaded = (newProducts) => {
    return {
        type: 'PRODUCTS_LOADED',
        payload: newProducts
    }
}

const productsRequested = () => {
    return {
        type: 'PRODUCTS_REQUESTED'
    }
}

export {
    productsLoaded,
    productsRequested
}
