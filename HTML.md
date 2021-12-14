---
title: "HTML"
permalink: /HTML
order: 1
---

# HTML

[HyperText Markup Language](https://developer.mozilla.org/en-US/docs/Web/HTML)
er et [xml](https://en.wikipedia.org/wiki/XML)-sprog.

Består af [*elementer*](https://en.wikipedia.org/wiki/XML#Element) der hver har
et *navn*, `name`, består af et
[*start-tag*](https://en.wikipedia.org/wiki/XML#Tag) (`<name>`) og et
[*slut-tag*](https://en.wikipedia.org/wiki/XML#Tag) (`</name>`) eller er et
[*tomt element*](https://en.wikipedia.org/wiki/XML#Tag) (`<name/>`).

```html
<h1>Det første kapitel</h1>

<hr/>
```

Et element kan have [*attributter*](https://en.wikipedia.org/wiki/XML#Attribute)
der angives inden i start-tagget og som hver har et *navn* og en *værdi*
(`name="value"`):

```html
<p id="lead" class="important">I dette afsnit …</p>
```

Nogle elementer kan indeholde andre elementer:

<!-- text-snippet(src="examples/index.html" strip-leading-spaces from='class="container"' to="+12" suffix="</div>") -->
```html
<div class="container">
  <h1>Det første kapitel</h1>

  <hr/>

  <p class="lead">I dette afsnit …</p>

  <p>
    <strong>Vigtigt</strong>: Du kan læse om
    <a href="https://da.wikipedia.org/wiki/Nissebanden">Nissebanden</a>
    på urlen <code>https://da.wikipedia.org/wiki/Nissebanden</code>
  </p>
</div>
```
<!-- end-text-snippet -->

[HTML elements reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
