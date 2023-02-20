## Describe your changes

Include screenshots, photos or links if necessary.

## Checklist

### Updating existing component

- [ ] Describe the changes clearly in the PR description
- [ ] Read and check your code before tagging someone for review
- [ ] Write documentation 
  - [ ] docs/overview.mdx
  - [ ] docs/code.mdx
- [ ] Create stories for Storybook
- [ ] Add necessary tests
- [ ] Manually test component in different modern browsers
- [ ] Manually test component in a screen reader
- [ ] Run `yarn format` to ensure code is formatted correctly
- [ ] Run `yarn lint` in the root of the repository to ensure linting tests are passing
- [ ] Run `yarn test` to ensure tests are passing. If required, run `yarn test -u` to update any generated snapshots.
- [ ] Run `yarn changeset` to create a changeset file

### Creating new component

- [ ] Describe the changes clearly in the PR description
- [ ] Preconstruct entrypoint has been created
- [ ] Changeset file includes a minor
- [ ] Export components for docs site and Playroom (docs/components/designSystemComponents.tsx)
- [ ] Add snippets to Playroom (docs/playroom/snippets.ts)
- [ ] Add component to Kitchen Sink (.storybook/stories/KitchenSink.tsx)
- [ ] Add pictogram to Docs (docs/components/pictograms/index.tsx)
