
import React from 'react'
import { Divider, Icon } from 'antd'

import './AppFooter.css'


function AppFooter() {
    return (
        <div className="app-footer">
            <Divider className='Footer-divider'><Icon type="smile" />&nbsp; Qiwi Pizza © 2019 </Divider>
        </div>
    )
}

export default AppFooter
