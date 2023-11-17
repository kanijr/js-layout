import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()

page.append(header)

const title = createElement('h1', 'title', "Комм'юніті")

page.insertAdjacentElement('beforeend', title)

const createNav = (activeIndex) => {
  const nav = createElement('nav', 'nav')

  const button1 = createElement(
    'button',
    `nav__button${
      activeIndex === 1 ? ' nav__button-active' : ''
    } button`,
    'База знань',
  )

  const button2 = createElement(
    'button',
    `nav__button${
      activeIndex === 2 ? ' nav__button--active' : ''
    } button`,
    'Інформація',
  )

  nav.insertAdjacentElement('beforeend', button1)

  nav.insertAdjacentElement('beforeend', button2)

  return nav
}

const nav = createNav(2)

page.insertAdjacentElement('beforeend', nav)

const createMain = () => {
  const main = createElement('main', 'main')

  const image = createElement('img')

  image.src = '/img/community_welcom.png'

  main.insertAdjacentElement('beforeend', image)

  const content = createElement('div', 'main__content')

  const title = createElement(
    'h2',
    'main__title',
    'Що таке база знань?',
  )

  const text = createElement(
    'p',
    'main__text',
    'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач. ',
  )

  content.insertAdjacentElement('beforeend', title)
  content.insertAdjacentElement('beforeend', text)

  main.insertAdjacentElement('beforeend', content)

  const button = createElement(
    'a',
    'main__button',
    "Перейти до кюм'юніті у Телеграм",
  )

  button.href = 'https://web.telegram.org/'

  main.insertAdjacentElement('beforeend', button)

  return main
}

const main = createMain()

page.insertAdjacentElement('beforeend', main)
