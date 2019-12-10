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

const productsFetchError = (error) => {
    return {
        type: 'PRODUCTS_FETCH_ERROR',
        payload: error
    }
}

export {
    productsLoaded,
    productsRequested,
    productsFetchError
}
