import React, { Fragment } from 'react'
import { Col, Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons'
import './choose-weight-product.css'
import { connect } from 'react-redux'

const { Option } = Select

const ChooseWeightProduct = ({ selectValue, smallCost, smallDesc,
                                 mediumCost, mediumDesc, largeCost, largeDesc }) => {
    return (
        <Fragment>
            <Col span={24}>
                <strong className='choose-weight-product--label'>
                    <FontAwesomeIcon icon={faBalanceScaleRight} />&nbsp; Выберите вес:
                </strong>
            </Col>
            <Col span={24}>
                <Select defaultValue={selectValue}
                        onChange={() => {}}
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
}

const mapStateToProps = ({ selectValue }) => {
    return {
        selectValue
    }
}

export default connect(mapStateToProps)(ChooseWeightProduct)
