import React from 'react'
import Logo from '../../images/logo-qiwi/pizza.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import {
    faBreadSlice,
    faCog,
    faHamburger,
    faPizzaSlice,
    faSpa, faTruckLoading
} from '@fortawesome/free-solid-svg-icons'

import './left-sidebar.css'

const listCategoryOptions = [
    { key: 11, link:'/products/pizza', icon: faPizzaSlice, text: 'Пицца' },
    { key: 22, link:'/products/salads', icon: faSpa, text: 'Салаты' },
    { key: 33, link:'/products/sandwich', icon: faBreadSlice, text: 'Багеты' },
    { key: 44, link:'/products/combo-menu', icon: faHamburger, text: 'Комбо' },
]

const renderCategoryLinks = listCategoryOptions.map(({key, link, icon, text}) => {
    return (
        <NavLink
            key={key}
            activeClassName={'l--s--active--link'}
            to={link}
            className="l--s--links__a"
        >
            <FontAwesomeIcon className="l--s--links__icon" icon={icon} />
            <span className="l--s--links__title"
                  data-text={text} />
        </NavLink>
    )
})

const LeftSidebar = () => {
    return (
        <div className="left--sidebar">
            <div className="l--s--logo">
                <img src={Logo} alt="pizza--logo" />
            </div>
            <div className="l--s--links">
                {renderCategoryLinks}
            </div>
            <div className="l--s--bottom">
                <NavLink
                    to="/delivery"
                    className="l--s--bottom__a">
                    <FontAwesomeIcon icon={faTruckLoading} />
                </NavLink>
                <NavLink to="/" className="l--s--bottom__a">
                    <FontAwesomeIcon icon={faCog} />
                </NavLink>
            </div>
        </div>
    )
}

export default LeftSidebar
