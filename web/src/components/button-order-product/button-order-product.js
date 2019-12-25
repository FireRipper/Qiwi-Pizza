import React from 'react'
import { Button, Col } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const ButtonOrderProduct = ({ onAddedToList }) => {
    return (
        <Col xs={24}>
            <Button
                onClick={onAddedToList}
                type='primary'
                className='card-list-items--btn'>
                <FontAwesomeIcon icon={faCartPlus} />&nbsp; В корзину
            </Button>
        </Col>
    )
}

export default ButtonOrderProduct
