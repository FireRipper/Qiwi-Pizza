import React, { Component } from 'react'
import { Col, Row } from 'antd'
import ProductService from '../../services/product-service'
import CardListItems from '../card-list-items'

import './card-list.css'

export default class CardList extends Component {

    productService = new ProductService()

    defaultSelectValue = 'Выберите...'

    state = {
        productList: this.productService.getAllPizza(),
        selectedNumberValue: 0,
        totalCost: 0,
        defaultCost: 0,
        selectValue: this.defaultSelectValue,
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    }

    handleChangeSelectItem = (value) => {
        this.setState({
            totalCost: value,
            defaultCost: value,
            selectValue: value,
            selectedNumberValue: 1
        })
    }

    handleChangeSelectNumber = (value) => {
        console.log(value)
        this.updateTotalCost(value)

        this.setState({
            selectedNumberValue: value
        })
    }

    updateTotalCost = (val) => {
        this.setState(({ selectedNumberValue, defaultCost }) => {
            if (val !== selectedNumberValue) {
                const result = defaultCost * val
                return {
                    totalCost: result
                }
            }
        })
    }

    render() {
        const { selectValue, selectedNumberValue, defaultCost, totalCost, productList, numbers } = this.state

        return (
            <Col sm={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }}
                 className='card-list-wrapper--background'>
                <Row type='flex' align='middle' justify='center'>
                    <CardListItems
                        selectValue={selectValue} arrayProducts={productList}
                        selectedNumberValue={selectedNumberValue} defaultCost={defaultCost}
                        totalCost={totalCost} numbers={numbers}
                        onSelectWeight={(value) => this.handleChangeSelectItem(value)}
                        onSelectQuantity={(value) => this.handleChangeSelectNumber(value)}
                    />
                </Row>
            </Col>
        )
    }
}
