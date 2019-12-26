import React, { Fragment } from 'react'
import { Col, Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScaleRight } from '@fortawesome/free-solid-svg-icons'
import { selectWeightProduct } from '../../actions'
import { connect } from 'react-redux'

import './choose-weight-product.css'

const { Option } = Select

const ChooseWeightProduct = ({
                                 chooseMenu, chooseId, smallCost, smallDesc,
                                 mediumCost, mediumDesc, largeCost, largeDesc,
                                 onSelect, oneCost, doubleCost, oneWeight, doubleWeight
                             }) => {

    const renderChoose = (chooseId) => {

        if (oneCost && doubleCost) {
            return (
                <Select defaultValue={chooseMenu[chooseId].selectValue}
                        onChange={(value) => onSelect(chooseId, value)}
                        className='choose-weight-product--select'>
                    <Option value={oneCost}>
                        <span>{oneCost} грн. - {oneWeight} </span>
                    </Option>
                    <Option value={doubleCost}>
                        <span>{doubleCost} грн. - {doubleWeight} </span>
                    </Option>
                </Select>
            )
        }
        return (
            <Select defaultValue={chooseMenu[chooseId].selectValue}
                    onChange={(value) => onSelect(chooseId, value)}
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
        )
    }

    return (
        <Fragment>
            <Col span={24}>
                <strong className='choose-weight-product--label'>
                    <FontAwesomeIcon icon={faBalanceScaleRight} />&nbsp; Выберите вес:
                </strong>
            </Col>
            <Col span={24}>
                {
                    chooseId === chooseMenu[chooseId].id ?
                        renderChoose(chooseId)
                        : null
                }
            </Col>
        </Fragment>
    )
}

const mapStateToProps = ({ productChooseMenu: { chooseMenu } }) => {
    return {
        chooseMenu
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelect: (id, val) => {
            dispatch(selectWeightProduct(id, val))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseWeightProduct)
