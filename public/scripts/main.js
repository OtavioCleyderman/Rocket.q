import Modal from './modal.js'
import { copyRoomId } from './copyRoomId.js'


const modal = Modal()
const modalTitle = document.querySelector('.modal h2')
const modalDescription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')

// pegar todos os botões com a classe check
const checkButtons = document.querySelectorAll('.actions a.check')

checkButtons.forEach(button => {
  // Adicionar a escuta
  button.addEventListener('click', handleClick)
})

// pegar todos os botões com a classe delete
const deleteButtons = document.querySelectorAll('.actions a.delete')

deleteButtons.forEach(button => {
  // Adicionar a escuta
  button.addEventListener('click', (event) => handleClick(event, false))
})



function handleClick(event, check = true) {
  event.preventDefault()

  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'
  const roomId = document.querySelector('#room-id').dataset.id
  const questionId = event.target.dataset.id


  const form = document.querySelector('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLocaleLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLocaleLowerCase()}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')
  // Abrir modal
  modal.open()

}
/* Copiar o número da sala */
copyRoomId()

