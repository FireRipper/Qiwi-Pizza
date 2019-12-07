import React, { Fragment } from 'react'
import { Col, Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons'
import './choose-weight-product.css'

const { Option } = Select

const ChooseWeightProduct = ({ onSelectWeight, selectValue, smallCost, smallDesc, mediumCost, mediumDesc, largeCost, largeDesc }) => (
    <Fragment>
        <Col span={24}>
            <strong className='choose-weight-product--label'>
                <FontAwesomeIcon icon={faBalanceScaleRight} />&nbsp; Выберите вес:
            </strong>
        </Col>
        <Col span={24}>
            <Select defaultValue={selectValue}
                    onChange={onSelectWeight}
                    className='choose-weight-product--select'>
                <Option value={smallCost}>
                    <span>{smallCost} грн. {smallDesc}&nbsp;</span>
                </Option>
                <Option value={mediumCost}>
                    <span>{mediumCost} грн. {mediumDesc}&nbsp;</span>
                </Option>
                <Option value={largeCost}>
                    <span>{largeCost} грн. {largeDesc}&nbsp;</span>
                </Option>
            </Select>
        </Col>
    </Fragment>
)

export default ChooseWeightProduct
