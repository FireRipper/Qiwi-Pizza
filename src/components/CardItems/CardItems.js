import React, { Component } from 'react'
import QiwiPizzaServices from '../../services/qiwi-pizza-services'
import { Button, Card, Col, InputNumber, Row, Select } from 'antd'
import noPhoto from '../../images/no-photo/no-photo-2-var/no-photo-var2-570px.png'
import './CardItems.css'

const { Meta } = Card
const { Option } = Select

export default class CardItems extends Component {

    qiwiService = new QiwiPizzaServices()

    state = {
        pizzaList: this.qiwiService.getAllPizza()
    }

    renderItems(arr) {
        return arr.map(({
                            id, name, description,
                            smallDesc, smallCost,
                            mediumDesc, mediumCost,
                            largeDesc, largeCost
                        }) => {
            return (
                <Col xs={{span: 20}} sm={{ span: 9, offset: 1 }} md={{ span: 9, offset: 1 }} lg={{ span: 6, offset: 1 }} key={id + name}
                     className='card-items'>
                    <Card hoverable
                          cover={<img src={noPhoto} alt={name} />}>
                        <Meta title='Состав продукта:' description={description} />
                        <Row type='flex' className='card-items--choose'>
                            <Col span={24}>
                                <strong>Выберите вес:</strong>
                            </Col>
                            <Col span={24}>
                                <Select defaultValue={smallCost} className='card-items--select'>
                                    <Option
                                        value={smallCost}
                                    >
                                        <span>
                                            {smallCost} грн. {smallDesc}&nbsp;
                                        </span>
                                    </Option>
                                    <Option
                                        value={mediumCost}
                                    >
                                        <span>
                                            {mediumCost} грн. {mediumDesc}&nbsp;
                                        </span>
                                    </Option>
                                    <Option
                                        value={largeCost}
                                    >
                                        <span>
                                            {largeCost} грн. {largeDesc}&nbsp;
                                        </span>
                                    </Option>
                                </Select>
                            </Col>
                            <Col span={24}>
                                <strong>Количество: </strong>
                            </Col>
                            <Col span={24}>
                                <InputNumber min={1} defaultValue={1} max={50} className='card-items-input--number'/>
                            </Col>
                        </Row>
                        <Row type='flex' align='middle' justify='center'>
                            <Col xs={24} md={12}>
                                <span>Цена:</span>
                                <strong> {smallCost} грн.</strong>
                            </Col>
                            <Col xs={24} md={12}>
                                <Button type='primary'>Заказать</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            )
        })
    }

    render() {
        const { pizzaList } = this.state

        return (
            <Col sm={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }} className='card-items-wrapper--background'>
                <Row type='flex' align='middle' justify='center'>
                    {this.renderItems(pizzaList)}
                </Row>
            </Col>
        )
    }
}
