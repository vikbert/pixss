<script>
  export let pictureUrl = "./static/layout.svg";
  export let prictureWdith = "370";
</script>

<style>
  .picture {
    height: 25.5rem;
    overflow: hidden;
  }
</style>

<div class="hero is-primary">
  <div class="container">
    <div class="row">
      <div class="column description">
        <slot />
      </div>
      <div class="column picture">
        <img
          class="hide-mobile"
          width={prictureWdith}
          src={pictureUrl}
          alt="" />
      </div>
    </div>
  </div>
</div>
