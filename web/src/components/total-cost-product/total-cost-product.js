import React from 'react'
import { Col, Input, Row } from 'antd'
import { connect } from 'react-redux'
import ButtonOrderProduct from '../button-order-product'

const TotalCostProduct = ({ totalId, chooseMenu }) => {
    return (
        <Row type='flex' align='middle'>
            <Col xs={24}>
                {
                    totalId === chooseMenu[totalId].id ?
                        <Input
                            addonBefore={(<strong>Итого:</strong>)}
                            value={`${chooseMenu[totalId].totalCost} грн.`}
                        />
                        : null
                }
            </Col>
            <ButtonOrderProduct />
        </Row>
    )
}

const mapStateToProps = ({productChooseMenu: { chooseMenu }}) => {
    return {
        chooseMenu
    }
}

export default connect(mapStateToProps)(TotalCostProduct)
