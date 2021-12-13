# HTML

HyperText Markup Language er et XML-sprog.

Består af *elementer* der hver har et *navn*, `name`, består af et *starttag*
(`<name>`) og et *sluttag* (`</name>`) eller er et *tomt element* (`<name/>`).

```html
<h1>Det første kapitel</h1>

<hr/>
```

Et element kan have *attributter* der angives inden i starttagget og som hver har et *navn* og en *værdi* (`name="value"`):

```html
<p id="lead" class="important">I dette afsnit …</p>
```

Nogle elementer kan indeholde andre elementer:

<!-- text-snippet(src="examples/index.html" strip-leading-spaces from='class="container"' to="+11" suffix="</div>") -->
```html
<div class="container">
  <h1>Det første kapitel</h1>

  <hr/>

  <p id="lead" class="important">I dette afsnit …</p>

  <p>
    <strong>Vigtigt</strong>: Du kan læse om
    <a href="https://da.wikipedia.org/wiki/Nissebanden">Nissebanden</a>
    på urlen <code>https://da.wikipedia.org/wiki/Nissebanden</code>
  </p>
</div>
```
<!-- end-text-snippet -->
