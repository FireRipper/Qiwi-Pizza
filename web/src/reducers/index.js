import updateProductList from './product-reducer'
import updateProductChooseMenu from './choose-menu-reducer'

const Reducer = (state, action) => {
    return {
        productList: updateProductList(state, action),
        productChooseMenu: updateProductChooseMenu(state, action)
    }
}

export default Reducer

