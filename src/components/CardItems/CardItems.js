import React, { Component } from 'react'
import QiwiPizzaServices from '../../services/qiwi-pizza-services'
import { Button, Card, Col, Input, Row, Select } from 'antd'
import noPhoto from '../../images/no-photo/no-photo-2-var/no-photo-var2-570px.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScaleRight, faCartPlus, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import './CardItems.css'

const { Meta } = Card
const { Option } = Select

export default class CardItems extends Component {

    qiwiService = new QiwiPizzaServices()

    defaultSelectValue = 'Выберите...'

    state = {
        pizzaList: this.qiwiService.getAllPizza(),
        selectedNumberValue: 0,
        totalCost: 0,
        defaultCost: 0,
        selectValue: this.defaultSelectValue,
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
    }

    handleChangeSelectItem = (id, value) => {
        this.setState({
            totalCost: value,
            defaultCost: value,
            selectValue: value,
            selectedNumberValue: 1
        })
    }

    handleChangeSelectNumber = (value) => {
        console.log(value)
        this.updateTotalCost(value)

        this.setState({
            selectedNumberValue: value
        })
    }

    updateTotalCost = (val) => {
        this.setState(({ selectedNumberValue, defaultCost }) => {
            if(val > selectedNumberValue || selectedNumberValue > val) {
                const result = defaultCost * val
                return {
                    totalCost: result
                }
            }
        })
    }

    renderItems(arr) {
        const { selectValue, selectedNumberValue, defaultCost, totalCost } = this.state
        return arr.map(({
                            id, name, description,
                            smallDesc, smallCost,
                            mediumDesc, mediumCost,
                            largeDesc, largeCost
                        }) => {
            return (
                <Col xs={{ span: 20 }} sm={{ span: 9, offset: 1 }} md={{ span: 9, offset: 1 }}
                     lg={{ span: 6, offset: 1 }} key={id}
                     className='card-items'>
                    <Card hoverable
                          cover={<img src={noPhoto} alt={name} />}>
                        <Meta className='card-items--description' title='Состав продукта:' description={description} />
                        <Row type='flex' className='card-items--choose'>
                            <Col span={24}>
                                <strong className='card-items--choose--label'><FontAwesomeIcon icon={faBalanceScaleRight} />&nbsp; Выберите вес:</strong>
                            </Col>
                            <Col span={24}>
                                <Select defaultValue={selectValue}
                                        onChange={(value) => this.handleChangeSelectItem(id, value)}
                                        className='card-items--select'>
                                    <Option
                                        value={smallCost}
                                    >
                                        <span>
                                            {smallCost} грн. {smallDesc}&nbsp;
                                        </span>
                                    </Option>
                                    <Option
                                        value={mediumCost}
                                    >
                                        <span>
                                            {mediumCost} грн. {mediumDesc}&nbsp;
                                        </span>
                                    </Option>
                                    <Option
                                        value={largeCost}
                                    >
                                        <span>
                                            {largeCost} грн. {largeDesc}&nbsp;
                                        </span>
                                    </Option>
                                </Select>
                            </Col>
                            <Col span={24}>
                                <strong className='card-items-select--number--label'><FontAwesomeIcon icon={faPlusCircle} />&nbsp; Количество: </strong>
                            </Col>
                            <Select
                                defaultValue={selectedNumberValue}
                                value={selectedNumberValue}
                                disabled={defaultCost <= 0 ? true : null}
                                className='card-items-input--number'
                                onChange={(value) => this.handleChangeSelectNumber(value)}>
                                {this.generateArrayNumbers()}
                            </Select>
                        </Row>
                        <Row type='flex' align='middle'>
                            <Col xs={24}>
                                <Input
                                    addonBefore={(<strong>Итого:</strong>)}
                                    value={`${totalCost} грн.`}
                                />
                            </Col>
                            <Col xs={24}>
                                <Button type='primary' className='card-items--btn'><FontAwesomeIcon icon={faCartPlus} />&nbsp; Заказать</Button>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            )
        })
    }

    generateArrayNumbers() {
        return this.state.numbers.map((num) => {
            return <Option key={num} value={num}>{num}</Option>
        })
    }

    render() {
        console.log(this.state)
        const { pizzaList } = this.state

        return (
            <Col sm={{ span: 22, offset: 1 }} lg={{ span: 20, offset: 2 }} className='card-items-wrapper--background'>
                <Row type='flex' align='middle' justify='center'>
                    {this.renderItems(pizzaList)}
                </Row>
            </Col>
        )
    }
}
