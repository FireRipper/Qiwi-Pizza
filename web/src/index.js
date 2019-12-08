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
