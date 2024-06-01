#!/usr/bin/env bash
set -euo pipefail
cd $GITHUB_WORKSPACE
npm i
TEMP=$(mktemp)
printf "%s" "$KEY" > $TEMP
npx crx pack -o reddit-load-images-directly-chrome.crx -p $TEMP
