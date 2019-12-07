import React, { Fragment } from 'react'
import { Row } from 'antd'
import { Switch, Route } from 'react-router-dom'

import Header from '../header'
import Footer from '../footer'
import Home from '../pages/home-page'
import About from '../pages/about-page'
import Contact from '../pages/contact-page'
import PageNotFound from '../pages/404-page'
import Delivery from '../pages/delivery-page'

import './app.css'

const App = () => {
    return (
        <Fragment>
            <Header />
            <Row className="app-content">
                <Switch>
                    <Route path={'/'} exact component={Home} />
                    <Route path={'/about'} component={About} />
                    <Route path={'/contact'} component={Contact} />
                    <Route path={'/delivery'} component={Delivery} />
                    <Route render={() => <PageNotFound />} />
                </Switch>
            </Row>
            <Footer />
        </Fragment>
    )
}

export default App
