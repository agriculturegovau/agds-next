Provide an overview of your changes here. Include screenshots, photos or links if necessary.

[View preview](https://design-system.agriculture.gov.au/pr-preview/pr-[PR_NUMBER])

## Checklist

**Preflight**

- [ ] Prefix the PR title with the slug of the package or component - e.g. `accordion: Updated padding` or `docs: Updated header links`
- [ ] Describe the changes clearly in the PR description
- [ ] Read and check your code before tagging someone for review
- [ ] Create a changeset file by running `yarn changeset`. [Learn more about change management](https://design-system.agriculture.gov.au/guides/change-management).

**Testing**

- [ ] Manually test component in various modern browsers at various sizes (use [Browserstack](https://www.browserstack.com/))
- [ ] Manually test component in various devices (phone, tablet, desktop)
- [ ] Manually test component using a keyboard
- [ ] Manually test component using a screen reader
- [ ] Manually tested in dark mode
- [ ] Component meets [Web Content Accessibility Guidelines (WCAG) 2.1 standards](https://www.w3.org/TR/WCAG21/)
- [ ] Add any necessary unit tests (HTML validation, snapshots etc)
- [ ] Run `yarn test` to ensure tests are passing. If required, run `yarn test -u` to update any generated snapshots.

**Documentation**

- [ ] Create or update documentation on the website
- [ ] Create or update stories for Storybook
- [ ] Create or update stories for Playroom snippets
- [ ] Verify hard-coded anchor links and hashes are correct. Check existing links when renaming pages and headings.

**Creating new component**

- [ ] Add documentation for the component (`docs/overview.mdx` and `docs/code.mdx` at a minimum)
- [ ] Changeset file includes a minor
- [ ] Export components for docs site and Playroom (`docs/components/designSystemComponents.tsx`)
- [ ] Add component to Kitchen Sink (`.storybook/stories/KitchenSink.tsx`)
- [ ] Add snippets to Playroom (`docs/playroom/snippets.ts`)
- [ ] Add `figmaGalleryNodeId` to Docs (`docs/components/[component-name]/overview.mdx`)
- [ ] Add pictogram to Docs (`docs/components/pictograms/index.tsx`)
