# JavaScript

<https://en.wikipedia.org/wiki/JavaScript>

[Document Object Model](https://en.wikipedia.org/wiki/Document_Object_Model)

<!-- text-snippet(src="examples/scripts.js" from='window.addEventListener' to="}") -->
```js
window.addEventListener('load', (event) => {
  console.debug(event)
})
```
<!-- end-text-snippet -->

<!-- text-snippet(src="examples/scripts.js" from='showMessage' to="+8") -->
```js
const showMessage = (message) => {
  document.getElementById('message').innerHTML = message
}

document.querySelector('button[data-message]').addEventListener('click', function(event) {
  console.log(this.dataset)
  showMessage(this.dataset.message)
})

```
<!-- end-text-snippet -->

<!-- text-snippet(src="examples/scripts.js" from='setInterval' to="+2") -->
```js
setInterval(() => {
  document.getElementById('clock').innerHTML = (new Date()).toString()
}, 1000)
```
<!-- end-text-snippet -->
