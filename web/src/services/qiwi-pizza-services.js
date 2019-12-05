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
        return res.map(this._transformPizzaAndSalads)
    }

    getPizza = (id) => {
        const res = dataPizza.pizza[id]
        return res
    }

    getAllSalads = () => {
        const res = dataSalads.salads
        return res.map(this._transformPizzaAndSalads)
    }

    getSalad = (id) => {
        const res = dataSalads.salads[id]
        return res
    }

    getAllCombination = () => {
        const res = dataCombination.combination
        return res.map(this._transformData)
    }

    getCombination = (id) => {
        const res = dataCombination.combination[id]
        return res
    }

    getAllBuggets = () => {
        const res = dataBuggets.buggets
        return res.map(this._transformData)
    }

    getBugget = (id) => {
        const res = dataBuggets.buggets[id]
        return res
    }

    _transformPizzaAndSalads(item) {
        return {
            id: item.id,
            name: item.name,
            description: item.description,
            smallCost: item.smallCost,
            smallDesc: item.smallDesc,
            mediumCost: item.mediumCost,
            mediumDesc: item.mediumDesc,
            largeCost: item.largeCost,
            largeDesc: item.largeDesc
        }
    }

    _transformData(item) {
        return {
            id: item.id,
            name: item.name,
            description: item.description,
            cost: item.cost
        }
    }
}

