import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom'

import About from '../pages/about-page'
import Delivery from '../pages/delivery-page'
import PageNotFound from '../pages/404-page'
import LeftSidebar from '../left-sidebar'
import Contact from '../pages/contact-page'
import Header from '../header'
import ContainerContent from '../container-content'
import ProductMenu from '../product-menu'

import './app.css'

const App = () => {
    const [collapse, setCollapse] = useState(true)

    const handleChange = () => setCollapse((prevState) => !prevState)

    return (
        <div id="app-wrapper" className={collapse ? 'collapse' : null}>
            <LeftSidebar />
            <div className="main" role={'main'}>
                <Header handleChange={handleChange} />
                <Switch>
                    <Route path={'/'} exact render={() => <ContainerContent content={<ProductMenu />} />} />
                    <Route path={'/about'} component={About} />
                    <Route path={'/delivery'} component={Delivery} />
                    <Route path={'/contact'} component={Contact} />

                    <Route render={() => <PageNotFound />} />
                </Switch>
            </div>
        </div>
    )
}

export default App
