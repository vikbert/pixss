<script>
  export let pictureUrl = "./static/layout.svg";
  export let prictureWdith = "270";
</script>

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
