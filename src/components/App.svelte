<header>
  <nav class="topbar" aria-label="primary">
    <div class="hamburger" id="drawer-icon"><span /> <span /> <span /></div>

    <a href="/pixss" class="logo-link">
      <div class="logo-small">
        <img class="logo" src="./static/app-small.png" alt="logo" />
      </div>
      <h1 class="title">Pixss</h1>
    </a>

    <div class="github">
      <a href="https://github.com/vikbert/pixss" target="_blank">
        <svg
          height="30"
          viewBox="0 0 16 16"
          version="1.1"
          width="64"
          aria-hidden="true"
          class="octicon octicon-mark-github v-align-middle">
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </a>
    </div>
  </nav>
  <nav class="sidebar" aria-label="secondary" id="drawer-bar">
    <div class="list">
      <a class="list-item" href="/#">base</a>
      <a class="list-item" href="/#">form</a>
      <a class="list-item" href="/#">layout</a>
      <a class="list-item" href="/#">feedback</a>
      <a class="list-item" href="/#">Navigation</a>
      <a class="list-item" href="/#">surface</a>
      <a class="list-item" href="/#">display</a>
      <a class="list-item" href="/#">utils</a>
    </div>
  </nav>
</header>
<main>
  <section class="hero is-primary">
    <div class="container flex-centered">
      <div class="hero-content has-text-centered">
        <div class="logo-large">
          <img id="logo-hero" src="./static/app-small.png" alt="logo" />
        </div>
        <h3>Pixss</h3>
        <p>A lightweight pragmatic CSS Framework</p>
        <a href="/pixss" class="button is-outlined is-rounded">Getting Started</a>
      </div>
    </div>
  </section>
  <section class="container">
    <button class="is-primary is-rounded">XXXX</button>
    <button class="is-secondary is-rounded">XXXX</button>
    <button class="is-tertiary is-rounded">XXXX</button>
    <button class="is-cleared is-rounded">XXXX</button>

    <strong>Multiple choices</strong>
    <label for="cars">Choose a car:</label>

    <select name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>
    <fieldset>
      <label class="checkbox">
        checked + disabled
        <input type="checkbox" checked disabled />
        <span />
      </label>

      <label class="checkbox">
        checked
        <input type="checkbox" checked="checked" />
        <span />
      </label>

      <label class="checkbox">
        unchecked
        <input type="checkbox" />
        <span />
      </label>
    </fieldset>

    <strong>Geben Sie Ihre Zahlungsweise an:</strong>
    <fieldset>
      <label class="radio" for="mc">
        Mastercard
        <input type="radio" id="mc" name="Zahlmethode" value="Mastercard" />
        <span />
      </label>
      <label class="radio" for="vi">
        Visa
        <input type="radio" id="vi" name="Zahlmethode" value="Visa" />
        <span />
      </label>
    </fieldset>

    <strong>Login Form</strong>
    <fieldset>
      <label for="email"> Email <input type="text" name="email" /> </label>
      <fieldset>
        <label for="password">
          Password
          <input type="text" name="password" />
        </label>
      </fieldset>

      <div class="px-1 py-1 is-warning is-rounded">
        <div class="card">
          <div class="card-title has-text-centered">
            <strong>Login Form</strong>
          </div>
          <div class="card-content">
            <label for="email">
              Email
              <input type="text" name="email" />
            </label>
            <label for="password">
              Password
              <input type="password" name="password" />
            </label>
            <button class="is-primary is-rounded float-right">submit</button>
          </div>
        </div>
      </div>
    </fieldset>
  </section>
  <section class="container">
    <div class="tabs">
      <ul>
        <li class="is-active"><a>Document</a></li>
        <li><a>Videos</a></li>
        <li><a>Examples</a></li>
        <li><a>Videos</a></li>
      </ul>
    </div>
  </section>

  <section class="container">
    <div class="row">
      <div class="column">
        <div class="widget">
          <div class="widget-icon"><span class="icon icon-library" /></div>
          <div class="widget-content">
            <h3 class="my-0">Base</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              explicabo rem reprehenderit inventore accusamus magni! Laborum,
              maiores voluptas?
            </p>
          </div>
        </div>

        <div class="widget">
          <div class="widget-icon">
            <span class="icon icon-insert-template" />
          </div>
          <div class="widget-content">
            <h3 class="my-0">Layout</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              explicabo rem reprehenderit inventore accusamus magni! Laborum,
              maiores voluptas?
            </p>
          </div>
        </div>

        <div class="widget">
          <div class="widget-icon"><span class="icon icon-tree" /></div>
          <div class="widget-content">
            <h3 class="my-0">Navigation</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              explicabo rem reprehenderit inventore accusamus magni! Laborum,
              maiores voluptas?
            </p>
          </div>
        </div>

        <div class="widget">
          <div class="widget-icon"><span class="icon icon-stack" /></div>
          <div class="widget-content">
            <h3 class="my-0">Display</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              explicabo rem reprehenderit inventore accusamus magni! Laborum,
              maiores voluptas?
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="widget">
          <div class="widget-icon"><span class="icon icon-quill" /></div>
          <div class="widget-content">
            <h3 class="my-0">Form</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              explicabo rem reprehenderit inventore accusamus magni! Laborum,
              maiores voluptas?
            </p>
          </div>
        </div>

        <div class="widget">
          <div class="widget-icon"><span class="icon icon-bubbles4" /></div>
          <div class="widget-content">
            <h3 class="my-0">Feeback</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              explicabo rem reprehenderit inventore accusamus magni! Laborum,
              maiores voluptas?
            </p>
          </div>
        </div>

        <div class="widget">
          <div class="widget-icon"><span class="icon icon-cogs" /></div>
          <div class="widget-content">
            <h3 class="my-0">Surface</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              explicabo rem reprehenderit inventore accusamus magni! Laborum,
              maiores voluptas?
            </p>
          </div>
        </div>

        <div class="widget">
          <div class="widget-icon"><span class="icon icon-aid-kit" /></div>
          <div class="widget-content">
            <h3 class="my-0">Utils</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
              explicabo rem reprehenderit inventore accusamus magni! Laborum,
              maiores voluptas?
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="footer flex-centered">
  <div class="">Pixss ♥️ Berlin © 2020</div>
</footer>
