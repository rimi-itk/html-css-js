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
  document.body.classList.toggle('active')
})

for (var el of document.querySelectorAll('code')) {
  el.addEventListener('click', (event) => showMessage(event.target.innerHTML))
}

setInterval(() => {
  document.getElementById('clock').innerHTML = (new Date()).toString()
}, 1000)
