# @ag.ds-next

The Agriculture Design System (AgDS) is a new design system for the Department of Agriculture, Fisheries and Forestry. AgDS is a suite of tools and guidelines to help designers and developers build the steel threads of the Export Service with efficiency and consistency.

[Visit the AgDS website](https://design-system.agriculture.gov.au)

## Before you clone this repository ...

If you are starting a new project, you should clone the [starter kit](https://github.com/steelthreads/agds-starter-kit).

If you are looking to implement AgDS components, you need to [install packages from NPM](https://design-system.agriculture.gov.au/guides/getting-started#if-youre-implementing-components-in-an-existing-project).

You should only clone this repo if you are looking to contribute to it, such as...

- Improving documentation
- Updating existing components
- Creating new components for consideration and feedback

## Contributing

### System dependencies

To run the dev and builds in this repository you will need a recent version of Node.js installed (>18)
and the [`yarn` (v1) package manager](https://classic.yarnpkg.com/lang/en/docs/install).

We recommend using `nvm` to manage node versions: https://github.com/nvm-sh/nvm

### Getting started

1. Clone the repo to your local machine
2. `cd` into the repo and run `yarn` to install and link dependencies.

For development run one or more of the following commands:

- `yarn docs:dev` – start the docs site
- `yarn storybook:dev` – start storybook
- `yarn playroom:dev` – start playroom
- `yarn example:dev` – start the example site
- `yarn example-form:dev` – start the example form site

### Website

Deployment of the website is handled by [github actions](https://github.com/steelthreads/agds-next/actions/workflows/deploy-docs.yml). The site is deployed automatically anytime changes are merged to the `main` branch.

You can run the builds locally for testing. The order of commands here is important. Because storybook, playroom, the example site and example form site is being bundled into the docs site it must be built first.

```sh
yarn storybook:build
yarn playroom:build
yarn example:build
yarn example-form:build
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
