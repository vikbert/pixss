;(function () {
  $('nav').on('click', '.sidebar-item', function (event) {
    const fancyClass = 'active'
    console.log($('nav .sidebar-item'))
    $('nav .sidebar-item').removeClass(fancyClass)
    if (!$(this).hasClass('active')) {
      $(this).addClass('active')
    }
  })
})()
