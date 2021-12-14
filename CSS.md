---
permalink: /CSS
order: 2
---

# CSS

[Cascading Style Sheets](https://en.wikipedia.org/wiki/CSS) beskriver (visuel)
præsentation af xml-dokumenter, oftest (x)html, via *regler*.

Et [html](HTML)-dokument kan pege på et stylesheet via et `link`-element:

```html
<link rel="stylesheet" href="styles.css"/>
```

En regel består af en [*udvælger*
(*selector*)](https://en.wikipedia.org/wiki/CSS#Selector) der identificerer
elementer og en række
[*erklæringer*](https://en.wikipedia.org/wiki/CSS#Declaration_block) (omklamret
af `{` og `}` og adskilt af `;`) der definerer visningen af elementerne.

En erklæring består af en <dfn>egenskab</dfn> og en <dfn>værdi</dfn> adskilt af `:`, fx `color: red`.

<!-- text-snippet(src="examples/styles.css" from='h1' to="}") -->
```css
h1 {
  font-size: 1.5;
  color: blue;
  text-transform: uppercase;
}
```
<!-- end-text-snippet -->

## “The cascade”

<!-- text-snippet(src="examples/styles.css" from="21" to="+9") -->
```css
/* Style p elements. */
p {
  color: hsl(0, 25%, 50%);
}

/* Style p elements with a class attribute containg the word "lead". */
p[class~="lead"] {
  font-style: italic;
}
```
<!-- end-text-snippet -->

Resultatet er at elementerne `p[class~="lead"]` både får en farve og kursiv skrift.

## Specificitet

[Specificiteten](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
styrer rækkefølgen på reglerne. Regler med samme specificitet anvendes i den
rækkefølge der læses i.

Ikke alle eksempler bør efterleves, fx ikke [ER-1230: Increased CSS rule
specificity and
importance](https://github.com/eReolen/base/commit/d43e71e5db42321ff11bb5a7615f4ec235705ab9)


## Eksempler

<!-- text-snippet(src="examples/styles.css" from='#message') -->
```css
#message {
  border-style: solid;
  border-width: 0.1em;
  border-color: orange;
}

.message {
  padding: 1em;
}

/* Style p elements. */
p {
  color: hsl(0, 25%, 50%);
}

/* Style p elements with a class attribute containg the word "lead". */
p[class~="lead"] {
  font-style: italic;
}

/* Style a elements with href attribute values starting with "https://". */
a[href^="https://"] {
  font-weight: bold;
}

/* Style elements having the classes "menu-item" and "active". */
.menu-item.active {
  font-weight: bold;
}

/* Style p elements following a p element. */
p + p {
  margin-top: 1em;
}

code {
  outline: solid 1px hsl(100, 25%, 25%);
  padding: .1em;
  display: inline-block;
}

/* Elements with class "number" inside a "table" element. */
table .number {
  text-align: right;
}

body.active {
  background-color: hsl(100, 50%, 50%);
}

```
<!-- end-text-snippet -->
