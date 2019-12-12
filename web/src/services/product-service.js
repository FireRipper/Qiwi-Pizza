import { _pizza, _salads, _combination, _buggets } from './data-products/data'
import { _transformPizzaAndSalads, _transformData } from '../utils'

export default class ProductService {

    /*getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, result status: ${res.status}`)
        }

        return res.json()
    }*/

    createPromiseProducts = (data, methodProcessing) => {
        return new Promise((resolve) => {
                setTimeout(
                    () => {
                        resolve(data.map(methodProcessing))
                    }, 500)
            }
        )
    }

    createPromiseProduct = (data) => {
        return new Promise(
            (resolve) => {
                setTimeout(
                    () => {
                        resolve(data)
                        /*reject(new Error(`Fail: product isn't received from server!!`))*/
                    }, 500)
            }
        )
    }

    getAllPizza = () => {
        return this.createPromiseProducts(_pizza, _transformPizzaAndSalads)
    }

    getPizza = (id) => {
        return this.createPromiseProduct(_pizza[id])
    }

    getAllSalads = () => {
        return this.createPromiseProducts(_salads, _transformPizzaAndSalads)
    }

    getSalad = (id) => {
        return this.createPromiseProduct(_salads[id])
    }

    getAllCombination = () => {
        return this.createPromiseProducts(_combination, _transformData)
    }

    getCombination = (id) => {
        return this.createPromiseProduct(_combination[id])
    }

    getAllBuggets = () => {
        return this.createPromiseProducts(_buggets, _transformData)
    }

    getBugget = (id) => {
        return this.createPromiseProduct(_buggets[id])
    }
}

