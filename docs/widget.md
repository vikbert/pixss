# Widget
`pixss` defines the most common used widgets, such as `card`, `popup`, `showcase` to constructure a web page quickly.

## Widget: card
`card` is a `pixss` widget with corresponding box shadow, which is used commonly for the forms, image with the text, and so on. The `card` widget comprises just the elememnts that you can mix: `card-title`, `card-image` and `card-content`.

```html
<div class="card">
    <div class="card-title">
      <h4 class="opacity-75">Login form</h4>
    </div>
    <div class="card-content">
      <p>card content</p>
    </div>
</div>
```


<iframe height="899" style="width: 100%;" scrolling="no" title="pixss - card" src="https://codepen.io/vikbert/embed/XWjEXKw?height=899&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/vikbert/pen/XWjEXKw'>pixss - card</a> by Xun Zhou
  (<a href='https://codepen.io/vikbert'>@vikbert</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Widget: popup
`popup` is a lightbox implementation in `pixss` that comprises the elements that you can mix: `title`, `content`, `action`. With the utility class `.full-width`, `popup` can be displayed in fullscreen of mobile devices.

```html
<div class="overlay open">
    <div class="popup">
        <div class="title">popup title</div>
        <div class="content">popup content</div>
    </div>
</div>
```

<iframe height="384" style="width: 100%;" scrolling="no" title="pixss - popup" src="https://codepen.io/vikbert/embed/QWKmKgV?height=384&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/vikbert/pen/QWKmKgV'>pixss - popup</a> by Xun Zhou
  (<a href='https://codepen.io/vikbert'>@vikbert</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## Widget: showcase

`showcase` is a `pixss` widget that has an image icon, title and description. It comprises the elements that you can mix: `.icon`, `.content`.

<iframe height="328" style="width: 100%;" scrolling="no" title="pix - showcase" src="https://codepen.io/vikbert/embed/BaLrppj?height=328&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/vikbert/pen/BaLrppj'>pix - showcase</a> by Xun Zhou
  (<a href='https://codepen.io/vikbert'>@vikbert</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
