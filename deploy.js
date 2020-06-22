var ghpages = require('gh-pages')

ghpages.publish('gh-pages', function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('successfully deployed to gh-pages')
  }
})
