import { createStore } from 'redux'
import productReducer from './reducers/product-reducer'

const store = createStore(productReducer)

export default store
