import React from 'react'
import { Button, Col, Input, Row } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

const TotalCostProduct = (props) => {

    const { totalCost } = props

    return (
        <Row type='flex' align='middle'>
            <Col xs={24}>
                <Input
                    addonBefore={(<strong>Итого:</strong>)}
                    value={`${totalCost} грн.`}
                />
            </Col>
            <Col xs={24}>
                <Button type='primary' className='card-list-items--btn'>
                    <FontAwesomeIcon icon={faCartPlus} />&nbsp; Заказать
                </Button>
            </Col>
        </Row>
    )
}

const mapStateToProps = ({ totalCost }) => {
    return {
        totalCost
    }
}

export default connect(mapStateToProps)(TotalCostProduct)
