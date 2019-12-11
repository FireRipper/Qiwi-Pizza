import React, { Fragment } from 'react'
import ErrorIndicator from '../error-indicator'
import TotalCostProduct from '../total-cost-product'
import ChooseWeightProduct from '../choose-weight-product'
import ChooseQuantityProduct from '../choose-quantity-product'
import noPhoto from '../../images/no-photo/no-photo-2-var/no-photo-var2-570px.png'

import { connect } from 'react-redux'
import { compose } from '../../utils'
import { withProductService } from '../hoc'
import { Card, Col, Row, Spin } from 'antd'
import { fetchProducts } from '../../actions'

import './card-list-items.css'

const { Meta } = Card

class CardListItems extends React.Component {

    componentDidMount() {
        this.props.fetchProducts()
    }

    renderProducts = (arr) =>
        arr.map(({ id, name, description, smallDesc, smallCost, mediumDesc, mediumCost, largeDesc, largeCost, cost }) => {
            return (
                <Col xs={{ span: 20 }} sm={{ span: 9, offset: 1 }} md={{ span: 9, offset: 1 }}
                     lg={{ span: 6, offset: 1 }}
                     key={id} className='card-list-items'>
                    <Card hoverable cover={<img src={noPhoto} alt={name} />}>
                        <Meta className='card-list-items--description' title='Состав продукта:'
                              description={description}
                        />
                        {
                            !cost ?
                                <Fragment>
                                    <Row type='flex' className='card-list-items--choose'>
                                        <ChooseWeightProduct
                                            largeCost={largeCost}
                                            largeDesc={largeDesc} mediumCost={mediumCost}
                                            mediumDesc={mediumDesc} smallCost={smallCost}
                                            smallDesc={smallDesc} chooseId={id}
                                        />
                                        <ChooseQuantityProduct quantityId={id} />
                                    </Row>
                                    <TotalCostProduct totalId={id} />
                                </Fragment>
                                :
                                <Fragment>
                                    <Row type='flex' className='card-list-items--choose'>
                                        <Col span={24} className='card-list-items--default--cost'>Цена: {cost} грн.</Col>
                                        <ChooseQuantityProduct quantityId={id} />
                                    </Row>
                                    <TotalCostProduct totalId={id} />
                                </Fragment>
                        }
                    </Card>
                </Col>
            )
        })

    render() {
        const { products, loading, error } = this.props

        if (loading) {
            return <Spin className='card-list-items--spinner' size='large' />
        }

        if (error) {
            return <ErrorIndicator />
        }

        return (
            this.renderProducts(products)
        )
    }
}

const mapStateToProps = ({ products, loading, error }) => {
    return {
        products,
        loading,
        error
    }
}

const mapDispatchToProps = (dispatch, { productService }) => {
    return { fetchProducts: fetchProducts(productService, dispatch) }
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

