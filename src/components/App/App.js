import React, { Component } from 'react'
import { Row } from 'antd'
import AppHeader from '../AppHeader'
import AppFooter from '../AppFooter/AppFooter'
import Delivery from '../../pages/delivery'

import './App.css'

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <AppHeader />
                <Row className="app-content">
                    <Delivery />
                </Row>
                <AppFooter />
            </React.Fragment>
        )
    }
}


