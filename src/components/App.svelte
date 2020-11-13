<script>
  import Category from "./category/Category.svelte";
  import HeroHome from "./hero/HeroHome.svelte";
  import Tabs from "./tabs/index.svelte";
  import Topbar from "./navigation/Topbar.svelte";

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
  <section class="container is-warning py-2 is-rounded">
    <div class="card">
      <div class="card-title"><strong>Login Form</strong></div>
      <div class="card-content">
        <label for="email"> Mail <input type="text" name="email" /> </label>
        <label for="pass">
          Password
          <input type="password" name="pass" />
        </label>
      </div>
    </div>
  </section>
  <section class="container">
    <Tabs />
  </section>
  <section class="container">
    <Category />
  </section>
</main>
<footer class="super-centered">
  <div class="">Pixss ♥️ Berlin © 2020</div>
</footer>
