#!/bin/bash
set -e

scripts="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

"$scripts/use-yarn.sh"

npm run ng -- serve --host 0.0.0.0
