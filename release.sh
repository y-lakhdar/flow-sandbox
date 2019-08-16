#!/usr/bin/env bash

nextNpmVersion=$(node get-next-version.js)

read -p "Create realease branch: 'release-${nextNpmVersion}'? [y/n] " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then

# This publishes the package
echo
echo "Create release branch"
echo

# git flow release start ${nextNpmVersion}
git checkout -b release/${nextNpmVersion} develop
npm run standard-version
# git flow release finish ${nextNpmVersion}
git checkout master
git merge --no-ff release/${nextNpmVersion} --message "Deployed by release script"
git tag -a ${nextNpmVersion} -m ""
git checkout develop
git merge --no-ff release/develop --message "Deployed by release script"
git branch -d release/develop
git push origin master
git push origin develop
git push origin --tags
fi
