import React, { Fragment } from 'react'
import { Col, Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import './choose-quantity-product.css'

const { Option } = Select

const ChooseQuantityProduct = ({ defaultValue, defaultCost, numbers, onSelectQuantity }) => {

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
                defaultValue={defaultValue}
                value={defaultValue}
                disabled={defaultCost <= 0 ? true : null}
                className='choose-quantity-product-input--number'
                onChange={onSelectQuantity}
            >
                {renderOption}
            </Select>
        </Fragment>
    )
}

export default ChooseQuantityProduct
