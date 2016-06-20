#!/bin/sh bash

[ ! -d node_modules ] && echo "Installing dependencies: " && npm install

#To make these function usable from the CLI, be sure to run build.sh
# with the `source` modifier (e.g. `souce ./build.sh`)

build () {
  jekyll build
  gulp $*
}

#Be mindful of SASS and CSS directory structure for this function
watch () {
  jekyll build --watch &
  gulp watch &
}

unwatch () {
  kill $(jobs -p)
}
