import React from 'react'
import { Button, Col, Icon, Row, Typography } from 'antd'
import { connect } from 'react-redux'
import { allProductsRemovedFromOrderList, productRemovedFromOrderList, updateCountAndTotalOrder } from '../../actions'

import './order-list-products.css'

const { Title } = Typography

const OrderListProducts = ({ items, allTotal, onIncrease, onDecrease, onDeleteAll }) => {

    const renderRow = (item, idx) => {
        const { id, title, count, total } = item

        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{`${total} грн.`}</td>
                <td className='order-list-products--btn--action'>
                    <Button
                        onClick={(id) => onIncrease(id)}
                        size='small'><Icon type="plus" /></Button>
                    <Button
                        onClick={(id) => onDecrease(id)}
                        type='primary' size='small'><Icon type="minus" /></Button>
                    <Button
                        onClick={(id) => onDeleteAll(id)}
                        type='danger' size='small'><Icon type="delete" /></Button>
                </td>
            </tr>
        )
    }

    return (
        <Col lg={{ span: 20, offset: 2 }}>
            <Row type='flex' align='middle' className='order-list-products'>
                <Col xs={{ span: 22, offset: 1 }}><Title level={3}>Ваш заказ:</Title></Col>
                <Col lg={{ span: 22, offset: 1 }}>
                    <table className='order-list-products--table'>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Название</th>
                            <th>Кол-во</th>
                            <th>Цена</th>
                            <th>Действия</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map(renderRow)}
                        </tbody>
                    </table>
                </Col>
                <Col xs={{ span: 22, offset: 1 }}>
                    <p className='order-list-products--total'><span>Всего: {allTotal} грн </span></p>
                </Col>
            </Row>
        </Col>
    )
}

const mapStateToProps = ({ orderList: { list, total } }) => {
    return {
        items: list,
        allTotal: total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(updateCountAndTotalOrder(id)),
        onDecrease: (id) => dispatch(productRemovedFromOrderList(id)),
        onDeleteAll: (id) => dispatch(allProductsRemovedFromOrderList(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderListProducts)
