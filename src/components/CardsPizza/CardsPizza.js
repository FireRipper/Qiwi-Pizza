import React, { Component, Fragment } from 'react'
import QiwiPizzaServices from '../../services/qiwi-pizza-services'

export default class CardsPizza extends Component {

    qiwiService = new QiwiPizzaServices()

    state = {
        pizzaList: this.qiwiService.getAllPizza()
    }

    renderItems(arr) {
        return arr.map(({ id, name, description }) => {
            return (
                <div key={id}>
                    <div>{name}</div>
                    <strong>{description}</strong>
                </div>
            )
        })
    }

    render() {
        const { pizzaList } = this.state
        console.log(pizzaList)

        return (
            <Fragment>
                {this.renderItems(pizzaList)}
            </Fragment>
        )
    }
}
