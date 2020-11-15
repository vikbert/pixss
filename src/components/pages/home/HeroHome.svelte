<script>
  import HeroShowcase from "../../shared/HeroShowcase.svelte";
</script>

<style>
  .logo {
    width: 6rem;
    filter: invert(1);
    opacity: 0.75;
    margin: 0.8rem 0;
  }
  .description {
    text-align: center;
  }
</style>

<HeroShowcase pictureUrl="./static/rocket.svg">
  <div class="description">
    <img class="logo" src="./static/app.png" alt="" />
    <h3 class="bold opacity-75">A pragmatic CSS for Minimalist</h3>
    <h4 class="bold opacity-50">Small but good enough</h4>
    <div>
      <button class="is-rounded is-outlined">Download only ~5kb</button>
    </div>
  </div>
</HeroShowcase>
