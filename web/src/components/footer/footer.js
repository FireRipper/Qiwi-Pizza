import React from 'react'
import { Divider } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

import './footer.css'

const Footer = () => (
    <div className="footer">
        <Divider className='Footer-divider'><SmileOutlined/>&nbsp; Qiwi Pizza © 2019 </Divider>
    </div>
)

export default Footer
