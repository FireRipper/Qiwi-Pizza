#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the project directory
cd web

# build
PUBLIC_URL=/Qiwi-Pizza yarn build

# navigate into the build output directory
cd build

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:FireRipper/Qiwi-Pizza.git master:gh-pages

cd -
