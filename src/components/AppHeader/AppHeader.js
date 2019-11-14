import { Row, Col, Menu } from 'antd'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../images/logo-qiwi/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faTruck, faAddressCard, faInfoCircle } from '@fortawesome/free-solid-svg-icons'

import './AppHeader.css'

export default class AppHeader extends Component {

    menuItems = [
        { key: 'main', link: '/', icon: faPizzaSlice, label: 'Главная' },
        { key: 'about', link: '/about', icon: faInfoCircle, label: 'О нас' },
        { key: 'contact', link: '/contact', icon: faAddressCard, label: 'Контакты' },
        { key: 'delivery', link: '/delivery', icon: faTruck, label: 'Доставка и оплата' },
    ]

    renderMenuItem() {
        return this.menuItems.map(({ key, link, icon, label }) => {
            return (
                <Menu.Item key={key}>
                    <NavLink to={link}>
                        <FontAwesomeIcon icon={icon} />&nbsp;
                            {label}
                    </NavLink>
                </Menu.Item>
            )
        })
    }

    render() {

        return (
            <React.Fragment>
                <Row className='app-header' type='flex' align='middle'>
                    <Col className="app-header-logo" xs={12} sm={6} md={6} lg={6} xl={6}>
                        <a href="/"><img src={logo} alt="logo" /></a>
                    </Col>
                    <Col xs={12} sm={18} md={18} lg={18} xl={18}>
                        <Menu mode="horizontal" className="app-header-menu">
                            {this.renderMenuItem()}
                        </Menu>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}
