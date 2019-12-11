import React from 'react'
import { Button, Col, Icon, Row, Typography } from 'antd'

import './basket-order-product.css'

const { Title } = Typography

const BasketOrderProduct = () => {
    return (
        <Col lg={{ span: 20, offset: 2 }}>
            <Row type='flex' align='middle' className='basket-order-product'>
                <Col xs={{span: 22, offset: 1}}><Title level={3}>Ваш заказ:</Title></Col>
                <Col lg={{ span: 22, offset: 1 }}>
                    <table className='basket-order-product--table'>
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
                        <tr>
                            <td>1</td>
                            <td>Бургер пицца</td>
                            <td>3</td>
                            <td>280 грн</td>
                            <td className='basket-order-product--btn--action'>
                                <Button size='small'><Icon type="plus" /></Button>
                                <Button type='primary' size='small'><Icon type="minus" /></Button>
                                <Button type='danger' size='small'><Icon type="delete" /></Button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </Col>
                <Col xs={{span: 22, offset: 1}}>
                    <p className='basket-order-product--total'><span>Всего: 280 грн </span></p>
                </Col>
            </Row>
        </Col>
    )
}

export default BasketOrderProduct
