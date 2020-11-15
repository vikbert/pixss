<script>
  import Note from "../../shared/Note.svelte";
  import Tabs from "../../shared/Tabs.svelte";
  import HeroHome from "./HeroHome.svelte";
  import Showcase from "./Showcase.svelte";
</script>

<HeroHome />

<section class="container">
  <Tabs>
    <Note>
      <span>click on the tab to see code demo for each category</span>
    </Note>
  </Tabs>
</section>

<section class="container">
  <Showcase />
</section>

<hr />

<section class="container">
  <div class="shadow-lg">
    <Note>The following demos are built with<code>pixss</code></Note>
  </div>
</section>
