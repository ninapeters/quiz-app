import { getAllDataJs, getDataJs } from './lib'

export default function setupCards() {
  const cards = getAllDataJs('card')
  cards.forEach(addCardLogic)
}

function addCardLogic(card) {
  addBookmarkToggle(card)
  toggleAnswer(card)
}

function addBookmarkToggle(card) {
  const bookmark = card.getDataJs('card-bookmark')
  bookmark.addEventListener('click', toggleBookmark)
}
function toggleBookmark(event) {
  event.currentTarget.classList.toggle('card__bookmark--active')
}

function toggleAnswer(card) {
  const answerButton = card.getDataJs('answer-button')
  const buttonText = answerButton.textContent.trim()
  const answerText = card.getDataJs('answer-text')

  button.addEventListener('click', () => {
    answerButton.textContent =
      buttonText === 'Show answer' ? 'Hide answer' : 'Show answer'
    answerText.classList.toggle('hidden', buttonText === 'Hide answer')
  })
}
