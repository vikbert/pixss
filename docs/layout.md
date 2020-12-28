# Layout
<iframe width="560" height="315" src="https://www.youtube.com/embed/H60Kx0e5yDA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

`pixss` defines the most necessary classes to construct the simple layout with the common used classes easily:
- `.topbar`
- `.main`
- `.container`
- `.footer`

<img src="./images/layout.png" width="570">

## `.topbar`
define the Topbar with `fixed` position in page header. By using utility class `space-between` the child nodes can be displayed like the following example: the `logo` element will be positioned on the left, and the `navigation` elements will be showed on the right side.

```html
  <div class='.topbar'>
    <div class="container space-between">
        <div>logo</div>
        <div>navigation</div>
    </div>
  </div>
```

## `.main`
class `.main` defines the main container for the essential page content.
```html
<main class="main"></main>
```

## `.footer`
class `.footer` defines the footer section, that has fixed position on the bottom of the page.
```html
<footer class="footer"></footer>
```

## `.container`
class `.container` is the placeholder for the page content, that has predefined position, margin and padding values.
```html
<div class="container"></div>
```

## `.hero`
class `.hero` is used always for the definition of `showcase` page block. It can be highlighted by using the classes, such as `.is-primary`, `.is-secondary`, `.is-info`, `.is-warning`, `.is-success`, `.is-danger`.
```html
<div class="hero is-primary"></div>
```
