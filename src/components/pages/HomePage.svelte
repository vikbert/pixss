<script>
  import Category from "../category/Category.svelte";
  import HeroHome from "../hero/HeroHome.svelte";
  import Tabs from "../tabs/index.svelte";
</script>

<section class="hero is-primary">
  <HeroHome />
</section>

<section class="container">
  <Tabs />
</section>

<section class="container">
  <Category />
</section>
