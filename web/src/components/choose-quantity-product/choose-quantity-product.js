import React, { Fragment } from 'react'
import { Col, Select } from 'antd'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { selectQuantityProduct } from '../../actions'

import './choose-quantity-product.css'

const { Option } = Select

const ChooseQuantityProduct = ({ numbers, chooseMenu, quantityId, onSelectQuantity }) => {

    const renderOption = numbers.map((num) => {
        return <Option key={num} value={num}>{num}</Option>
    })

    return (
        <Fragment>
            <Col span={24}>
                <strong className='choose-quantity-product--number--label'>
                    <FontAwesomeIcon icon={faPlusCircle} />&nbsp; Количество: </strong>
            </Col>
            {
                quantityId === chooseMenu[quantityId].id ?
                    <Select
                        defaultValue={0}
                        value={chooseMenu[quantityId].selectedNumberValue}
                        className='choose-quantity-product-input--number'
                        onChange={(value) => onSelectQuantity(quantityId, value)}
                    >
                        {renderOption}
                    </Select> : null
            }
        </Fragment>
    )
}

const mapStateToProps = ({ numbers, chooseMenu }) => {
    return {
        numbers,
        chooseMenu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectQuantity: (id, val) => {
            dispatch(selectQuantityProduct(id, val))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseQuantityProduct)
