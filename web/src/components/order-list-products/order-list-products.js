import React from 'react'
import { Button, Col, Row, Typography, Radio } from 'antd'
import { MinusOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import {
    allProductsRemovedFromOrderList, productRemovedFromOrderList,
    updateCountAndTotalOrder, updateValueRadioBtnInOrderList
} from '../../actions'

import './order-list-products.css'

const { Title } = Typography

const OrderListProducts = ({ items, totalPrice, onIncrease, onDecrease, onDeleteAll, onChangeRadio }) => {

    const renderRow = (item, idx) => {
        const {
            id, title, count, total, smCount, mdCount,
            lgCount, smWeight, mdWeight, lgWeight,
            smPrice, mdPrice, lgPrice, currentValue
        } = item
        const { Group } = Radio
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>
                    <Group defaultValue={currentValue} onChange={(e) => onChangeRadio(id, e.target.value)}>
                        <Radio value={smPrice} disabled={!smCount ? true : null}>{smCount} шт. - {smWeight}</Radio>
                        <Radio value={mdPrice} disabled={!mdCount ? true : null}>{mdCount} шт. - {mdWeight}</Radio>
                        <Radio value={lgPrice} disabled={!lgCount ? true : null}>{lgCount} шт. - {lgWeight}</Radio>
                    </Group>
                </td>
                <td>{count}</td>
                <td>{`${total} грн.`}</td>
                <td className='order-list-products--btn--action'>
                    <Button
                        onClick={() => onDecrease(id)}
                        type='primary' size='small'><MinusOutlined /></Button>
                    <Button
                        onClick={() => onIncrease(id)}
                        size='small'><PlusOutlined /></Button>
                    <Button
                        onClick={() => onDeleteAll(id)}
                        type='danger' size='small'><DeleteOutlined /></Button>
                </td>
            </tr>
        )
    }

    return (
        <Col span={24}>
            <Row type='flex' align='middle' className='order-list-products'>
                <Col xs={{ span: 22, offset: 1 }}><Title level={3}>Ваш заказ:</Title></Col>
                <Col lg={{ span: 22, offset: 1 }}>
                    <table className='order-list-products--table'>
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Название</th>
                            <th>Вес (Кол-во)</th>
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
                    <p className='order-list-products--total'><span>Всего: {totalPrice} грн </span></p>
                </Col>
            </Row>
        </Col>
    )
}

const mapStateToProps = ({ orderList: { list, totalPrice } }) => {
    return {
        items: list,
        totalPrice: totalPrice
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => dispatch(updateCountAndTotalOrder(id)),
        onDecrease: (id) => dispatch(productRemovedFromOrderList(id)),
        onDeleteAll: (id) => dispatch(allProductsRemovedFromOrderList(id)),
        onChangeRadio: (id, e)=> dispatch(updateValueRadioBtnInOrderList(id, e))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderListProducts)
