import React from 'react'
import { Result, Row } from 'antd'

import './error-indicator.css'

const ErrorIndicator = () => (
    <Row type='flex' justify='center' align='middle' className='error-indicator'>
        <Result
            status='error'
            title='Critical Error'
            subTitle='Something has gone terrible wrong!'
        >
        </Result>
    </Row>
)

export default ErrorIndicator
