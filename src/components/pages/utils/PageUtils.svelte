<script>
  import HeroShowcase from "../../shared/HeroShowcase.svelte";
  import Note from "../../shared/Note.svelte";
  import Tabs from "../../shared/Tabs.svelte";
</script>

<HeroShowcase pictureUrl="./static/utils.svg">
  <h1 class="bold">Utils</h1>
  <span class="bold">construct the popular layout with
    <code>.topbar</code>
    <code>sidebar</code>
    <code>.footer</code>, make the page responsive with
    <code>.row</code>
    <code>.column</code>
  </span>
</HeroShowcase>
<div class="container">
  <Tabs />
  <div class="shadow-lg">
    <Note>Utils demo</Note>
  </div>
</div>
