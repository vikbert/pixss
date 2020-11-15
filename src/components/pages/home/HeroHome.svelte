<script>
  import HeroShowcase from "../../shared/HeroShowcase.svelte";
  const hostUrl = location.origin;
  const cssUrl = hostUrl.includes("localhost")
    ? hostUrl + "/styles/pixss.min.css"
    : "/pixss/styles/pixss.min.css";

  function copyToClipboard(text) {
    const elem = document.createElement("textarea");
    elem.value = text;
    document.body.appendChild(elem);
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
  }
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
      <button
        class="is-rounded is-outlined"
        on:click={() => copyToClipboard(cssUrl)}>Copy CSS link</button>
    </div>
  </div>
</HeroShowcase>
