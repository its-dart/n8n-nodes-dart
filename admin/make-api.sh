#!/usr/bin/env bash
# -*- coding: utf-8 -*-

set -e

if [ -f .env ]; then
    export $(grep -v '^#' .env | xargs)
fi

# Check if yq is installed
if ! command -v yq &> /dev/null; then
    echo "Error: yq is not installed"
    echo "Please install it from: https://github.com/mikefarah/yq#install"
    exit 1
fi

DART_API_SCHEMA_URL="${DART_HOST:-https://app.dartai.com}/api/v0/public/schema/"
OUTPUT_PATH="./nodes/Dart/openapi.json"

rm -f "$OUTPUT_PATH"
curl -s "$DART_API_SCHEMA_URL" | yq -o json > "$OUTPUT_PATH"