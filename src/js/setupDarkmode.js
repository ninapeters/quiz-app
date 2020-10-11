import { getAllDataJs, getDataJs } from './lib'

export default function setupDarkmode() {
  const darkmodeButton = getDataJs('darkmode-button')
  darkmodeButton.addEventListener('click', toggleDarkmode)

  function toggleDarkmode() {
    const body = getDataJs('body')
    const button = getDataJs('answer-button')
    const card = getDataJs('card')
    const formCopy = getDataJs('form-card-copy')
    const profileImage = getDataJs('profile-pic')

    const buttonText = darkmodeButton.textContent.trim()
    darkmodeButton.textContent = buttonText === 'D' ? 'L' : 'D'

    body.classList.toggle('dm-body')
    button.classList.toggle('dm-button')
    card.classList.toggle('dm-card')
    formCopy.classList.toggle('dm-card')
    profileImage.classList.toggle('dm-profile__intro--pic')
  }
}
