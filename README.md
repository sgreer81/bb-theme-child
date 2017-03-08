# Beaver Builder Child for developers

## Includes:
* SCSS - Styling
* Gulp - building assets
* BrowserSync - Live reload as you develop
* NPM - package managment
* @include-media - Responsive breakpoints

## Requirements

| Prerequisite    | How to check | How to install
| --------------- | ------------ | ------------- |
| Node.js 0.12.x  | `node -v`    | [nodejs.org](http://nodejs.org/) |
| gulp >= 3.8.10  | `gulp -v`    | `npm install -g gulp` |

## Getting Started
Clone the repo `git clone https://github.com/stephengreer08/bb-theme-child theme-name`

## Theme development

Beaver Builder Child Theme uses [gulp](http://gulpjs.com/) as its build system and [NPM](https://www.npmjs.com/) to manage front-end packages.

### Install gulp

Building the theme requires [node.js](http://nodejs.org/download/). We recommend you update to the latest version of npm: `npm install -g npm@latest`.

From the command line:

1. Install [gulp](http://gulpjs.com) globally with `npm install -g gulp`
2. Navigate to the theme directory, then run `npm install`

You now have all the necessary dependencies to run the build process.

### Available gulp commands

* `gulp` — Compile and optimize the files in your assets directory
* `gulp watch` — Compile assets when file changes are made