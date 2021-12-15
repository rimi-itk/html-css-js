window.addEventListener('load', (event) => {
  console.debug(event)
})

const showMessage = (message) => {
  document.getElementById('message').innerHTML = message
}

document.querySelector('button[data-message]').addEventListener('click', function(event) {
  console.log(this.dataset)
  showMessage(this.dataset.message)
})

document.querySelector('#alert').addEventListener('click', (event) => {
  alert(event.target.innerHTML)
})

document.querySelector('.toggle.body').addEventListener('click', (event) => {
  // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  document.body.classList.toggle('bg-dark')
  event.target.innerHTML = document.body.classList.contains('bg-dark') ? 'Disable dark mode' : 'Enable dark mode'
})

for (var el of document.querySelectorAll('code')) {
  el.addEventListener('click', (event) => showMessage(event.target.innerHTML))
}

setInterval(() => {
  document.getElementById('clock').innerHTML = (new Date()).toString()
}, 1000)
