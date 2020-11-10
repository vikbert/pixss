<script>
  import { Router, Route, Link } from "svelte-routing";
  import Navigation from "./navigation/index.svelte";
  import HomePage from "./pages/HomePage.svelte";

  let url = "";
</script>

<Router {url}>
  <Navigation />
  <main>
    <Route path={'/'}>
      <HomePage />
    </Route>
  </main>
</Router>

<footer class="footer flex-centered">
  <div class="">Pixss ♥️ Berlin © 2020</div>
</footer>
