# Utils
`pixss` provides the following utility classes to extend the standard styling. They cover the following perspectives:

| perspective | description                                                      |
|-------------|------------------------------------------------------------------|
| position    | adjust the alignment of web elements, e.g. flexbox position      |
| box         | extend the styling of the box/div elements, e.g. rounded, shadow |
| text        | adjust the formatting of text elements, e.g. opacity             |
| spacing     | set the margin and padding spacing                               |


## Postion

### `.centered-xy`
`.centered-xy` defines a container that has its child element with super centered position, i.e. both horizontally and vertically: `x` for horizontal alignment, `y` for vertical alignment.

```html
<div class="centered-xy">
    <button>centered button</button>
</div>
```

### `.space-between`
`.space-between` defines a container that has its children elements distributed by using flexbox property `space-between`.

```html
<div class="space-between">
    <div>element-1</div>
    <div>element-2</div>
    <div>element-3</div>
</div> 
```

### `.float-left` & `.float-right`
`.float-left` & `.float-right` allow the children elements within the container to float to `right` or `left`.

```html
<div class="float-right">
    <div>element-1</div>
    <div>element-2</div>
    <div>element-3</div>
</div> 
```

<iframe height="880" style="width: 100%;" scrolling="no" title="pixss - position" src="https://codepen.io/vikbert/embed/MWjVQzb?height=903&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/vikbert/pen/MWjVQzb'>pixss - position</a> by Xun Zhou
  (<a href='https://codepen.io/vikbert'>@vikbert</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


## box

<iframe height="570" style="width: 100%;" scrolling="no" title="pixss - box" src="https://codepen.io/vikbert/embed/poELVXm?height=570&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/vikbert/pen/poELVXm'>pixss - box</a> by Xun Zhou
  (<a href='https://codepen.io/vikbert'>@vikbert</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## text

<iframe height="470" style="width: 100%;" scrolling="no" title="pixss - text" src="https://codepen.io/vikbert/embed/JjRLBjv?height=561&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/vikbert/pen/JjRLBjv'>pixss - text</a> by Xun Zhou
  (<a href='https://codepen.io/vikbert'>@vikbert</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## visibility

<iframe height="651" style="width: 100%;" scrolling="no" title="pixss - visibility" src="https://codepen.io/vikbert/embed/GRjxBvR?height=651&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/vikbert/pen/GRjxBvR'>pixss - visibility</a> by Xun Zhou
  (<a href='https://codepen.io/vikbert'>@vikbert</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## spacing
