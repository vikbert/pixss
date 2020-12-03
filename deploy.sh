#!/usr/bin/env sh
set -e

readonly GIT_REPO=https://github.com/vikbert/pixss.git

## build svelte demo pages
npm run build
mkdir -p gh-pages/demo
mkdir -p gh-pages/build
cp -rf dist/* gh-pages/demo
cp -rf dist/* gh-pages/build
cp -rf examples gh-pages/

## build markdown
npm run docs:build
cp -rf docs/.vuepress/dist/* gh-pages
cp -rf docs/images gh-pages

# push to gh-pages
cd gh-pages
git init
git add -A

DATE=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "deploy: github gh-pages $DATE"
git push -f $GIT_REPO master:gh-pages

cd -
git pull
rm -rf gh-pages
