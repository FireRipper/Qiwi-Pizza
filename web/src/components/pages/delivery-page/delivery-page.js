import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Typography, Divider, Row, Alert, List } from 'antd'
import { faWallet, faCreditCard, faMobileAlt } from '@fortawesome/free-solid-svg-icons'

import './delivery-page.css'

const { Title } = Typography

export default class DeliveryPage extends Component {

    deliveryContent = [
        {
            key: 1,
            step: 'Шаг 1-й',
            infoDescr: '➀ Выберите любимую пиццу и поместите ее в корзину'
        },
        {
            key: 2,
            step: 'Шаг 2-й',
            infoDescr: `➁ Нажмите "Оформить заказ"`
        },
        {
            key: 3,
            step: 'Шаг 3-й',
            infoDescr: `➂ Введите номер телефона и нажмите "Заказать"`
        }
    ]

    render() {
        return (
            <Row type='flex' className='delivery'>
                <Col span={24}>
                    <div className='delivery-steps--to--order'>
                        <Title level={2}>Чтобы оформить заказ сделайте 3 простых шага:</Title>
                        <List
                            itemLayout="horizontal"
                            dataSource={this.deliveryContent}
                            renderItem={item => (
                                <List.Item>
                                    <List.Item.Meta
                                        title={item.step}
                                        description={item.infoDescr}
                                        className='delivery-steps--to--order--item'
                                    />
                                </List.Item>
                            )}
                        />

                    </div>
                </Col>
                <Col xs={{ span: 22, offset: 1 }}>
                    <Alert message="Оператор"
                           description="Оператор свяжется с вами в течении 5-ти минут и подтвердит заказ. И меньше чем за 60 минут
                                                горячая, вкусная пицца будет у Вас дома или в офисе."
                           type="success"
                           className='delivery-alert--operator'
                           showIcon
                    />
                </Col>
                <Col span={24} className='delivery-content--short--info'>
                    <p>
                        Сеть пиццерий <i> Qiwi Pizza</i> круглосуточно доставляет заказы по всему Киеву и за пределы
                        города.
                        Бесплатная доставка пиццы занимает до <strong>60 минут</strong>, с момента
                        заказа.<strong> Минимальная
                        сумма
                        заказа
                        от
                        150
                        грн.</strong>
                    </p>
                    <p>
                        Возможность доставки Вашего заказа за пределы города Киева осуществляется по
                        предварительному
                        согласованию с оператором call-центра.
                    </p>
                    <p>
                        <strong>Бесплатная доставка</strong> осуществляется при заказе от <strong>150 грн</strong> в
                        пределах Киева и
                        от <strong>500 грн </strong>
                        за
                        пределы
                        Киева.
                    </p>
                </Col>
                <Col xs={{ span: 22, offset: 1 }}>
                    <Divider className='delivery-content--how-to-pay'>Как можно оплатить заказ?</Divider>
                </Col>
                <Col xs={{ span: 22, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <div className='delivery-content--how-to-pay--block delivery-content--how-to-pay--block--blue'>
                        <FontAwesomeIcon icon={faWallet}
                                         className='delivery-content--how-to-pay--block--icon' />&nbsp;
                        <p className='delivery-content--how-to-pay--block--p'> - Наличными курьеру</p>
                    </div>
                </Col>
                <Col xs={{ span: 22, offset: 1 }} lg={{ span: 6, offset: 1 }}>
                    <div className='delivery-content--how-to-pay--block delivery-content--how-to-pay--block--green'>
                        <FontAwesomeIcon icon={faCreditCard}
                                         className='delivery-content--how-to-pay--block--icon' />&nbsp;
                        <p className='delivery-content--how-to-pay--block--p'> - Карточкой курьеру</p>
                    </div>
                </Col>
                <Col xs={{ span: 22, offset: 1 }} lg={{ span: 6 }}>
                    <div
                        className='delivery-content--how-to-pay--block delivery-content--how-to-pay--block--purple'>
                        <FontAwesomeIcon icon={faMobileAlt}
                                         className='delivery-content--how-to-pay--block--icon' />&nbsp;
                        <p className='delivery-content--how-to-pay--block--p'> - Онлайн на сайте</p>
                    </div>
                </Col>
                <Col xs={{ span: 22, offset: 1 }} className='delivery-content--info--about--fail--order'>
                    <Alert message="Обратите внимание!"
                           description={`В случае, если ваши планы поменялись и вы желаете отказаться от заказа - просим Вас сообщить об этом, оператору, по телефону 044 266 66 06, но не позже чем спустя 10 минут после подтверждение заказа оператором.`}
                           type="info"
                           showIcon
                    />
                </Col>
            </Row>
        )
    }
}
