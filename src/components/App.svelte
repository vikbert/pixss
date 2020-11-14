<script>
  import Showcase from "./showcase/Showcase.svelte";
  import HeroHome from "./hero/HeroHome.svelte";
  import Tabs from "./tabs/Tabs.svelte";
  import Topbar from "./navigation/Topbar.svelte";
  import Register from "./form/Register.svelte";

  let classOpen = "";

  function toggleClassName() {
    classOpen = classOpen ? "" : "open";
  }
</script>

<header>
  <Topbar {toggleClassName} {classOpen} />
</header>

<main>
  <section class="hero is-primary">
    <HeroHome />
  </section>
  <section class="container">
    <Tabs />
  </section>
  <section class="container my-2">
    <Showcase />
  </section>
  <section class="container demos">
    <hr />
    <Register />
  </section>
</main>
<footer class="super-centered">
  <div class="">Pixss ♥️ Berlin © 2020</div>
</footer>
