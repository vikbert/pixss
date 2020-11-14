<script>
  import Tabs from "../shared/Tabs.svelte";
  import Note from "../shared/Note.svelte";

  $: console.log("🔥 demo form loaded");
</script>

<section class="hero is-info">
  <div class="container centered-xy">
    <div class="text-centered my-2">
      <img class="my-2" width="200" src="./static/rocket.svg" alt="" />
      <h2>Design the structure of the webpage</h2>
    </div>
  </div>
</section>
<div class="container">
  <Tabs />
  <Note>
    Use the classes
    <code>.topbar</code>,
    <code>.main</code>,
    <code>.footer</code>
    to set the common layout
  </Note>
  <div class=" editor">
    <iframe
      src="https://codesandbox.io/embed/pixss-layout-94nuy?fontsize=14&hidenavigation=1&theme=dark"
      style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
      title="Pixss: Layout"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts" />
  </div>
</div>
