import React from 'react'
import { Col, Row } from 'antd'
import CardListItems from '../card-list-items'
import OrderListProducts from '../order-list-products'

import './card-list.css'

const CardList = () => (
    <Col sm={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }}
         className='card-list-wrapper--background'>
        <Row type='flex' align='middle' justify='center'>
            <CardListItems />
        </Row>
        <Row type='flex' align='middle' justify='center'>
            <OrderListProducts />
        </Row>
    </Col>
)

export default CardList
