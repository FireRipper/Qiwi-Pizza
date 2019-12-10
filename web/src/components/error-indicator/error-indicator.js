import React from 'react'
import { Button, Result, Row } from 'antd'

import './error-indicator.css'

const ErrorIndicator = () => (
    <Row type='flex' justify='center' align='middle' className='error-indicator'>
        <Result
            status='error'
            title='Critical Error'
            subTitle='Something has gone terrible wrong! Please reload page! '
            extra={<a href="/"><Button type="primary">Reload page</Button></a>}
        />
    </Row>
)

export default ErrorIndicator
