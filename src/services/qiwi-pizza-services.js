import * as dataPizza from './data-products/pizza'
import * as dataSalads from './data-products/salads'
import * as dataCombination from './data-products/combination'
import * as dataBuggets from './data-products/buggets'

export default class QiwiPizzaServices {

    /*getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, result status: ${res.status}`)
        }

        return res.json()
    }*/

    getAllPizza = () => {
        const res = dataPizza.pizza
        return res
    }

    getPizza = (id) => {
        const res = dataPizza.pizza[id]
        return res
    }

    getAllSalads = () => {
        const res = dataSalads.salads
        return res
    }

    getSalad = (id) => {
        const res = dataSalads.salads[id]
        return res
    }

    getAllCombination = () => {
        const res = dataCombination.combination
        return res
    }

    getCombination = (id) => {
        const res = dataCombination.combination[id]
        return res
    }

    getAllBuggets = () => {
        const res = dataBuggets.buggets
        return res
    }

    getBugget = (id) => {
        const res = dataBuggets.buggets[id]
        return res
    }
}

