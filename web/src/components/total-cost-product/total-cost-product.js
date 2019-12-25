import React from 'react'
import { Col, Input, Row } from 'antd'
import { connect } from 'react-redux'
import { productAddedToOrderList } from '../../actions'
import ButtonOrderProduct from '../button-order-product'

const TotalCostProduct = ({ totalId, chooseMenu, onAddedToList }) => {
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
            <ButtonOrderProduct onAddedToList={() => onAddedToList(totalId)} />
        </Row>
    )
}

const mapStateToProps = ({productChooseMenu: { chooseMenu }}) => {
    return {
        chooseMenu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddedToList: (id) => dispatch(productAddedToOrderList(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TotalCostProduct)
