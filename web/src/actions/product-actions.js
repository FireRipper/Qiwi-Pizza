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

const productsError = (error) => {
    return {
        type: 'PRODUCTS_ERROR',
        payload: error
    }
}

export {
    productsLoaded,
    productsRequested,
    productsError
}
