Provide an overview of your changes here. Include screenshots, photos or links if necessary.

[View preview](https://design-system.agriculture.gov.au/pr-preview/pr-[PR_NUMBER])

## Checklist

**Preflight**

- [ ] Prefix the PR title with the slug of the package or component - e.g. `accordion: Updated padding` or `docs: Updated header links`
- [ ] Describe the changes clearly in the PR description
- [ ] Read and check your code before tagging someone for review

**Testing**

- [ ] Manually test component in various modern browsers at various sizes (use [Browserstack](https://www.browserstack.com/))
- [ ] Manually test component in various devices (phone, tablet, desktop)
- [ ] Manually test component using a keyboard
- [ ] Manually test component using a screen reader
- [ ] Component meets [Web Content Accessibility Guidelines (WCAG) 2.1 standards](https://www.w3.org/TR/WCAG21/)
- [ ] Add any necessary unit tests (HTML validation, snapshots etc)
- [ ] Run `yarn test` to ensure tests are passing. If required, run `yarn test -u` to update any generated snapshots.

**Documentation**

- [ ] Create or update documentation on the website
- [ ] Create or update stories for Storybook
- [ ] Create or update stories for Playroom snippets

**Creating new component**

- [ ] Document the component for the website (`docs/overview.mdx` and `docs/code.mdx` at a minimum)
- [ ] Preconstruct entrypoint has been created (run `yarn` in the root of the repo to do this)
- [ ] Changeset file includes a minor
- [ ] Export components for docs site and Playroom (`docs/components/designSystemComponents.tsx`)
- [ ] Add component to Kitchen Sink (`.storybook/stories/KitchenSink.tsx`)
- [ ] Add snippets to Playroom (`docs/playroom/snippets.ts`)
- [ ] Add pictogram to Docs (`docs/components/pictograms/index.tsx`)
