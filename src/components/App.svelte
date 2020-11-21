<script>
  import Topbar from "./global/Topbar.svelte";
  import Footer from "./global/Footer.svelte";
  import PageHome from "./pages/home/PageHome.svelte";
  import PageForm from "./pages/form/PageForm.svelte";
  import PageLayout from "./pages/layout/PageLayout.svelte";
  import PageNavigation from "./pages/navigation/PageNavigation.svelte";
  import PageUtils from "./pages/utils/PageUtils.svelte";
  import PageWidget from "./pages/widget/PageWidget.svelte";
  import { currentTab } from "./store";
  import Tabs from "./shared/Tabs.svelte";

  let tabName;

  const unsubscribe = currentTab.subscribe((value) => {
    tabName = value;
  });
</script>

<header>
  <Topbar />
</header>
{@debug tabName}
<main class="main">
  {#if tabName === 'home'}
    <PageHome />
  {:else if tabName === 'layout'}
    <PageLayout />
  {:else if tabName === 'navigation'}
    <PageNavigation />
  {:else if tabName === 'form'}
    <PageForm />
  {:else if tabName === 'widget'}
    <PageWidget />
  {:else if tabName === 'utils'}
    <PageUtils />
  {/if}
</main>

<Footer />
