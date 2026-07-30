# Admin functionality

- [Admin functionality](#admin-functionality)
  - [Local setup](#local-setup)
  - [Sync API](#sync-api)
  - [Deploy](#deploy)
  - [Dependency updating](#dependency-updating)

## Local setup

1. Run `bun install` to install the dependencies
2. Run `bun run build` to build the library
3. Change the `Dart API URL` in the `DartApi.credentials.ts` file to `http://localhost:5100/api/v0/public`
4. Run `bun run dev` to start the development n8n instance

## Sync API

1. Run `bun run make-api`

## Deploy

1. Merge all PRs with the changes to release
2. Run `bun run release` and follow the prompts — this bumps the version, commits, tags, and pushes
3. Create a release in Github when it opens automatically.
4. GitHub Actions publishes to npm automatically on the tag push

## Dependency updating

1. Run `bun run req-up-all` and select everything to update all FE dependencies
2. Run `bun install`
