import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faAlignLeft, faHome, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import MobileDropdown from '../mobile-dropdown'

import './header.css'

const menuItems = [
    { key: 'main', link: '/', icon: faHome, label: 'Главная' },
    { key: 'about', link: '/about', icon: faInfoCircle, label: 'О нас' },
    { key: 'contact', link: '/contact', icon: faAddressCard, label: 'Контакты' }
]

const renderHeaderMenu = menuItems.map(({ key, link, icon, label }) => {
    return (
        <li key={key} className="header__li">
            <NavLink
                to={link}
                className='header--links__a'
                exact
                activeClassName={'header--active--link'}
            >
                <FontAwesomeIcon icon={icon} /> &nbsp;
                <span className="header--links__title">{label}</span>
            </NavLink>
        </li>
    )
})

const Header = ({ handleChange }) => {
    return (
        <div className="header">
            <div id="m--toggle--hamburger" className="header__hamburger" onClick={handleChange}>
                <FontAwesomeIcon icon={faAlignLeft} />
            </div>
            <nav className="header__links">
                <ul className="header__ul">
                    {renderHeaderMenu}
                </ul>
            </nav>
            <MobileDropdown arrayMenuItems={menuItems} />
        </div>
    )
}

export default Header
