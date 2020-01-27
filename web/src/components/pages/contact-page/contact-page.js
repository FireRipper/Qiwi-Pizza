import React, { Fragment, useEffect, useState } from 'react'
import { Typography, Icon, Button, Col, Row, Skeleton } from 'antd'
import contactInfo from './contact-info'

import './contact-page.css'

const ContactPage = () => {
    const [activeSkeleton, setActiveSkeleton] = useState(true)

    useEffect(() => {
        let timer

        timer = setTimeout(() => {
            setActiveSkeleton(false)
        }, 700)

        return () => clearTimeout(timer)
    }, [])

    const renderContactBlocks = contactInfo.map(({ key, icon, h4, paragraph, link, linkLabel }) => {
        return (
            <div className="contact--content__box" key={key}>
                <Skeleton loading={activeSkeleton}>
                    <Icon type={icon} theme='filled' className="contact--content__box__icon" />
                    <Typography.Title level={4} className="contact--content__box__h4">{h4}</Typography.Title>
                    <p className="contact--content__box__p">{paragraph}</p>
                    <Button type="link" className="contact--content__box__for__link">
                        <a href={link}
                           className="contact--content__box__tel"
                           target="_blank"
                           rel="noopener noreferrer">{linkLabel}
                        </a>
                    </Button>
                </Skeleton>
            </div>
        )
    })

    return (
        <Fragment>
            <Col span={24} className="contact-page-background">
                <Col span={24} className="contact-page-background-picture">
                    <Col xs={{ span: 14, offset: 10, pull: 5 }}>
                        <Row type="flex" align="middle" className="contact-page-background-content">
                            <Col span={24}><Typography.Title level={2} className="contact-page-background-content-h2">Свяжитесь
                                с нами!</Typography.Title></Col>
                            <Col span={24}><p className="contact-page-background-content-p">Хотите связаться? Мы хотели
                                бы услышать вас. Вот как
                                вы можете связаться с нами ...</p></Col>
                        </Row>
                    </Col>
                </Col>
            </Col>
            <div className="contact--content">
                {renderContactBlocks}
            </div>
        </Fragment>
    )
}

export default ContactPage
