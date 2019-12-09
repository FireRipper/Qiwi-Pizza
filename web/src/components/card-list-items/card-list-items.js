import React from 'react'
import ChooseQuantityProduct from '../choose-quantity-product'
import ChooseWeightProduct from '../choose-weight-product'
import TotalCostProduct from '../total-cost-product'
import noPhoto from '../../images/no-photo/no-photo-2-var/no-photo-var2-570px.png'

import { Card, Col, Row } from 'antd'
import { connect } from 'react-redux'
import { productsLoaded } from '../../actions'
import { compose } from '../../utils'
import { withProductService } from '../hoc'

import './card-list-items.css'

const { Meta } = Card

class CardListItems extends React.Component {

    componentDidMount() {
        // 1, - receive data
        // 2. - dispatch action to store
        const { productService, productsLoaded } = this.props

        productService.getAllPizza()
            .then((data) => { productsLoaded(data) })
    }

    renderProducts = (arr) =>
        arr.map(({ id, name, description, smallDesc, smallCost, mediumDesc, mediumCost, largeDesc, largeCost }) => {
            return (
                <Col xs={{ span: 20 }} sm={{ span: 9, offset: 1 }} md={{ span: 9, offset: 1 }}
                     lg={{ span: 6, offset: 1 }}
                     key={id} className='card-list-items'>
                    <Card hoverable cover={<img src={noPhoto} alt={name} />}>
                        <Meta className='card-list-items--description' title='Состав продукта:'
                              description={description} />
                        <Row type='flex' className='card-list-items--choose'>
                            <ChooseWeightProduct
                                largeCost={largeCost}
                                largeDesc={largeDesc} mediumCost={mediumCost}
                                mediumDesc={mediumDesc} smallCost={smallCost}
                                smallDesc={smallDesc}
                            />
                            <ChooseQuantityProduct />
                        </Row>
                        <TotalCostProduct />
                    </Card>
                </Col>
            )
        })

    render() {
        const { products } = this.props
        
        return (
            this.renderProducts(products)
        )
    }
}

const mapStateToProps = ({ products }) => {
    return {
        products
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        productsLoaded: (newProducts) => {
            dispatch(productsLoaded(newProducts))
        }
    }
    /* return bindActionCreators({ productsLoaded }, dispatch)*/
}

export default compose(
    withProductService(),
    connect(mapStateToProps, mapDispatchToProps)
)(CardListItems)

/*handleChangeSelectItem = (value) => {
    this.setState({
        totalCost: value,
        defaultCost: value,
        selectValue: value,
        selectedNumberValue: 1
    })
}

handleChangeSelectNumber = (value) => {
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
}*/

