<style>
  .root {
    display: flex;
    align-items: center;
    margin: 0 0 2rem 0;
  }
  img {
    width: 4rem;
    margin: 1rem;
    border-radius: 50%;
    padding: 0.5rem;
  }
  span {
    font-size: 1.6rem;
    padding: 1rem;
  }
</style>

<div class="root">
  <img src="./static/hint.png" alt="" />
  <span>
    <slot />
  </span>
</div>
