;(function () {
  $overlay = $('#overlay')
  $codeContent = $overlay.find('#code-content')

  // toggle sidebar-item active/inactive
  $('nav').on('click', '.sidebar-item', function (event) {
    const fancyClass = 'active'

    $('nav .sidebar-item').removeClass(fancyClass)
    if (!$(this).hasClass('active')) {
      $(this).addClass('active')
    }
  })

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
})()
