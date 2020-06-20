const test = require('ava')
const fs = require('fs')
const path = require('path')

let dist = path.join(__dirname, '../../dist')

test.before('`dist` path should be created', t => {
  t.true(fs.lstatSync(dist).isDirectory())
})

test('`pixss.css` should be created', t => {
  fs.readdirSync(dist).map(file => {
    if (file === 'pixss.css') t.is(file, 'pixss.css')
  })
})

test('`pixss.min.css` should be created', t => {
  fs.readdirSync(dist).map(file => {
    if (file === 'pixss.min.css') t.is(file, 'pixss.min.css')
  })
})

test('`pixss.css.map` should be created', t => {
  fs.readdirSync(dist).map(file => {
    if (file === 'pixss.css.map') t.is(file, 'pixss.css.map')
  })
})

test('`pixss.min.css.map` should be created', t => {
  fs.readdirSync(dist).map(file => {
    if (file === 'pixss.min.css.map') t.is(file, 'pixss.min.css.map')
  })
})
