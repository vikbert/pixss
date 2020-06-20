;(function () {
  $('nav').on('click', '.sidebar-item', function (event) {
    const fancyClass = 'active'

    $('nav .sidebar-item').removeClass(fancyClass)
    if (!$(this).hasClass('active')) {
      $(this).addClass('active')
    }
  })
})()
