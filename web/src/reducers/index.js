import updateProductList from './product-reducer'
import updateProductChooseMenu from './choose-menu-reducer'
import updateProductOrderList from './order-list-reducer'

const Reducer = (state, action) => {
    return {
        productList: updateProductList(state, action),
        productChooseMenu: updateProductChooseMenu(state, action),
        orderList: updateProductOrderList(state, action)
    }
}

export default Reducer

