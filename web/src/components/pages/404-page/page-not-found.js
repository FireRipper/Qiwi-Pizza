import React from 'react'
import { Button, Result } from 'antd'
import { Link } from 'react-router-dom'

import './page-not-found.css'

const PageNotFound = () => {
    return (
        <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            className='page-not-found'
            extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
        />
    )
}

export default PageNotFound
