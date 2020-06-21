;(function () {
  // toggle sidebar-item active/inactive
  $('nav').on('click', '.sidebar-item', function (event) {
    const fancyClass = 'active'

    $('nav .sidebar-item').removeClass(fancyClass)
    if (!$(this).hasClass('active')) {
      $(this).addClass('active')
    }
  })

  //show source code of current example
  $('.icon-source').on('click', function (event) {
    console.log(
      $(this)
        .parent()
        .next()
        .html(),
    )
  })
})()
