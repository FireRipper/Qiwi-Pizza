import React, { Component } from 'react'
import { Row, Col } from 'antd'
import AppHeader from '../AppHeader'

import './App.css'
import AppFooter from '../AppFooter/AppFooter'

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <AppHeader />
                <Row className="app-content">
                    <Col xs={23} sm={23} md={23} lg={{ span: 14, offset: 10, pull: 5 }}>
                        <div>Content</div>
                    </Col>
                </Row>
                <AppFooter />
            </React.Fragment>
        )
    }
}


