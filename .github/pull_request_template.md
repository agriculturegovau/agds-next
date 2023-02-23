## Describe your changes

Include screenshots, photos or links if necessary.

## Checklist

### Updating existing component

- [ ] Describe the changes clearly in the PR description
- [ ] Read and check your code before tagging someone for review
- [ ] Document the component for the website (`docs/overview.mdx` and `docs/code.mdx` at a minimum)
- [ ] Create stories for Storybook
- [ ] Add necessary unit tests (HTML validation, snapshots etc)
- [ ] Manually test component in various modern browsers
- [ ] Manually test component using a screen reader
- [ ] Run `yarn format` to ensure code is formatted correctly
- [ ] Run `yarn lint` in the root of the repository to ensure linting tests are passing
- [ ] Run `yarn test` to ensure tests are passing. If required, run `yarn test -u` to update any generated snapshots.
- [ ] Run `yarn changeset` to create a changeset file. [Learn more about change management]()

### Creating new component

- [ ] Describe the changes clearly in the PR description
- [ ] Preconstruct entrypoint has been created
- [ ] Changeset file includes a minor
- [ ] Export components for docs site and Playroom (`docs/components/designSystemComponents.tsx`)
- [ ] Add snippets to Playroom (`docs/playroom/snippets.ts`)
- [ ] Add component to Kitchen Sink (`.storybook/stories/KitchenSink.tsx`)
- [ ] Add pictogram to Docs (`docs/components/pictograms/index.tsx`)
