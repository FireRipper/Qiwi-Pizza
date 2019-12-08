import React, { Fragment } from 'react'
import { Col, Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux'

import './choose-quantity-product.css'

const { Option } = Select

const ChooseQuantityProduct = ({ selectedNumberValue, defaultCost, numbers }) => {

    const renderOption = numbers.map((num) => {
        return <Option key={num} value={num}>{num}</Option>
    })

    return (
        <Fragment>
            <Col span={24}>
                <strong className='choose-quantity-product--number--label'>
                    <FontAwesomeIcon icon={faPlusCircle} />&nbsp; Количество: </strong>
            </Col>
            <Select
                defaultValue={selectedNumberValue}
                value={selectedNumberValue}
                disabled={defaultCost <= 0 ? true : null}
                className='choose-quantity-product-input--number'
                onChange={() => {
                }}
            >
                {renderOption}
            </Select>
        </Fragment>
    )
}

const mapStateToProps = ({ selectedNumberValue, defaultCost, numbers }) => {
    return {
        selectedNumberValue,
        defaultCost,
        numbers
    }
}

export default connect(mapStateToProps)(ChooseQuantityProduct)
