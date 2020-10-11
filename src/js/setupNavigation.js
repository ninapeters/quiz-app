import { getAllDataJs, getDataJs } from './lib'

export default function setupNavigation() {
  const heading = getDataJs('heading')
  const pages = getAllDataJs('page')
  const navButtons = getAllDataJs('nav')

  navButtons.forEach(addNavigation)

  function addNavigation(navButton) {
    navButton.addEventListener('click', updatePage)
  }

  function updatePage(event) {
    const clickedButton = event.currentTarget
    const targetPageName = clickedButton.dataset.name

    heading.textContent =
      targetPageName === 'home'
        ? 'Quiz App'
        : targetPageName === 'bookmarks'
        ? 'Bookmarks'
        : targetPageName === 'create'
        ? 'Create'
        : targetPageName === 'profile'
        ? 'Profile'
        : ''

    pages.forEach((page) => {
      const pageName = page.dataset.name
      page.classList.toggle('hidden', pageName !== targetPageName)
    })

    navButtons.forEach((navButton) => {
      navButton.classList.toggle(
        'menu__button--active',
        navButton === clickedButton
      )
    })
  }
}
