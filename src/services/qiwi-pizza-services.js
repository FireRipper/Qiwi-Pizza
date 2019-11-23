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
        return res.map(this._transformPizza)
    }

    getPizza = (id) => {
        const res = dataPizza.pizza[id]
        return res
    }

    getAllSalads = () => {
        const res = dataSalads.salads
        return res.map(this._transformSalads)
    }

    getSalad = (id) => {
        const res = dataSalads.salads[id]
        return res
    }

    getAllCombination = () => {
        const res = dataCombination.combination
        return res.map(this._transformCombination)
    }

    getCombination = (id) => {
        const res = dataCombination.combination[id]
        return res
    }

    getAllBuggets = () => {
        const res = dataBuggets.buggets
        return res.map(this._transformBuggets)
    }

    getBugget = (id) => {
        const res = dataBuggets.buggets[id]
        return res
    }

    _transformPizza(pizza){
        return {
            id: pizza.id,
            name: pizza.name,
            description: pizza.description,
            smallCost: pizza.smallCost,
            smallDesc: pizza.smallDesc,
            mediumCost: pizza.mediumCost,
            mediumDesc: pizza.mediumDesc,
            largeCost: pizza.largeCost,
            largeDesc: pizza.largeDesc
        }
    }

    _transformSalads(salad){
        return {
            id: salad.id,
            name: salad.name,
            description: salad.description,
            smallCost: salad.smallCost,
            smallDesc: salad.smallDesc,
            mediumCost: salad.mediumCost,
            mediumDesc: salad.mediumDesc,
            largeCost: salad.largeCost,
            largeDesc: salad.largeDesc
        }
    }

    _transformCombination(combination){
        return {
            id: combination.id,
            name: combination.name,
            description: combination.description,
            cost: combination.cost,
        }
    }

    _transformBuggets(buget){
        return {
            id: buget.id,
            name: buget.name,
            description: buget.description,
            cost: buget.cost,
        }
    }

}

