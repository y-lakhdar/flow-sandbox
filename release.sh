#!/usr/bin/env bash

nextNpmVersion=$(node get-next-version.js)

read -p "Create realease branch: 'release-${nextNpmVersion}'? [y/n] " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # do dangerous stuff
    git flow release start ${nextNpmVersion}
    npm run standard-version
    git flow release finish ${nextNpmVersion}
    echo "Pushing to the master"
    git push origin master
    echo "Pushing to develop"
    git push origin develop
    echo "Pushing tags"
    git push origin --tags
fi
