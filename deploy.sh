#!/usr/bin/env sh
set -e

### publish htmls to gh-pages branch
rm -rf gh-pages
npm run build
mkdir -p gh-pages
cp -rf dist/* gh-pages
cd gh-pages

git init
git add -A

DATE=$(date '+%Y-%m-%d %H:%M:%S')
git commit -m "deploy: github gh-pages $DATE"

git push -f https://github.com/vikbert/pixss.git master:gh-pages

cd -
git pull
