#!/bin/bash

set -e

git pull

yarn run build

git checkout -b release

## get new version number

LAST_VERSION=$(node -e 'process.stdout.write(require("./package.json").version)')

echo "Previous version ${LAST_VERSION}"
echo ""
read -rp "Enter new version: " NEW_VERSION

yarn version --new-version $NEW_VERSION --no-git-tag-version

npx offline-github-changelog --remote=origin --next=$NEW_VERSION > CHANGELOG.md

git add package.json CHANGELOG.md

git commit -m "Release v${NEW_VERSION}"

git push -u origin release

open https://github.com/elevism/pay-val/pull/new/release
