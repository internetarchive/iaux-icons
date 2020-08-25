[![Build Status](https://travis-ci.com/internetarchive/iaux-icons.svg?branch=master)](https://travis-ci.com/internetarchive/iaux-icons)
[![codecov](https://codecov.io/gh/internetarchive/iaux-icons/branch/master/graph/badge.svg)](https://codecov.io/gh/internetarchive/iaux-icons)

# IA Icons Monorepo

This monorepo is managed by Lerna, with dependencies installed via NPM. Each icon is broken out into its own package, along with a package to define an `<ia-icon>` LitElement component to quickly demo all of the available icons. These icons can be installed individually with the package naming pattern `@internetarchive/icon-${icon_name}`.

## Installation and demoing

Since Lerna will install a separate instance of LitElement for each package within this repository, it is strongly advised that you do not use `lerna bootstrap` to install dependencies. Instead, to demo the existing icons, navigate to the ./packages/ia-icons directory and run `npm i`, then `npm start`. An es-dev-server will start and will open the index in your default browser. If you do use `lerna bootstrap` to install all dependencies, you will need to run `npm dedupe` within the ./packages/ia-icons directory to remove the duplicate instances of LitElement and its dependencies.

## Scaffolding a New Icon Package

A Node shell script is provided as bin/bootstrap_icon to make creating a new icon as fast as possible. Copy your SVG icon file to the 'icons' directory and run `bin/bootstrap test.svg icon-name 'icon description'` to generate the necessary files for a new icon package. If you want to inspect the contents of the files that will be written using the supplied arguments, add a final argument 'true' to receive output logged to stdout rather than written to the file system. If no description is provided, a description using the icon name will be created. Note that you will need to add the new package to the ia-icons package's dependencies before publishing via Lerna.

## Developing

Each package is symlinked within the ia-icons package using Lerna. If you would like to add an icon package to this monorepo, you can start by copying one of the existing icon directories. Next, navigate to ./packages/ia-icons and run `lerna add @internetarchive/icon-${new_icon} --scope=@internetarchive/ia-icons`, where new_icon is your icon package's name. You can then open up ./packages/ia-icons/src/ia-icon.js and import the new icon. Be sure to also add the icon name to index.html so it renders in the demo page.

### Workflow

1. Put the SVG file in the icons directory
1. Run the shell script to generate the package contents (see "Scaffolding" above)
1. Add reference to new package in ia-icons/package.json
1. Open a PR
1. Merge PR
1. Release new version of packages via Lerna (lerna publish <major|minor|patch>)

A patch version would be the addition of one or more icons or a change in one of the individual icon packages. A minor version would be when there's a change made to the ia-icons package, any of the scaffolding, or the shell script. A major version would be a rearchitecting of the monorepo.
