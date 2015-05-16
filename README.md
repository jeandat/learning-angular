
# Overview

This is a very simple project to apprehend Angular, Karma, Protractor, Bower and Bootstrap.

To try it, just clone or download the project from github, then `npm start`.

# Build

Project is built inside `build/public`.

Just hit `grunt` to build fastly (only changes) or `grunt devall` to build everything.

`grunt dist` will build with distribution options although this is not that relevant for that kind of project ;)

# Web server

To launch a local web server : `grunt serve`.

To launch a local web server and watch for changes: `grunt wserve`.

# Tests

To launch unit tests : `npm test` or `grunt test`.

To launch unit tests and watch for changes : `grunt wtest`.

To launch e2e tests : `grunt test_e2e`.

# Documentation

To generate groc and plato documentation inside `doc` folder: `grunt doc`. 