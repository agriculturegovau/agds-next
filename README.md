# @ag.ds-next

A new Design-System for the Department of Agriculture, Fisheries and Forestry.

## Before you clone this repo...

If you are starting a new project, you should clone the [starter kit](https://github.com/steelthreads/agds-next-starter-kit).

If you are looking to implement AgDS components, you need to [install packages from NPM](https://steelthreads.github.io/agds-next/guides/getting-started#if-youre-implementing-components-in-an-existing-project).

You should clone this repo if you are looking to contribute to it, such as...

- Updating components
- Creating new components for consideration and feedback
- Improving documentation

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
- `yarn storybook:dev` – start storybook

### Docs site

Deployment of the Docs site is handled by [github actions](https://github.com/steelthreads/agds-next/actions/workflows/deploy-docs.yml). The site is deployed automatically anytime changes are merged to the `main` branch.

You can run the builds locally for testing. The order of commands here is important. Because storybook is being bundled into the docs site it must be built first.

```sh
yarn storybook:build
yarn docs:build
```

> NOTE: If you see an error during the build like the following:
>
> ```sh
> > Build error occurred
> Error: ENOENT: no such file or directory, open '.../packages/logo/package.json'
> ```
>
> Check if the package has been removed or renamed. If so you may need to delete the folder.

### Adding new components

When adding a new component please make sure you do all of the following

- run `preconstruct init`
- add to playroom (docs/playroom/components.js)
- add to Docs for jsx live (docs/components/utils.tsx)
- create stories for all color variants
- add a README.md
