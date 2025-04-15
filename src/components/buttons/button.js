import './button.css'

export const createButton = (elementoPadre, text, mode, id) => {
  const button = document.createElement('button')
  elementoPadre.appendChild(button)
  button.textContent = text
  button.id = id
  button.classList.add('main-button')
  button.classList.add(mode)
}

export const createLinkButton = (elementoPadre, linkedId, text, mode) => {
  const button = document.createElement('a')
  elementoPadre.appendChild(button)
  button.href = linkedId
  button.textContent = text
  button.classList.add('main-button')
  button.classList.add(mode)
}
