<script>
  import Category from "../category/Category.svelte";
  import HeroHome from "../hero/HeroHome.svelte";
  import Tabs from "../tabs/index.svelte";
</script>

<style>
  .code {
    background: #000;
    padding: 0.1rem;
  }
</style>

<section class="hero is-primary">
  <HeroHome />
</section>

<section class="container">
  <Tabs />
</section>

<section class="container">
  <Category />
</section>
