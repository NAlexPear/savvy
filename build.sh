#!/bin/sh

[ ! -d node_modules ] && echo "Installing dependencies: " && npm install

#To make this function usable from the CLI, be sure to run build.sh
# with the `source` modifier (e.g. `souce ./build.sh`)

build () {
  jekyll build
  gulp $*
}
