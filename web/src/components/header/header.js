import { Row, Col, Menu, Badge } from 'antd'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo-qiwi/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPizzaSlice, faTruck, faAddressCard, faInfoCircle, faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

import './header.css'

class Header extends Component {

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
        const { totalItems } = this.props

        return (
            <React.Fragment>
                <Row className='header' type='flex' align='middle'>
                    <Col className="header-logo" xs={12} sm={5} md={6}
                         lg={7} xl={{ span: 5, push: 1 }}>
                        <Link to="/"><img src={logo} alt="logo" /></Link>
                    </Col>
                    <Col xs={12} sm={16} md={14} lg={13} xl={15}>
                        <Menu mode="horizontal" className="header-menu">
                            {this.renderMenuItem()}
                        </Menu>
                    </Col>
                    <Col sm={3} md={{ span: 2, offset: 2 }} lg={{ span: 3, offset: 1 }} className="header-basket">
                        <Link to="/">
                            <Badge className="header-basket--badge" count={totalItems}>
                                <FontAwesomeIcon className="header-basket--icon" icon={faShoppingBasket} />
                            </Badge>
                        </Link>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ orderList: { totalItems } }) => {
    return {
        totalItems
    }
}

export default connect(mapStateToProps)(Header)
