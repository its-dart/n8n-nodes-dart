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
API_OUTPUT_PATH="./admin/openapi.json"
GENERATED_OUTPUT_PATH="./nodes/Dart/generated.ts"

rm -f "$API_OUTPUT_PATH"
echo "Downloading API schema..."
curl -s "$DART_API_SCHEMA_URL" | yq -o json > "$API_OUTPUT_PATH"

rm -f "$GENERATED_OUTPUT_PATH"
echo "Processing API schema..."
npx ts-node admin/processApi.ts > "$GENERATED_OUTPUT_PATH"

echo "Formatting, linting and re-formatting..."
yarn prettier-fix
yarn lint-fix
yarn prettier-fix