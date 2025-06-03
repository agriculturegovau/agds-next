# @ag.ds-next/yourgov

## 0.9.0

### Minor Changes

- c1bee3e25a3: build: Update node version to 22.15.1.

  docs: Update screenshots of templates and guides.

  docs: Remove `sharp` and `puppeteer` dependencies and image generation scripts.

### Patch Changes

- Updated dependencies [83a3564274a]
- Updated dependencies [1bfdc0ae68b]
- Updated dependencies [f17da0f24b2]
- Updated dependencies [14bb1cfcbf4]
- Updated dependencies [a0b844a6fe2]
- Updated dependencies [3b0903e7f81]
- Updated dependencies [2f53e926534]
- Updated dependencies [542c6d4ba77]
  - @ag.ds-next/react@1.29.0

## 0.8.1

### Patch Changes

- 39ea1661678: docs: Fix various React and deprecation warnings throughout examples.

  yourgov: Fix error for staff with no training when filtering by `trainingCompleted`.

- Updated dependencies [fb0e9e5c3a5]
- Updated dependencies [c8b44e20e13]
- Updated dependencies [c030bc899ae]
- Updated dependencies [1609f51fa80]
- Updated dependencies [241a6b6c454]
- Updated dependencies [ef00c152435]
- Updated dependencies [5c1301b0bfe]
- Updated dependencies [421a3511966]
- Updated dependencies [324ea17ac45]
- Updated dependencies [3b5f4e7f30a]
- Updated dependencies [39ea1661678]
- Updated dependencies [151a69b3f76]
  - @ag.ds-next/react@1.28.0

## 0.8.0

### Minor Changes

- 4af03eb39f6: file-upload: Update rejected files’ `SectionAlert` `tone` to `'errorHigh'`.

  section-alert: Deprecate legacy tones and warn appropriately.

  docs: Update all `SectionAlert` `tone`s to tones with emphasis.

  yourgov: Update all `SectionAlert` `tone`s to tones with emphasis.

### Patch Changes

- e9809255314: build(deps): bump next from 14.2.21 to 14.2.25.
- Updated dependencies [7add171cc03]
- Updated dependencies [5c8b1c654cf]
- Updated dependencies [9c8773b20b2]
- Updated dependencies [3f19866e785]
- Updated dependencies [4af03eb39f6]
- Updated dependencies [7836f3af38c]
- Updated dependencies [f46a5a76ee2]
- Updated dependencies [5aff78bb2b1]
- Updated dependencies [3fa4ead5b02]
- Updated dependencies [8bdb9132fef]
- Updated dependencies [ac12f599dbe]
- Updated dependencies [75682e65a41]
  - @ag.ds-next/react@1.27.0

## 0.7.0

### Minor Changes

- 4397a3dd033: icon: Created `MoveLeftIcon` and `MoveRightIcon`.

  yourgov: Use `MoveLeftIcon` in `HelpReference`.

- 0fc55e2d892: icon: Add new `BusinessIcon` and `GripIcon`.

  yourgov: Change dashboard labels.

- f7ed690e647: yourgov: Update Business structure to request ABN for sole trader.
- 4f042d2fbbf: yourgov: Add & focus success message when saving from review edit.
- 6ddde0bd67d: yourgov: New conditional reveal pattern that injects revealed content after radio button group, rather than in between radio buttons.
- 6c948ed2d15: yourgov: Update all error messages to X is Y.
- 3ff2cdb9b35: app-layout: Update `AppLayoutSidebarNav` to cater for new native mouse events on links and buttons.

  button: Add TypeScript support for native `onMouseEnter`, `onMouseLeave`, `onMouseOut` and `onMouseOver` events to `BaseButton`.

  core: Add TypeScript support for native `onClick`, `onMouseEnter`, `onMouseLeave`, `onMouseOut` and `onMouseOver` events to `LinkProps`.

  dropdown-menu: Add `event` to argument to `onClick` function prop.

  main-nav: Update `MainNavList` to cater for new native mouse events on links and buttons.

  table: Add `onMouseEnter`, `onMouseLeave`, `onMouseOut` and `onMouseOver` props. Update `onClick` to match `BaseButton`’s signature.

  yourgov: Remove `@ts-ignore` for `CardLink` `onClick`.

- 46a2473d3ff: yourgov: Add mobile number as default contact details. Add preferred contact method field.
- 1526b45b4eb: yourgov: Change business dashboard to use FeatureLinkList for Popular Links.
- 34e1163a486: date-picker-next: Add dynamic validation to stories.

  date-range-picker-next: Add dynamic validation to stories.

  yourgov: Update date-picker implementations to use next components.

- 33b0c9a5f5a: yourgov: Reorder ABNs to appear after headings & prefix before digits.
- 0a35949dd07: yourgov: Remove all steps and references to Food Safety Supervisor.
- 756a022f321: yourgov: Make steps mutable by decoupling components from array order.

### Patch Changes

- 95933d1aaba: yourgov: Support editing steps from review and submit.
- d77af495409: yourgov: Simple markup and UI fixes.
- e0d3c17b9a1: date-picker: Fix Escape keydown listener to not close parent `Drawer`.

  date-picker-next: Fix Escape keydown listener to not close parent `Drawer`.

  date-range-picker: Fix Escape keydown listener to not close parent `Drawer`.

  date-range-picker-next: Fix Escape keydown listener to not close parent `Drawer`.

  drawer: Add `DatePickerNext` to form example.

  yourgov: Allow pdf files in Upload documents.

- 6c7351c58db: chore: Added `react/jsx-sort-props` eslint rule and sorted all props.
- db5efb88d7f: yourgov: Let vehicle registration field to ignore spaces.
- Updated dependencies [dd0cc48ff64]
- Updated dependencies [4397a3dd033]
- Updated dependencies [d895c373e1f]
- Updated dependencies [0fc55e2d892]
- Updated dependencies [e0d3c17b9a1]
- Updated dependencies [cc95ec6e0ef]
- Updated dependencies [ab125437b79]
- Updated dependencies [491c503608b]
- Updated dependencies [94d88ed87d9]
- Updated dependencies [55637c98759]
- Updated dependencies [8adc0940fd0]
- Updated dependencies [21f7862ef6b]
- Updated dependencies [6c7351c58db]
- Updated dependencies [ddbcf4aa6de]
- Updated dependencies [3ff2cdb9b35]
- Updated dependencies [26d7b847dfe]
- Updated dependencies [31c0fd29c64]
- Updated dependencies [598725a5f8d]
- Updated dependencies [7ea33913c23]
- Updated dependencies [749f7c7a3c4]
- Updated dependencies [455685ad599]
- Updated dependencies [4caacfd77ca]
- Updated dependencies [2167443219d]
- Updated dependencies [95f2d9effe2]
- Updated dependencies [34e1163a486]
- Updated dependencies [a2473939320]
- Updated dependencies [ec0d717949d]
- Updated dependencies [6d12fecc92a]
- Updated dependencies [4679cb597c5]
- Updated dependencies [8b9a45a9f4d]
  - @ag.ds-next/react@1.26.0

## 0.6.0

### Minor Changes

- 30239bc81ec: yourgov: Complete the core of task 1
- 2f793fdf31a: yourgov: Improve/fix all page titles.
- 1dfd5eca78d: yourgov: Use a table for Upload documents on review steps.
- c0ed4642315: yourgov: Use phone validation for inviting a staff member.
- aa0786fbe21: table: `TableCell` - Add support for `id` prop.

  yourgov: Add Employees steps.

- 046b55a2cbb: yourgov: Rename task to steps. Add top-level id, lastUpdated, started and completed.
- 285d4aab289: yourgov: Add random uuid fallback for non secure contexts.
- 65f7f9b4fa3: yourgov: Connect Access requests table to state
- 537336eaaff: yourgov: Add application success page.
- fd62d08313c: yourgov: Add application detail page.
- ad6f5e48a38: yourgov: Create a page for inviting a staff member.

  section-alert: Allow strings to be passed to `focusOnUpdate`.

  page-alert: Allow strings to be passed to `focusOnUpdate`.

- d47efb6a3cf: combobox: `ComboboxMulti` - fix tag remove buttons so they don't submit forms.

  yourgov: Fix staff member focus (again) and first page mobile layout.

- 1fce89bcf5a: yourgov: Remove references to task throughout.
- d47efb6a3cf: switch: Add required `aria-checked` attribute and add support for `aria-controls`.

  table: Fix scrolling shadows not responding to changes in table heights.

  yourgov: Various bug fixes and enhancements based on our testing.

- fd62d08313c: yourgov: Add declaration to review step.
- 302021c43cb: yourgov: Add correct help references
- ff2bf2264bf: yourgov: Add edit staff page.
- d6d8d66842e: page-alert: Make title default to H2 instead of H3.
- 391566752f4: yourgov: Support focus management when cancelling staff & access modals.
- c9a7f689db3: modal: Add `elementToFocusOnClose` prop to allow for manual focus management.
  page-alert: Update `focusOnUpdate` to not focus on any falsey value.
  section-alert: Update `focusOnUpdate` to not focus on any falsey value.

  yourgov: Fix focus issues with Staff table.

- 240749838c2: yourgov: Add food safety supervisor step.
- 9c5e672d5d0: date-picker: Internally support and transform ISO date strings when set as `value`.
  date-range-picker: Internally support and transform ISO date strings when set as `value`.
  yourgov: Handle ISO date strings in state.
- 2f793fdf31a: yourgov: Update all paths to apply and permits. Remove redundant page.
- 9768bea51e2: yourgov: Update food served types.
- 789f13a5145: yourgov: Update home page with new design.
- f1a83a15717: yourgov: Update default staff members
- 5f09ef15160: yourgov: Fix Add/Remove employee focus management… again.
- 1fa56b947bc: icon: Create `PermitIcon`.

  yourgov: Implement `PermitIcon` and new hero banner image.

- 5b010984ad8: yourgov: Focus the success alert after table updates on remove of file in upload documents step.
- 0d594bacd24: yourgov: Add working application history and related pages.

### Patch Changes

- 2207de5cb27: yourgov: Fix mobile rendering by adding correct viewport meta tag.
- 1f3df2f8abd: yourgov: Various UI tweaks and fixes.
- 1f2e68d0632: yourgov: Fix date and time validation.
- 2d031800c74: yourgov: Fix alert focus management in add and remove employees.
- 525d6179c35: date-picker: Disable `autocomplete` on calendar navigation dropdown.
  date-range-picker: Disable `autocomplete` on calendar navigation dropdown.
  select: Add TypeScript support for `autocomplete`.

  yourgov: Fix markup validation issues. Add necessary autocomplete attributes.

- 241e809e3ab: yourgov: Fix alert focus management in staff and access requests.
- Updated dependencies [bfa1543b410]
- Updated dependencies [38378085fee]
- Updated dependencies [d8f5b35013f]
- Updated dependencies [ef789cd698c]
- Updated dependencies [aa0786fbe21]
- Updated dependencies [066c1edd21c]
- Updated dependencies [4b881310d02]
- Updated dependencies [b23903198ac]
- Updated dependencies [0d594bacd24]
- Updated dependencies [64c38569a98]
- Updated dependencies [aca18a7ee9d]
- Updated dependencies [b16fd60bc1e]
- Updated dependencies [8aa2d81262f]
- Updated dependencies [e66b2636531]
- Updated dependencies [1e29ca1063c]
- Updated dependencies [f2159bc5a00]
- Updated dependencies [51665e9fa79]
- Updated dependencies [fc02f936d0c]
- Updated dependencies [0fc960623f0]
- Updated dependencies [0e65c067718]
- Updated dependencies [9b79bbdc9f7]
- Updated dependencies [aca18a7ee9d]
- Updated dependencies [c640eaa0ca7]
- Updated dependencies [198ec8efbba]
- Updated dependencies [42b4ccbc147]
- Updated dependencies [c33c23d4594]
- Updated dependencies [0b9c49ebeb9]
- Updated dependencies [fec2299a908]
- Updated dependencies [ac04b0d1350]
- Updated dependencies [8f70c8ba7fe]
- Updated dependencies [2af5f5a3b1d]
- Updated dependencies [7ec07ff2c65]
- Updated dependencies [b577088b3e7]
- Updated dependencies [36e54a9e17e]
- Updated dependencies [093fe94bc81]
- Updated dependencies [032b9ab94ce]
- Updated dependencies [3874c18dd31]
- Updated dependencies [d47efb6a3cf]
- Updated dependencies [d47efb6a3cf]
- Updated dependencies [9cfb094f43f]
- Updated dependencies [e6b7b617d9a]
- Updated dependencies [fbe54ef078e]
- Updated dependencies [c70b4452f71]
- Updated dependencies [38e4c01fd25]
- Updated dependencies [b57fe083e3b]
- Updated dependencies [d6d8d66842e]
- Updated dependencies [6b6915dee9a]
- Updated dependencies [a69a4ae612d]
- Updated dependencies [060fde075b0]
- Updated dependencies [73be3b9dd9e]
- Updated dependencies [a47676b832f]
- Updated dependencies [c9a7f689db3]
- Updated dependencies [c7b42ee9331]
- Updated dependencies [f350b70eb5b]
- Updated dependencies [9c5e672d5d0]
- Updated dependencies [7e81f38b56f]
- Updated dependencies [7fb6b2e510b]
- Updated dependencies [1f2e68d0632]
- Updated dependencies [43fffc0fe97]
- Updated dependencies [a8d0c5f09b1]
- Updated dependencies [f919c144b39]
- Updated dependencies [ebedd6a546d]
- Updated dependencies [0f5331102e9]
- Updated dependencies [525d6179c35]
- Updated dependencies [a698c798152]
- Updated dependencies [79e87db5003]
- Updated dependencies [219f41aae95]
- Updated dependencies [1fa56b947bc]
- Updated dependencies [6d882af9f5b]
- Updated dependencies [af191fc7829]
- Updated dependencies [277af1554e9]
- Updated dependencies [ffee5f3b6aa]
- Updated dependencies [9b32c1d9ab4]
- Updated dependencies [5fed76317d3]
- Updated dependencies [20eac31f59c]
- Updated dependencies [c5dad52b4c8]
- Updated dependencies [c3fa7126d80]
- Updated dependencies [6627301604a]
- Updated dependencies [5b0bff3079a]
  - @ag.ds-next/react@1.25.0

## 0.5.0

### Minor Changes

- 4c4a3edcfd3: filter-sidebar: Standardise heading and wayfinding structure at all breakpoints.
  filter-sidebar: Hardcode title to "Filters" at all breakpoints.
  filter-sidebar: `activeFiltersCount` now renders at all breakpoints.
  filter-sidebar: `onClearFilters` now renders a Clear filters button at all breakpoints.
  filter-sidebar: Deprecate `aria-label` and `title` props. They’re now unused.

  progress-indicator: Standardise heading and wayfinding structure at all breakpoints.
  progress-indicator: `title` and `subTitle` renders identically at all breakpoints.
  progress-indicator: Fix Level 2 items from incorrectly adding `isActive` and `label` attributes.

  side-nav: Standardise heading and wayfinding structure at all breakpoints.
  side-nav: The `title` is now used for the small-screen expandable variant.
  side-nav: Deprecate `collapseTitle` prop. It is now unused.

### Patch Changes

- d35dcc90ffb: Update deprecated component and prop uses through examples
- Updated dependencies [88303d920a2]
- Updated dependencies [acc1da3735d]
- Updated dependencies [cede8edea80]
- Updated dependencies [fe8d4911d3b]
- Updated dependencies [c313d7a5500]
- Updated dependencies [b12ac2c2658]
- Updated dependencies [2f53f886110]
- Updated dependencies [39dfd397bab]
- Updated dependencies [97fe495929e]
- Updated dependencies [2d2ca761d3b]
- Updated dependencies [4c4a3edcfd3]
- Updated dependencies [d35dcc90ffb]
- Updated dependencies [19df22e82fa]
- Updated dependencies [751deb01c49]
- Updated dependencies [37757215c6b]
- Updated dependencies [9831208cd5c]
- Updated dependencies [180169b4d8b]
  - @ag.ds-next/react@1.24.0

## 0.4.0

### Minor Changes

- 1872836fdfa: Use `MainNav`’s `focusMode` prop instead of conditional `MainNavBottom` bar logic.

### Patch Changes

- Updated dependencies [4d996b47c82]
- Updated dependencies [8faad29ce55]
- Updated dependencies [c0a035a9595]
- Updated dependencies [1872836fdfa]
- Updated dependencies [be10e7f7e45]
- Updated dependencies [8aabedc08dd]
- Updated dependencies [69178973bf5]
- Updated dependencies [e174f63ae43]
- Updated dependencies [d3b7ff92dde]
- Updated dependencies [d69c1f773eb]
- Updated dependencies [f2d348aae16]
- Updated dependencies [4bfc1337601]
- Updated dependencies [71bf5dfc384]
- Updated dependencies [c320d8704ee]
- Updated dependencies [4d31b029657]
  - @ag.ds-next/react@1.23.0

## 0.3.6

### Patch Changes

- 65e9b26418e: drawer, global-alert, modal, page-alert, section-alert: Deprecating onDismiss in favour of onClose

  page-alert: Deprecating hasDismissButton in favour of hasCloseButton

- Updated dependencies [96b48e102f7]
- Updated dependencies [65e9b26418e]
- Updated dependencies [4ca5c8eee02]
- Updated dependencies [863c839d92d]
- Updated dependencies [8b08d4cc6d1]
- Updated dependencies [3c755d8f224]
  - @ag.ds-next/react@1.20.0

## 0.3.5

### Patch Changes

- Updated dependencies [6245c4774]
  - @ag.ds-next/react@1.0.0

## 0.3.4

### Patch Changes

- Updated dependencies [9e48e4aae]
- Updated dependencies [85dd20b03]
- Updated dependencies [d5670236e]
- Updated dependencies [427be30b7]
- Updated dependencies [f2aa9ecfe]
- Updated dependencies [57a0971bf]
- Updated dependencies [acc884879]
- Updated dependencies [9ff8a7fed]
- Updated dependencies [b8d470ad0]
- Updated dependencies [5d76ded12]
- Updated dependencies [9ff8a7fed]
- Updated dependencies [9ff8a7fed]
- Updated dependencies [0f2c88bd3]
- Updated dependencies [0a5bc0bef]
- Updated dependencies [e05a47386]
- Updated dependencies [127cbaa29]
- Updated dependencies [a4803ea9a]
- Updated dependencies [1f3bdfc4c]
- Updated dependencies [29f1aa7f4]
- Updated dependencies [1f3bdfc4c]
- Updated dependencies [9e48e4aae]
- Updated dependencies [a0e019d0e]
- Updated dependencies [7fc4289c5]
- Updated dependencies [f8cc11ed5]
  - @ag.ds-next/content@11.0.0
  - @ag.ds-next/icon@13.0.0
  - @ag.ds-next/box@8.1.0
  - @ag.ds-next/control-input@13.0.0
  - @ag.ds-next/breadcrumbs@16.0.0
  - @ag.ds-next/card@9.0.0
  - @ag.ds-next/header@13.0.0
  - @ag.ds-next/progress-indicator@14.0.0
  - @ag.ds-next/task-list@12.0.0
  - @ag.ds-next/field@12.0.0
  - @ag.ds-next/select@13.0.0
  - @ag.ds-next/text-input@13.0.0
  - @ag.ds-next/textarea@13.0.0
  - @ag.ds-next/search-box@14.0.0
  - @ag.ds-next/summary-list@2.0.0
  - @ag.ds-next/core@4.1.1
  - @ag.ds-next/fieldset@9.0.0
  - @ag.ds-next/main-nav@16.0.0
  - @ag.ds-next/badge@4.0.0
  - @ag.ds-next/prose@3.0.0
  - @ag.ds-next/accordion@12.0.0
  - @ag.ds-next/call-to-action@12.0.0
  - @ag.ds-next/details@2.0.0
  - @ag.ds-next/direction-link@12.0.0
  - @ag.ds-next/page-alert@9.0.0
  - @ag.ds-next/side-nav@15.0.0
  - @ag.ds-next/text-link@8.0.0
  - @ag.ds-next/button@13.0.0
  - @ag.ds-next/callout@9.0.0
  - @ag.ds-next/columns@10.0.0
  - @ag.ds-next/footer@11.0.0
  - @ag.ds-next/form-stack@8.0.0
  - @ag.ds-next/heading@11.0.0
  - @ag.ds-next/inpage-nav@11.0.0
  - @ag.ds-next/link-list@14.0.0
  - @ag.ds-next/tags@11.0.0
  - @ag.ds-next/text@12.0.0
  - @ag.ds-next/ag-branding@8.0.1
  - @ag.ds-next/skip-link@11.0.0

## 0.3.3

### Patch Changes

- def4b6687: Sort package.json files
- Updated dependencies [811e848a9]
- Updated dependencies [2f51df9f4]
- Updated dependencies [499ea1ad7]
- Updated dependencies [8d83083ea]
- Updated dependencies [69b617d26]
- Updated dependencies [4f0759ad3]
- Updated dependencies [e11d39fc0]
- Updated dependencies [3f1a09f96]
- Updated dependencies [be45db31f]
- Updated dependencies [10b37b586]
- Updated dependencies [a668ba49b]
- Updated dependencies [38f4a514d]
- Updated dependencies [bff0bf355]
- Updated dependencies [02b265c75]
- Updated dependencies [718c5aaf6]
- Updated dependencies [846946d51]
- Updated dependencies [0ba460044]
- Updated dependencies [f0d750313]
- Updated dependencies [e7f877f2a]
- Updated dependencies [8bae0bec4]
- Updated dependencies [30726c674]
- Updated dependencies [ad9dcc4e1]
- Updated dependencies [2fc77cfe8]
- Updated dependencies [1be68516e]
- Updated dependencies [e4c7ceb5f]
- Updated dependencies [4d69e2720]
- Updated dependencies [74ca5f4c6]
- Updated dependencies [def4b6687]
- Updated dependencies [2a22f30f2]
- Updated dependencies [01fac530d]
- Updated dependencies [74ca5f4c6]
- Updated dependencies [70aa65c52]
- Updated dependencies [c128d8632]
- Updated dependencies [64f7174ea]
- Updated dependencies [e73c1c8ba]
- Updated dependencies [e98175332]
- Updated dependencies [ae84b2ca2]
- Updated dependencies [e11d39fc0]
- Updated dependencies [30726c674]
- Updated dependencies [1ed62efe7]
- Updated dependencies [74ca5f4c6]
- Updated dependencies [f3ea672f3]
- Updated dependencies [6f06cd8cc]
- Updated dependencies [77ff925b0]
- Updated dependencies [d6a3bee6a]
- Updated dependencies [77e81b8d9]
- Updated dependencies [802d24085]
- Updated dependencies [e4c7ceb5f]
- Updated dependencies [6912d6055]
- Updated dependencies [5b2b62af9]
- Updated dependencies [1b41cc56d]
- Updated dependencies [e11d39fc0]
- Updated dependencies [74823f460]
- Updated dependencies [dfe7f8c99]
- Updated dependencies [355806633]
  - @ag.ds-next/task-list@11.0.0
  - @ag.ds-next/search-box@13.0.0
  - @ag.ds-next/control-input@12.0.0
  - @ag.ds-next/fieldset@8.0.0
  - @ag.ds-next/a11y@1.2.2
  - @ag.ds-next/field@11.0.0
  - @ag.ds-next/button@12.0.0
  - @ag.ds-next/ag-branding@8.0.0
  - @ag.ds-next/content@10.0.0
  - @ag.ds-next/select@12.0.0
  - @ag.ds-next/text-input@12.0.0
  - @ag.ds-next/textarea@12.0.0
  - @ag.ds-next/main-nav@15.0.0
  - @ag.ds-next/box@8.0.0
  - @ag.ds-next/side-nav@14.0.0
  - @ag.ds-next/core@4.1.0
  - @ag.ds-next/accordion@11.0.0
  - @ag.ds-next/badge@3.0.0
  - @ag.ds-next/breadcrumbs@15.0.0
  - @ag.ds-next/call-to-action@11.0.0
  - @ag.ds-next/callout@8.0.0
  - @ag.ds-next/card@8.0.0
  - @ag.ds-next/columns@9.0.0
  - @ag.ds-next/details@1.0.0
  - @ag.ds-next/direction-link@11.0.0
  - @ag.ds-next/footer@10.0.0
  - @ag.ds-next/form-stack@7.0.0
  - @ag.ds-next/header@12.0.0
  - @ag.ds-next/heading@10.0.0
  - @ag.ds-next/icon@12.0.0
  - @ag.ds-next/inpage-nav@10.0.0
  - @ag.ds-next/keyword-list@10.0.0
  - @ag.ds-next/link-list@13.0.0
  - @ag.ds-next/page-alert@8.0.0
  - @ag.ds-next/progress-indicator@13.0.0
  - @ag.ds-next/prose@2.0.0
  - @ag.ds-next/skip-link@10.0.0
  - @ag.ds-next/tags@10.0.0
  - @ag.ds-next/text@11.0.0
  - @ag.ds-next/text-link@7.0.0
  - @ag.ds-next/summary-list@1.0.0
