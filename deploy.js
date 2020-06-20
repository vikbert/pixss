var ghpages = require('gh-pages')
var path = require('path')

ghpages.publish(__dirname, function (err) {
  if (err) {
    console.error(err)
  } else {
    console.log('successfully deployed to gh-pages')
  }
})
