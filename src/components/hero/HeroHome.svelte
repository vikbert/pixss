<script>
  import { Link } from "svelte-routing";
</script>

<div class="container flex-centered">
  <div class="hero-content has-text-centered">
    <div class="logo-large">
      <img id="logo-hero" src="./static/app-small.png" alt="logo" />
    </div>
    <h3>Pixss</h3>
    <p>A lightweight pragmatic CSS Framework</p>
    <Link to="/">
      <button class="is-outlined is-rounded">Getting Starte</button>
    </Link>
  </div>
</div>
