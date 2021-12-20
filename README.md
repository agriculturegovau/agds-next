# @ag.ds-next

A new Design-System for the Department of Agriculture

## Contributing

### System dependencies

To run the dev and builds in this repository you will need a recent version of Node.js installed (>16)
and the [`yarn` (v1) package manager](https://classic.yarnpkg.com/lang/en/docs/install).

We recommend using `nvm` to manage node versions: https://github.com/nvm-sh/nvm

### Getting started

1. Clone the repo to your local machine
2. `cd` into the repo and run `yarn` to install and link dependencies.

For development run one or more of the following commands:

- `yarn docs:dev` – start the docs site
- `yarn example:dev` – start the example site
- `yarn storybook` – start storybook

### Docs site

Deployment of the Docs site is handled by [github actions](https://github.com/steelthreads/agds-next/actions/workflows/deploy-docs.yml). The site is deployed automatically anytime changes are merged to the `main` branch.

You can run the builds locally for testing. The order of commands here is important. Because storybook is being bundled into the docs site it must be built first.

```sh
yarn storybook:build
yarn docs:build
```

To test the local build you can use a tool like `serve` to open the docs build directory.

```
npx serve
```
