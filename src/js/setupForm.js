import { getDataJs } from './lib'

export default function setupForm() {
  const form = getDataJs('form')

  form.addEventListener('submit', (event) => {
    event.preventDefault()
    form.reset()
  })
}
