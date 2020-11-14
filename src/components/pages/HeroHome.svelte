<style>
  .root {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
    margin: 4rem 0;
  }
  .box {
    display: grid;
    place-items: center;
    margin: 2rem 0;
  }
  .logo {
    width: 6rem;
    filter: invert(1);
    opacity: 0.75;
    margin: 0.8rem 0;
  }
</style>

<div class="hero is-primary">
  <div class="container">
    <div class="root">
      <div class="box">
        <img class="logo" src="./static/app.png" alt="" />
        <h3 class="bold opacity-75">A pragmatic CSS for Minimalist</h3>
        <h4 class="bold opacity-50">Small but good enough</h4>
        <button class="is-rounded is-outlined">Download only ~5kb</button>
      </div>
      <div class="box">
        <img class="hide-mobile" width="370" src="./static/rocket.svg" alt="" />
      </div>
    </div>
  </div>
</div>
