(function () {
  // load the html segments
  // $("#demo-button").load("./sites/demo/button.html");
  // $("#demo-layout").load("./sites/demo/layout.html");
  // $("#demo-typography").load("./sites/demo/typography.html");
  // $("#demo-forms").load("./sites/demo/forms.html");
  // $("#demo-tables").load("./sites/demo/tables.html");
  $("#logo-hero").attr("src", "./sites/app.png");

  // toggle open/close drawer
  $_drawerIcon = $("#drawer-icon");
  $_drawerBar = $("#drawer-bar");

  $_drawerIcon.on("click", () => {
    $_drawerIcon.toggleClass("open");
    $_drawerBar.toggleClass("open");
  });

  // $overlay = $("#overlay");
  // $codeContent = $overlay.find("#code-content");

  // // toggle sidebar-item active/inactive
  // $("nav").on("click", ".sidebar-item", function (event) {
  //   const fancyClass = "active";

  //   $("nav .sidebar-item").removeClass(fancyClass);
  //   if (!$(this).hasClass("active")) {
  //     $(this).addClass("active");
  //   }
  // });

  //open overlay & show source code
  // $('.icon-source').on('click', function (event) {
  //   const codeHtml = $(this)
  //     .parent()
  //     .next()
  //     .html()
  //   $codeContent.text(codeHtml)
  //   // hljs.highlightBlock($codeContent.find("code"));
  //   $overlay.css('visibility', 'visible')
  // })

  // $('.icon-close').on('click', function (event) {
  //   $codeContent.text('')
  //   $overlay.css('visibility', 'hidden')
  // })
})();
