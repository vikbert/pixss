<script>
  import Topbar from "./global/Topbar.svelte";
  import Footer from "./global/Footer.svelte";
  import PageHome from "./pages/PageHome.svelte";
  import { currentTab } from "./store";
  import FormDemo from "./demos/FormDemo.svelte";

  let tabName;

  const unsubscribe = currentTab.subscribe((value) => {
    tabName = value;
  });
</script>

<header>
  <Topbar />
</header>

<main class="main">
  {#if tabName === 'home'}
    <PageHome />
  {:else}
    <FormDemo />
  {/if}
</main>

<Footer />
