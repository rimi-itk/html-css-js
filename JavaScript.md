---
title: JavaScript
permalink: /JavaScript
order: 3
---

# JavaScript

[JavaScript](https://en.wikipedia.org/wiki/JavaScript) er et programmeringssprog
der kan fortolkes af en browser.

Et [html](HTML)-dokument kan inkludere en JavaScript-fil via et `script`-element:

```html
<script src="scripts.js"></script>
```

**Bemærk**: Det virker ikke hvis man skriver `<script src="…"/>` selvom `script`-elementet
er tomt!

[Html](HTML)-dokumentet der vises kan tilgås og manipuleres via The [Document Object
Model](https://en.wikipedia.org/wiki/Document_Object_Model).

# “Event listeners”

<!-- text-snippet(src="examples/scripts.js" from='window.addEventListener' to="}") -->
```js
window.addEventListener('load', (event) => {
  console.debug(event)
})
```
<!-- end-text-snippet -->

# Funktioner

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

[`Element.classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
kan bruges til at manipulere css-klasser på et element:

<!-- text-snippet(src="examples/scripts.js" from='.toggle.body' to="})") -->
```js
document.querySelector('.toggle.body').addEventListener('click', (event) => {
  // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  document.body.classList.toggle('bg-dark')
  event.target.innerHTML = document.body.classList.contains('bg-dark') ? 'Disable dark mode' : 'Enable dark mode'
})
```
<!-- end-text-snippet -->

# Regelmæssighed

<!-- text-snippet(src="examples/scripts.js" from='setInterval' to="+3") -->
```js
setInterval(() => {
  document.getElementById('clock').innerHTML = (new Date()).toString()
}, 1000)
```
<!-- end-text-snippet -->
