# Navigation
`pixss` uses **three** utility classes to navigate the pages.

| class      | usage                                                                              |
|------------|------------------------------------------------------------------------------------|
| `.sidebar` | defines the sidebar, that has the fixed position on the left side of the page      |
| `.topbar`  | defines the top navigation bar, that has the fixed position on the top of the page |
| `.tabs`    | defines the responsive horizontal navigation tabs with basic styleing              |


## `.sidebar`
define the sidebar with `fixed` posistion on the left side of page. Sidebar is invisible as default, by using `.open` can be set to visible. [live coding demo](https://www.youtube.com/embed/5VM3IQwZidY)

```html
<nav class="sidebar open" id="sidebar">
    the customized sidebar items
</nav>
```

## `.topbar`
define the top bar with `fixed` posistion on the top of page. [live coding demo](https://www.youtube.com/embed/5VM3IQwZidY)

```html
 <nav class="topbar space-between">
    <div class="burger mx-2">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div>Logo</div>
    <div>Login</div>
  </nav>
```

<iframe height="423" style="width: 100%;" scrolling="no" title="pixss - sidebar" src="https://codepen.io/vikbert/embed/mdrpmKb?height=423&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/vikbert/pen/mdrpmKb'>pixss - sidebar</a> by Xun Zhou
  (<a href='https://codepen.io/vikbert'>@vikbert</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## `.tabs`
```html
<div class="tabs">
  <ul>
    <li class="is-active">
        <a href="#">layout</a>
    </li>
    <li>
        <a href="#">form</a>
    </li>
    <li>
        <a href="#">navigation</a>
    </li>
  </ul>
</div> 
```


<iframe height="477" style="width: 100%;" scrolling="no" title="pixss - tabs" src="https://codepen.io/vikbert/embed/xxEprZe?height=477&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/vikbert/pen/xxEprZe'>pixss - tabs</a> by Xun Zhou
  (<a href='https://codepen.io/vikbert'>@vikbert</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
