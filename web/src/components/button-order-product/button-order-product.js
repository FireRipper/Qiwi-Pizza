import React from 'react'
import { Button, Col } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const ButtonOrderProduct = () => {
    return (
        <Col xs={24}>
            <Button
                onClick={() => {}}
                type='primary'
                className='card-list-items--btn'>
                <FontAwesomeIcon icon={faCartPlus} />&nbsp; Заказать
            </Button>
        </Col>
    )
}

export default ButtonOrderProduct
