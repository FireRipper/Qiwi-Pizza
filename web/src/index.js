import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import { BrowserRouter as Router } from 'react-router-dom'
import ErrorBoundary from './components/error-boundary'
import { ProductServiceProvider } from './components/product-service-context'
import ProductService from './services/product-service'
import { Provider } from 'react-redux'
import store from './store'

const productService = new ProductService()
const baseName = process.env.REACT_APP_MODE === 'production' ? process.env.REACT_APP_BASENAME : ''

console.log(baseName)

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundary>
            <ProductServiceProvider value={productService}>
                <Router>
                    <App />
                </Router>
            </ProductServiceProvider>
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root'))
