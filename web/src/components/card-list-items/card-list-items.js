import React from 'react'
import { Button, Card, Col, Input, Row } from 'antd'
import noPhoto from '../../images/no-photo/no-photo-2-var/no-photo-var2-570px.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import ChooseQuantityProduct from '../choose-quantity-product'
import ChooseWeightProduct from '../choose-weight-product'

import './card-list-items.css'

const { Meta } = Card

const CardListItems = ({ selectValue, selectedNumberValue, defaultCost,
                           totalCost, arrayProducts, numbers, onSelectWeight, onSelectQuantity }) => {

    const renderProducts = (arr) =>
        arr.map(({ id, name, description, smallDesc, smallCost, mediumDesc, mediumCost, largeDesc, largeCost }) => {
            return (
                <Col xs={{ span: 20 }} sm={{ span: 9, offset: 1 }} md={{ span: 9, offset: 1 }}
                     lg={{ span: 6, offset: 1 }}
                     key={id} className='card-list-items'>
                    <Card hoverable cover={<img src={noPhoto} alt={name} />}>
                        <Meta className='card-list-items--description' title='Состав продукта:'
                              description={description} />
                        <Row type='flex' className='card-list-items--choose'>
                            <ChooseWeightProduct
                                selectValue={selectValue} largeCost={largeCost}
                                largeDesc={largeDesc} mediumCost={mediumCost}
                                mediumDesc={mediumDesc} smallCost={smallCost}
                                smallDesc={smallDesc}
                                onSelectWeight={onSelectWeight}
                            />
                            <ChooseQuantityProduct
                                defaultValue={selectedNumberValue}
                                defaultCost={defaultCost}
                                numbers={numbers}
                                onSelectQuantity={onSelectQuantity}
                            />
                        </Row>
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
                    </Card>
                </Col>
            )
        })

    return (
        renderProducts(arrayProducts)
    )
}

export default CardListItems
