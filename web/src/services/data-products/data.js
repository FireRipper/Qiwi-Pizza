const _pizza = [
    {
        id: 0,
        img_full: 'static/img/pizza-img/pizza-img-full-size/burger-pizza-bg.png',
        img: '../../images/content-home-page/pizza-img/no-photo-small.jpg',
        name: 'Бургер Пицца',
        description: 'Фирменный соус, говяжий фарш, сыр моцарелла, маринованные огурчики, помидор',
        needChooseMenu: true,
        smallCost: 108,
        smallDesc: '(330г.)',
        mediumCost: 145,
        mediumDesc: '(610г.)',
        largeCost: 200,
        largeDesc: '(880г.)'
    },
    {
        id: 1,
        img_full: 'static/img/pizza-img/pizza-img-full-size/kurinaya-pizza-bg.png',
        img: '../../images/content-home-page/pizza-img/no-photo-small.jpg',
        name: 'Куриная',
        description: 'Цезарь соус, сыр моцарелла, куриное филе, помидоры, сладкий перец, шампиньоны',
        needChooseMenu: true,
        smallCost: 98,
        smallDesc: '(330г.)',
        mediumCost: 147,
        mediumDesc: '(610г.)',
        largeCost: 199,
        largeDesc: '(880г.)'
    },
    {
        id: 2,
        img_full: 'static/img/pizza-img/pizza-img-full-size/masnaya-pizza-bg.png',
        img: '../../images/content-home-page/pizza-img/no-photo-small.jpg',
        name: 'Мясная ',
        description: 'Соус пилати, бекон, помидоры, сыр моцарелла, сладкий перец, говядина, ветчина, пепперони',
        needChooseMenu: true,
        smallCost: 115,
        smallDesc: '(330г.)',
        mediumCost: 151,
        mediumDesc: '(610г.)',
        largeCost: 213,
        largeDesc: '(880г.)'
    },
    {
        id: 3,
        img_full: 'static/img/pizza-img/pizza-img-full-size/barbeku-pizza-bg.png',
        img: '../../images/content-home-page/pizza-img/no-photo-small.jpg',
        name: 'Барбекю-Мясная',
        description: 'Соус барбекю, говядина, сыр моцарелла, курица, сладкий перец, помидор',
        needChooseMenu: true,
        smallCost: 90,
        smallDesc: '(330г.)',
        mediumCost: 142,
        mediumDesc: '(610г.)',
        largeCost: 189,
        largeDesc: '(880г.)'
    },
    {
        id: 4,
        img_full: 'static/img/pizza-img/pizza-img-full-size/chili-pizza-bg.png',
        img: '../../images/content-home-page/pizza-img/no-photo-small.jpg',
        name: 'Чили',
        description: 'Соус пилати, сыр моцарелла, говядина, маслины, халапеньо, колбаски пепперони',
        needChooseMenu: true,
        smallCost: 120,
        smallDesc: '(330г.)',
        mediumCost: 190,
        mediumDesc: '(610г.)',
        largeCost: 240,
        largeDesc: '(880г.)'
    },
    {
        id: 5,
        img_full: 'static/img/pizza-img/pizza-img-full-size/4-cheese-pizza-bg.png',
        img: '../../images/content-home-page/pizza-img/no-photo-small.jpg',
        name: 'Четыре сыра',
        description: 'Соус пилати, сыры: пармезан, маасдам, дор-блю, моцарелла',
        needChooseMenu: true,
        smallCost: 96,
        smallDesc: '(330г.)',
        mediumCost: 185,
        mediumDesc: '(610г.)',
        largeCost: 215,
        largeDesc: '(880г.)'
    },
    {
        id: 6,
        img_full: 'static/img/pizza-img/pizza-img-full-size/gribnaya-pizza-bg.png',
        img: '../../images/content-home-page/pizza-img/no-photo-small.jpg',
        name: 'Грибная',
        description: 'Цезарь соус, сыр моцарелла, чеснок, помидоры, шампиньоны',
        needChooseMenu: true,
        smallCost: 133,
        smallDesc: '(330г.)',
        mediumCost: 195,
        mediumDesc: '(610г.)',
        largeCost: 246,
        largeDesc: '(880г.)'
    },
    {
        id: 7,
        img_full: 'static/img/pizza-img/pizza-img-full-size/peperonyy-pizza-bg.png',
        img: '../../images/content-home-page/pizza-img/no-photo-small.jpg',
        name: 'Пепперони',
        description: 'Соус пилати, сыр моцарелла, сладкий перец, шампиньоны, колбаски пепперони',
        needChooseMenu: true,
        smallCost: 140,
        smallDesc: '(330г.)',
        mediumCost: 205,
        mediumDesc: '(610г.)',
        largeCost: 268,
        largeDesc: '(880г.)'
    },
    {
        id: 8,
        img_full: 'static/img/pizza-img/pizza-img-full-size/gavayskaya-pizza-bg.png',
        img: '../../images/content-home-page/pizza-img/no-photo-small.jpg',
        name: 'Гавайская',
        description: 'Соус пилати, сыр моцарелла, ветчина, ананас',
        needChooseMenu: true,
        smallCost: 115,
        smallDesc: '(330г.)',
        mediumCost: 187,
        mediumDesc: '(610г.)',
        largeCost: 253,
        largeDesc: '(880г.)'
    }
]

const _salads = [
    {
        id: 0,
        img: 'static/img/salads-img/salads-img-size-for-card/with-telyatina-salad-bg-card.png',
        name: 'С телятиной',
        description: 'Телятина, помидор, перец, лук крымский, салат, пекинская капуста',
        needChooseMenu: true,
        smallCost: 42,
        smallDesc: '(150г.)',
        mediumCost: 78,
        mediumDesc: '(215г.)',
        largeCost: 98,
        largeDesc: '(300г.)'
    },
    {
        id: 1,
        img: 'static/img/salads-img/salads-img-size-for-card/with-semga-salad-bg-card.png',
        name: 'С семгой',
        description: 'Салат, помидор, огурец, семга, кунжут, соус унаги',
        needChooseMenu: true,
        smallCost: 49,
        smallDesc: '(150г.)',
        mediumCost: 83,
        mediumDesc: '(215г.)',
        largeCost: 106,
        largeDesc: '(300г.)'
    },
    {
        id: 2,
        img: 'static/img/salads-img/salads-img-size-for-card/grecheskiy-salad-bg-card.png',
        name: 'Греческий',
        description: 'Салат, маслины, сыр "Фета", помидор, огурец, перец, масло оливковое',
        needChooseMenu: true,
        smallCost: 38,
        smallDesc: '(150г.)',
        mediumCost: 60,
        mediumDesc: '(215г.)',
        largeCost: 89,
        largeDesc: '(300г.)'
    },
    {
        id: 3,
        img: 'static/img/salads-img/salads-img-size-for-card/tsezar-with-chicken-salad-bg-card.png',
        name: 'Цезарь с курицой',
        description: 'Салат, пекинская капуста, помидор, курица, соус',
        needChooseMenu: true,
        smallCost: 27,
        smallDesc: '(150г.)',
        mediumCost: 45,
        mediumDesc: '(215г.)',
        largeCost: 64,
        largeDesc: '(300г.)'
    },
    {
        id: 4,
        img: 'static/img/salads-img/salads-img-size-for-card/ovoschnoj-salad-bg-card.png',
        name: 'Овощной',
        description: 'Перец, помидор, огурец, салат, пекинская капуста',
        needChooseMenu: true,
        smallCost: 21,
        smallDesc: '(150г.)',
        mediumCost: 37,
        mediumDesc: '(215г.)',
        largeCost: 59,
        largeDesc: '(300г.)'
    }
]

const _combination = [
    {
        id: 0,
        img: 'static/img/set-of-img/set-of-img-size-for-card/set-of-number-1-bg-card.png',
        name: 'Пицца сэт №1',
        description: 'Мини Пицца "Грибная", мини Пицца "Чили", мини Пицца "Мясная"',
        needChooseMenu: false,
        cost: 356
    },
    {
        id: 1,
        img: 'static/img/set-of-img/set-of-img-size-for-card/set-of-number-2-bg-card.png',
        name: 'Пицца сэт №2',
        description: 'Мини Пицца "Гавайская", мини Пицца "Барбекю-Мясная", мини Пицца "Четыре сыра"',
        needChooseMenu: false,
        cost: 300
    },
    {
        id: 2,
        img: 'static/img/set-of-img/set-of-img-size-for-card/set-of-number-3-bg-card.png',
        name: 'Пицца сэт №3',
        description: 'Мини Пицца "Пепперони", мини Пицца "Бургер Пицца", мини Пицца "Куриная"',
        needChooseMenu: false,
        cost: 325
    }
]

const _buggets = [
    {
        id: 0,
        img: 'static/img/buggets-img/buggets-img-size-for-card/with-chiken-bugget-bg-card.png',
        name: 'С курицей',
        description: 'Багет, майонез, салат айсберг, сыр, помидоры, огурцы маринованные, филе курицы гриль',
        needChooseMenu: false,
        cost: 55
    },
    {
        id: 1,
        img: 'static/img/buggets-img/buggets-img-size-for-card/with-buzhenina-bugget-bg-card.png',
        name: 'С бужениной',
        description: 'Багет, буженина, сыр, кукуруза, помидор, майонез горчица.',
        needChooseMenu: false,
        cost: 40
    },
    {
        id: 2,
        img: 'static/img/buggets-img/buggets-img-size-for-card/with-vetchina-bugget-bg-card.png',
        name: 'С ветчиной',
        description: 'Багет, майонез, сыр, ветчина, зелень, базилик',
        needChooseMenu: false,
        cost: 43
    },
    {
        id: 3,
        img: 'static/img/buggets-img/buggets-img-size-for-card/with-cheese-and-tomato-bugget-bg-card.png',
        name: 'С сыром и помидорами',
        description: 'Багет, помидоры, сыр, зелень, майонез',
        needChooseMenu: false,
        cost: 30
    },
    {
        id: 4,
        img: 'static/img/buggets-img/buggets-img-size-for-card/with-cheese-and-garlic-bugget-bg-card.png',
        name: 'С чесноком и сыром',
        description: 'Багет, сыр, чеснок, масло, зелень, специи',
        needChooseMenu: false,
        cost: 28
    },
    {
        id: 5,
        img: 'static/img/buggets-img/buggets-img-size-for-card/with-cheese-and-bacon-bugget-bg-card.png',
        name: 'С беконом и сыром',
        description: 'Багет, майонез, твердый сыр, бекон, зеленый лук',
        needChooseMenu: false,
        cost: 35
    }
]

export {
    _pizza,
    _salads,
    _buggets,
    _combination
}
