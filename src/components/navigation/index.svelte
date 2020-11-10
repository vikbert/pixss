<script>
  import Topbar from "./Topbar.svelte";
  import Sidebar from "./Sidebar.svelte";

  let classOpen = "";

  function toggleClassName() {
    classOpen = classOpen ? "" : "open";
  }
</script>

<header>
  <Topbar {toggleClassName} {classOpen} />
  <Sidebar {classOpen} />
</header>
