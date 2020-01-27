import React from 'react'
import Pizza from '../../images/menu-icons/pizza-slice.svg'
import Salad from '../../images/menu-icons/salad.svg'
import Combo from '../../images/menu-icons/combo-menu.svg'
import Sandwich from '../../images/menu-icons/sandwich.svg'

import { Link } from 'react-router-dom'
import { Button } from 'antd'

import './product-menu.css'

const menuItem = [
    {
        keyItem: 1,
        clsImg: 'product--menu__card__pizza__img',
        img: Pizza,
        title: 'Пицца',
        text: ['Главный ингредиент пиццы — это',
            <strong key={1}>&nbsp;сыр</strong>, '. Традиционно популярна Пепперони с грибами,',
            <strong key={2}> Четыре сыра, Гавайская</strong>],
        link: '/products/pizza'
    },
    {
        keyItem: 2,
        clsImg: 'product--menu__card__salads__img',
        img: Salad,
        title: 'Салаты',
        text: ['Мы готовим исключительно из',
            <strong key={3}> свежих продуктов</strong>, ' — мясо и овощи, нежные  сыры.',
            <strong key={4}> Соусы собственного приготовления.</strong>],
        link: '/products/salads'
    },
    {
        keyItem: 3,
        clsImg: 'product--menu__card__combo__img',
        img: Combo,
        title: 'Комбо-меню',
        text: ['У нас в меню есть еще и сеты, которые включают в себя по',
            <strong key={5}>&nbsp;3 различных мини пиццы.</strong>],
        link: '/products/combo-menu'
    },
    {
        keyItem: 4,
        clsImg: 'product--menu__card__bread__img',
        img: Sandwich,
        title: 'Багеты',
        text: ['Все составляющие',
            <strong key={6}> австрийского багета</strong>, ' заслуживают конкретизации. Так, важен правильный,',
            <strong key={7}> свежий и в то же время нежный - хлеб.</strong>],
        link: '/products/sandwich'
    }
]

const renderProductMenu = menuItem.map(({ keyItem, clsImg, img, title, text, link }) => {
    return (
        <div className="product--menu__card" key={keyItem}>
            <div className={`${clsImg} product--menu__card__img`} data-text={title}>
                <img src={img} alt={title} />
            </div>
            <div className="product--menu__card__content">
                <div>
                    <h3 className="product--menu__card__content__title">{title}</h3>
                    <p className="product--menu__card__content__text">{text}</p>
                    <Button type={'primary'} size={'large'} className='product--menu__card__content__btn'>
                        <Link to={link}>Перейти</Link>
                    </Button>
                </div>
            </div>
        </div>

    )
})

const ProductMenu = () => {
    return (
        <div className="product--menu">
            {renderProductMenu}
        </div>
    )
}

export default ProductMenu
