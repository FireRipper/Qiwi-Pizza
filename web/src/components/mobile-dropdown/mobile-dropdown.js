import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignCenter, faTimes } from '@fortawesome/free-solid-svg-icons'

import './mobile-dropdown.css'

const MobileDropdown = ({ arrayMenuItems }) => {
    const [activeDropdown, setActiveDropdown] = useState(false)

    let timer

    const toggleDropdown = () => {
        setActiveDropdown(true)

        clearTimeout(timer)

        setTimeout(() => setActiveDropdown(false), 3000)
    }

    return (
        <div id="mobile--dropdown" className={activeDropdown ? 'active--dropdown' : null}>
            <div className="mobile--dropdown__toggle" onClick={toggleDropdown} disabled={activeDropdown}>
                {!activeDropdown
                    ? <FontAwesomeIcon icon={faAlignCenter} className='mobile--dropdown__icon__align' />
                    : <FontAwesomeIcon icon={faTimes} className='mobile--dropdown__icon__times' />
                }
            </div>
            <ul className="mobile--dropdown__menu">
                {
                    arrayMenuItems.map(({ key, link, icon, label }) => {
                        return (
                            <li className="mobile--dropdown__item" key={key + '-dropdown'}>
                                <NavLink
                                    to={link}
                                    className='mobile--dropdown__link'
                                    exact
                                    activeClassName={'active--link'}
                                >
                                    <FontAwesomeIcon icon={icon} className='mobile--dropdown__icon'/> &nbsp;
                                    <span className="mobile--dropdown__span">{label}</span>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default MobileDropdown
