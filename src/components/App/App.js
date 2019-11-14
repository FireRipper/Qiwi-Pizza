import React from 'react'
import { Row } from 'antd'
import AppHeader from '../AppHeader'
import About from '../../pages/about-us'
import Contact from '../../pages/contact'
import Delivery from '../../pages/delivery'
import Home from '../../pages/home'
import AppFooter from '../AppFooter/AppFooter'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import './App.css'

function App() {
    return (
        <BrowserRouter>
            <React.Fragment>
                <AppHeader />
                <Row className="app-content">
                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/about'} component={About}/>
                        <Route path={'/contact'} component={Contact}/>
                        <Route path={'/delivery'} component={Delivery}/>
                        <Redirect to={'/'} />
                    </Switch>
                </Row>
                <AppFooter />
            </React.Fragment>
        </BrowserRouter>
    )
}

export default App
