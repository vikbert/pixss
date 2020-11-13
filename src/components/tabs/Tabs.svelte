<script>
  let currentTab = "";
  function setTabName(name) {
    currentTab = name;
  }
</script>

<div class="tabs">
  <ul>
    <li class="is-active" on:click={() => setTabName('home')}>
      <a href="#layout">Home</a>
    </li>
    <li on:click={() => setTabName('layout')}><a href="#layout">Layout</a></li>
    <li on:click={() => setTabName('navigation')}>
      <a href="#navigation">Navigation</a>
    </li>
    <li on:click={() => setTabName('layout')}><a href="#layout">Form</a></li>
    <li on:click={() => setTabName('widget')}><a href="#widget">Wiget</a></li>
    <li on:click={() => setTabName('utils')}><a href="#utils">Utils</a></li>
  </ul>
</div>
