<script>
  import { currentTab } from "../store";
  import Note from "../shared/Note.svelte";
  import classname from "classname";
  let tabName = "";

  const unsubscribe = currentTab.subscribe((value) => {
    tabName = value;
  });

  function setTabName(name) {
    currentTab.set(name);
  }
</script>

<div class="tabs">
  <ul>
    <li
      class={classname({ 'is-active': 'home' === tabName })}
      on:click={() => setTabName('home')}>
      <a href="#layout">Home</a>
    </li>
    <li
      class={classname({ 'is-active': 'layout' === tabName })}
      on:click={() => setTabName('layout')}>
      <a href="#layout">Layout</a>
    </li>
    <li
      class={classname({ 'is-active': 'navigation' === tabName })}
      on:click={() => setTabName('navigation')}>
      <a href="#navigation">Navigation</a>
    </li>
    <li
      class={classname({ 'is-active': 'form' === tabName })}
      on:click={() => setTabName('form')}>
      <a href="#form">Form</a>
    </li>
    <li
      class={classname({ 'is-active': 'widget' === tabName })}
      on:click={() => setTabName('widget')}>
      <a href="#widget">Wiget</a>
    </li>
    <li
      class={classname({ 'is-active': 'utils' === tabName })}
      on:click={() => setTabName('utils')}>
      <a href="#utils">Utils</a>
    </li>
  </ul>
</div>
<slot />
