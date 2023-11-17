import {
  createElement,
  createHeader,
} from '../../script/layout'

const MAIN__CARD__LIST = [
  {
    viewed: false,
    date: '25.01',
    text: `До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс`,
    categoryList: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
  },
  {
    viewed: true,
    date: '15.01',
    text: `Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій.`,
    categoryList: [{ text: 'Важливо', id: 1 }],
  },
  {
    viewed: false,
    date: '25.01',
    text: `До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс`,
    categoryList: [
      { text: 'Важливо', id: 1 },
      { text: 'Нова', id: 2 },
    ],
  },
]

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', 'Мій блог')

page.append(title)

const createMain = () => {
  const main = createElement('main', 'card-list')

  MAIN__CARD__LIST.forEach((cardData) => {
    const card = createElement(
      'div',
      cardData.viewed
        ? 'card card--viewed button'
        : 'card button',
    )

    const cardHeader = createElement('div', 'card__header')

    const cardCategoryList = createElement(
      'div',
      'card__category-list',
    )

    cardData.categoryList.forEach((categ) => {
      const category = createElement(
        'span',
        `card__category card__category--${categ.id}`,
        categ.text,
      )
      cardCategoryList.append(category)
    })

    cardHeader.append(cardCategoryList)

    const cardDate = createElement(
      'span',
      'card__date',
      cardData.date,
    )

    cardHeader.append(cardDate)

    card.append(cardHeader)

    //====

    const cardText = createElement(
      'p',
      'card__text',
      cardData.text,
    )
    card.append(cardText)

    main.append(card)
  })
  return main
}

const main = createMain()

page.append(main)
