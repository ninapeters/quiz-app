import { getAllDataJs } from './lib'

export default function setupCards() {
  const cards = getAllDataJs('card')
  cards.forEach(addCardLogic)
}

function addCardLogic(card) {
  addBookmarkToggle(card)
  toggleAnswer(card)
}

function addBookmarkToggle(card) {
  const bookmark = card.querySelector('[data-js=card-bookmark]')
  bookmark.addEventListener('click', toggleBookmark)
}

function toggleBookmark(event) {
  event.currentTarget.classList.toggle('card__bookmark--active')
}

function toggleAnswer(card) {
  const answerButton = card.querySelector('[data-js=answer-button]')

  answerButton.addEventListener('click', () => {
    const buttonText = answerButton.textContent.trim()
    const answerText = card.querySelector('[data-js=answer-text]')
    answerButton.textContent =
      buttonText === 'Show answer' ? 'Hide answer' : 'Show answer'
    answerText.classList.toggle('hidden')
  })
}
