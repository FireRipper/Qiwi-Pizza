import React, { Fragment, Component } from 'react'
import { Col, Row, Typography, Icon, Button } from 'antd'

import './contact.css'

export default class Contact extends Component {

    contactInfo = [
        {
            key: 100,
            colSpanXl: { span: 9, offset: 2 },
            colSpanLg: { span: 10, offset: 2 },
            colSpanMd: { span: 11, offset: 1 },
            icon: 'phone',
            h4: 'Свяжитесь с call-центром',
            paragraph: 'Если у Вас возникли вопросы по поводу обслужования просто перезвоните нашему call-центру. Решим Вашу проблему вместе.',
            link: 'tel:+380682666606',
            linkLabel: '+38(068) 266-66-06'
        },
        {
            key: 101,
            colSpanXl: { span: 9, pull: 2 },
            colSpanLg: { span: 10, pull: 2 },
            colSpanMd: { span: 11, pull: 1 },
            icon: 'mail',
            h4: 'Свяжитесь с нами по почте',
            paragraph: 'Если у Вас есть предложения как улучшить наш сервис по обслуживанию, пишите на почту мы рассмотрим Ваше предложения.',
            link: 'mailto: qiwipizzaria@ibox.com',
            linkLabel: 'qiwipizzaria@ibox.com'
        },
        {
            key: 102,
            colSpanXl: { span: 9, offset: 2 },
            colSpanLg: { span: 10, offset: 2 },
            colSpanMd: { span: 11, offset: 1 },
            icon: 'facebook',
            h4: 'Следите за новостями',
            paragraph: 'Хотите узнавать первыми о наших новинках, нет проблем, подписуйтесь на наш facebook. Здесь мы вылаживаем актуальную информацию по поводу скидок, новинок и т.д.',
            link: 'https://www.facebook.com/',
            linkLabel: 'Перейти'
        },
        {
            key: 103,
            colSpanXl: { span: 9, pull: 2 },
            colSpanLg: { span: 10, pull: 2 },
            colSpanMd: { span: 11, pull: 1 },
            icon: 'instagram',
            h4: 'Следите за нами в инстаграм',
            paragraph: 'Хотите узнавать первыми о наших новинках, нет проблем, подписуйтесь на наш instagram. Здесь мы вылаживаем актуальную информацию по поводу скидок, новинок и т.д.',
            link: 'https://www.instagram.com/',
            linkLabel: 'Перейти'
        }
    ]

    renderContactBlocks() {
        return this.contactInfo.map(({ colSpanXl, colSpanLg, colSpanMd, key, icon, h4, paragraph, link, linkLabel }) => {
            return (
                <Col xl={colSpanXl} lg={colSpanLg} md={colSpanMd} key={key}>
                    <div className="contact-content__box">
                    <Icon type={icon} theme='filled' className="contact-content-box__icon"/>
                        <Typography.Title level={4} className="contact-content-box__h4">{h4}</Typography.Title>
                        <p className="contact-content-box__p">{paragraph}</p>
                        <Button type="link" className="contact-content-box__for__link"><a href={link} className="contact-content-box__tel" target="_blank" rel="noopener noreferrer">{linkLabel}</a></Button>
                    </div>
                </Col>
            )
        })
    }

    render() {
        return (
            <Fragment>
                <Col span={24} className="contact-page-background">
                    <Col span={24} className="contact-page-background-picture">
                        <Col xs={{ span: 14, offset: 10, pull: 5 }}>
                            <Row type="flex" align="middle" className="contact-page-background-content">
                                <Col span={24}><Typography.Title level={2} className="contact-page-background-content-h2">Свяжитесь с нами!</Typography.Title></Col>
                                <Col span={24}><p className="contact-page-background-content-p">Хотите связаться? Мы хотели бы услышать вас. Вот как
                            вы можете связаться с нами ...</p></Col>
                            </Row>
                        </Col>
                    </Col>
                </Col>
                <Col span={24} className='contact-content'>
                    <Row type="flex" align="middle" justify='space-between'>
                        {this.renderContactBlocks()}
                    </Row>
                </Col>
            </Fragment >
        )
    }
}
