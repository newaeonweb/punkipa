#!/bin/bash

scripts="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

if [ `$scripts/check-version.sh package.json` -gt `$scripts/check-version.sh node_modules` ]; then
    (yarn --no-progress && npm rebuild node-sass && touch node_modules) || (touch package.json; exit 1)
else
    echo "node_modules is already up to date."
fi
