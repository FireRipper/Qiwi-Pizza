import { createContext } from 'react'

const {
    Provider: ProductServiceProvider,
    Consumer: ProductServiceConsumer
} = createContext()

export {
    ProductServiceProvider,
    ProductServiceConsumer
}
