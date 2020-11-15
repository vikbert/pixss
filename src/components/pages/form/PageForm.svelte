<script>
  import Tabs from "../../shared/Tabs.svelte";
  import Note from "../../shared/Note.svelte";
  import HeroShowcase from "../../shared/HeroShowcase.svelte";
</script>

<HeroShowcase pictureUrl="./static/form.svg">
  <h1 class="bold">Form</h1>
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
    <Note>form demo</Note>
  </div>
</div>
