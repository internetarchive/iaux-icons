[![Build Status](https://travis-ci.com/internetarchive/iaux-icons.svg?branch=master)](https://travis-ci.com/internetarchive/iaux-icons)
[![codecov](https://codecov.io/gh/internetarchive/iaux-icons/branch/master/graph/badge.svg)](https://codecov.io/gh/internetarchive/iaux-icons)

# IA Icons Monorepo

This monorepo is managed by Lerna, with dependencies installed via NPM. Each icon is broken out into its own package, along with a package to define an `<ia-icon>` LitElement component to quickly demo all of the available icons. These icons can be installed individually with the package naming pattern `@internetarchive/icon-${icon_name}`.

## Installation and demoing

Since Lerna will install a separate instance of LitElement for each package within this repository, it is strongly advised that you do not use `lerna bootstrap` to install dependencies. Instead, to demo the existing icons, navigate to the ./packages/ia-icons directory and run `npm i`, then `npm start`. An es-dev-server will start and will open the index in your default browser. If you do use `lerna bootstrap` to install all dependencies, you will need to run `npm dedupe` within the ./packages/ia-icons directory to remove the duplicate instances of LitElement and its dependencies.

## Developing

Each package is symlinked within the ia-icons package using Lerna. If you would like to add an icon package to this monorepo, you can start by copying one of the existing icon directories. Next, navigate to ./packages/ia-icons and run `lerna add @internetarchive/icon-${new_icon} --scope=@internetarchive/ia-icons`, where new_icon is your icon package's name. You can then open up ./packages/ia-icons/src/ia-icon.js and import the new icon. Be sure to also add the icon name to index.html so it renders in the demo page.
