import { Row, Col, Menu } from 'antd'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo-qiwi/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faTruck, faAddressCard, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import './header.css'

export default class Header extends Component {

    menuItems = [
        { key: 'main', link: '/', icon: faPizzaSlice, label: 'Главная' },
        { key: 'about', link: '/about', icon: faInfoCircle, label: 'О нас' },
        { key: 'contact', link: '/contact', icon: faAddressCard, label: 'Контакты' },
        { key: 'delivery', link: '/delivery', icon: faTruck, label: 'Доставка и оплата' }
    ]

    renderMenuItem() {
        return this.menuItems.map(({ key, link, icon, label }) => {
            return (
                <Menu.Item key={key}>
                    <Link to={link}>
                        <FontAwesomeIcon icon={icon} />&nbsp;
                        {label}
                    </Link>
                </Menu.Item>
            )
        })
    }

    render() {

        return (
            <React.Fragment>
                <Row className='header' type='flex' align='middle'>
                    <Col className="header-logo" xs={12} sm={6} md={6}
                         lg={8} xl={{ span: 5, push: 1 }}>
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </Col>
                    <Col xs={12} sm={18} md={17} lg={15} xl={15}>
                        <Menu mode="horizontal" className="header-menu">
                            {this.renderMenuItem()}
                        </Menu>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
