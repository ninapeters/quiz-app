import { getAllDataJs, getDataJs } from './lib'

export default function setupDarkmode() {
  const darkmodeButton = getDataJs('darkmode-button')
  darkmodeButton.addEventListener('click', toggleDarkmode)

  function toggleDarkmode() {
    const body = getDataJs('body')
    const card = getAllDataJs('card')
    const form = getDataJs('form')
    const formCopy = getAllDataJs('form-card-copy')
    const profileImage = getDataJs('profile-pic')

    const buttonText = darkmodeButton.textContent.trim()
    darkmodeButton.textContent = buttonText === 'D' ? 'L' : 'D'

    body.classList.toggle('dm-body')

    card.forEach(addDarkmodeToggle)
    function addDarkmodeToggle(card) {
      card.classList.toggle('dm-card')
    }

    form.classList.toggle('dm-form-card')

    formCopy.forEach(addDarkmodeToggle)
    function addDarkmodeToggle(formCopy) {
      formCopy.classList.toggle('dm-form-card__copy')
    }

    profileImage.classList.toggle('dm-profile__intro--pic')
  }
}
