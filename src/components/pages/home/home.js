import React from 'react'
import CardsPizza from '../../CardsPizza'
import './home.css'
import MainSlider from '../../MainSlider'
import { Col } from 'antd'

function Home() {
    return(
        <div className='Home'>
            <Col lg={{span:16, offset: 4}}><MainSlider /></Col>
            <Col md={{span: 14, offset:5 }}><CardsPizza /></Col>
        </div>
    )
}

export default  Home
