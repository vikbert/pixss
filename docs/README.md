<div align="center">
    <img src="https://vikbert.github.io/pixss/build/static/app-small.png" alt="" width="50" />
    <h1 style="font-weight: bolder; margin-top: 0px" class="opacity-75">PIXSS</h1>
    <h3 class="opacity-50">A pragmatical css for Minimalist</h3>
</div>

<div align="center">
  <!-- <img src="https://vikbert.github.io/pixss/demo/static/app-small.png" alt="pixss" />
  <h3>A pragmatic CSS for Minimalist</h3> -->
  <p>Pixss provides a minimal setup of styles for a programatic and clean starting point. It is specially designed for better performance and higher productivity. <strong>Only 4 kb gzipped</strong>! 
  </p>

  <p>
    <a href="#">
      <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square" alt="MIT License">
    </a>
  </p>
</div>

---

## Install

```bash
 npm install pixss
```

Then use the css files from `node_modules/pixss`

```bash
├── dist
│   └── styles
│       ├── pixss.css
│       ├── pixss.css.map
│       ├── pixss.min.css
│       └── pixss.min.css.map
```

## Customize the CSS
The project structure:
```bash
src/
└── styles
    ├── base
    │   ├── _Base.sass
    │   ├── _Breakpoint.sass
    │   ├── _Color.sass
    │   ├── _Elements.sass
    │   ├── _Reset.sass
    │   └── _Typography.sass
    ├── form
    │   ├── _Button.sass
    │   ├── _Checkbox.sass
    │   └── _Form.sass
    ├── layout
    │   ├── _Container.sass
    │   ├── _Footer.sass
    │   ├── _Grid.sass
    │   └── _Hero.sass
    ├── navigation
    │   ├── _Sidebar.sass
    │   ├── _Tabs.sass
    │   └── _Topbar.sass
    ├── pixss.sass
    ├── utils
    │   ├── _Icons.sass
    │   ├── _Spacing.sass
    │   └── _Utility.sass
    └── widget
        ├── _Card.sass
        ├── _Popup.sass
        └── _Showcase.sass 
```

## Start the development
```bash
 npm run dev 
```
##  Build the source code
```bash
 npm run build 
```
## Publish to NPM
```bash
 npm version major
 npm publish 
```



## License

MIT © [vikbert](https://vikbert.github.io/)
