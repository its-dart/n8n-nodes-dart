# Admin functionality

- [Admin functionality](#admin-functionality)
  - [Local setup](#local-setup)
  - [Sync API](#sync-api)
  - [Deploy](#deploy)
  - [Dependency updating](#dependency-updating)

## Local setup

1. Run `yarn install` to install the dependencies
2. Run `yarn build` to build the library
3. Change the `Dart API URL` in the `DartApi.credentials.ts` file to `http://localhost:5100/api/v0/public`
4. Run `yarn dev` to start the development n8n instance

## Sync API

1. Run `yarn make-api`

## Deploy

1. Commit and push all local changes
2. Open but don't merge a PR and stay on the branch locally
3. Run `npm login` if needed
4. Run `yarn release` and follow the prompts (usually they are all a yes), confirming each step by pressing enter
5. Merge the PR

## Dependency updating

1. Run `yarn req-up-all` and select everything to update all FE dependencies
2. Run `yarn install`
