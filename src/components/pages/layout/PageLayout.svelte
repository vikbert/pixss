<script>
  import HeroShowcase from "../../shared/HeroShowcase.svelte";
  import Note from "../../shared/Note.svelte";
  import Tabs from "../../shared/Tabs.svelte";
</script>

<HeroShowcase>
  <h1 class="bold">Layout</h1>
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
    <Note>Layout Demo</Note>
  </div>
  <div class=" editor">
    <iframe
      src="https://codesandbox.io/embed/pixss-layout-94nuy?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
      title="Pixss: Layout"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" />
  </div>
</div>
