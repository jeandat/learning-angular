
[![Build Status](https://travis-ci.org/jdat82/learning-angular.svg)](https://travis-ci.org/jdat82/learning-angular)
![](https://img.shields.io/david/dev/jdat82/learning-angular.svg)

# Overview

This is a very simple project to apprehend Angular, Karma, Protractor, Bower and Bootstrap.

To try it, just clone or download the project from github, then `npm start`.

What it does for you is :
- Install node dependencies: `npm install`
- Install javascript dependencies: `bower install`
- Install webdriver-manager (used by protractor for end-to-end tests): `node 
node_modules/protractor/bin/webdriver-manager update`
- Build the project and launch a web server: `grunt serve`

# Build

Project is built inside `build/public`.

Just hit `grunt` to build fastly (only changes) or `grunt devall` to build everything.

`grunt dist` will build with distribution options although this is not that relevant for that kind of project ;)

# Web server

To launch a local web server : `grunt serve`.

To launch a local web server and watch for changes: `grunt wserve`.

# Tests

To launch unit tests : `grunt test`.

To launch unit tests and watch for changes : `grunt wtest`.

To launch e2e tests : `grunt test_e2e`.

To launch unit and e2e tests in one shot: `npm test`.

# Documentation

To generate groc and plato documentation inside `doc` folder: `grunt doc`. 
