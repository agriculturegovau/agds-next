# @ag.ds-next/docs

## 0.12.0

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

- 180169b4d8b: table: Update `TableWrapper` to use a custom scrollbar implementation.

  icon: Created `ScrollbarArrowLeftIcon` and `ScrollbarArrowRightIcon`.

### Patch Changes

- 0e9cecf09d4: playroom: Fix AppLayout boilerplate sidebar links & icons
- d35dcc90ffb: Update deprecated component and prop uses through examples
- 39c46a6a2e3: docs: Update "Edit this page" link to point to the correct Github page.
- b78e845428f: docs: Icons - markup as ordered list.
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

## 0.11.0

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

## 0.10.0

### Minor Changes

- 359c74e357f: grouped-fields: Remove unused required prop
- 2a44de65cb9: file-upload: New implementation of error handling: new UI and unaccepted files no longer trigger the invalid state. With `multiple`, duplicate files aren’t selected. `maxFiles` uses the total files being uploaded, not just current selection.

  icon: Prevent from shrinking smaller than their intended size.

  list: Add `BoxProps` to allowed types for `ListItem`.

  section-alert: Ensure Close button is always aligned to the top.

  text: Remove unnecessary margin reset CSS.

- 80dfd608cfb: button: Add `focusRingFor` prop to allow programmatic focus, e.g. via a link, to render the focus ring. This is available for `Button` and `ButtonLink`.

### Patch Changes

- 272d4fbd79f: release-notes: Fix CornerDownRightIcon typo
- 898f7d2ca29: box: Document all style props
- ac6f31ceda2: docs: Fix Playroom links not working and returning not found 404 error.
- Updated dependencies [ce16f6a7577]
- Updated dependencies [174a1382ca0]
- Updated dependencies [359c74e357f]
- Updated dependencies [0ce7fbf96ea]
- Updated dependencies [29f393359da]
- Updated dependencies [f1b9d2b69db]
- Updated dependencies [898f7d2ca29]
- Updated dependencies [94ad75b9931]
- Updated dependencies [21dd180d274]
- Updated dependencies [0ed83fe5448]
- Updated dependencies [2a44de65cb9]
- Updated dependencies [358c561f2f7]
- Updated dependencies [cf9055a1231]
- Updated dependencies [053eee29b67]
- Updated dependencies [15a7d327718]
- Updated dependencies [80dfd608cfb]
  - @ag.ds-next/react@1.22.0

## 0.9.0

### Minor Changes

- 317f42af5c2: progress-indicator: Added level two item support for ProgressIndicator
  icons: Added CornerRightDownIcon
- 89ffacb7672: drawer: Added `mutedOverlay` prop to the Drawer component so that context with the main page content can be more easily retained.
- 2774726c192: TimeInput: Initial release of component

  DatePicker: Also call consumer’s `onBlur` function when passed

- 0b266d74b89: TimePicker: Initial release of component

  TimeInput: Update `TimeValue` to use `.value` instead of `.raw`

### Patch Changes

- 54fac91f664: patterns: Clarify Selectable tables with batch actions
- bc39ac06327: combobox: Warn if unsupported maxWidth prop is set.

  combobox-multi: Warn if unsupported maxWidth prop is set.

  combobox-multi: Add default `block` value to docs props.

- Updated dependencies [317f42af5c2]
- Updated dependencies [7460e609496]
- Updated dependencies [89ffacb7672]
- Updated dependencies [2774726c192]
- Updated dependencies [0b266d74b89]
- Updated dependencies [a3d65cb143f]
- Updated dependencies [342c6a450af]
- Updated dependencies [bc39ac06327]
- Updated dependencies [360e446abfb]
  - @ag.ds-next/react@1.21.0

## 0.8.0

### Minor Changes

- 96b48e102f7: progress-indicator: Added ability to customise which item is treated as active. If no active item is specified, it defaults to the `"doing"` status for backwards compatibility.

  Also, the `"doing"` status has been marked as **deprecated** (throws a console warning) and encourages the use of the `"started"` status with `isActive: true` applied as a replacement.

- a85dc72f764: docs: Added guidance for using the multi-task form pattern

### Patch Changes

- 869da4a99b2: docs: Patterns: update conditionally revealed content
- Updated dependencies [96b48e102f7]
- Updated dependencies [65e9b26418e]
- Updated dependencies [4ca5c8eee02]
- Updated dependencies [863c839d92d]
- Updated dependencies [8b08d4cc6d1]
- Updated dependencies [3c755d8f224]
  - @ag.ds-next/react@1.20.0

## 0.7.0

### Minor Changes

- d25a2142196: grouped-fields: Initial release of component. To support this component, change how invalid state is applied to autocomplete, combobox, date-picker, date-range-picker, password-input, search, search-input, select, textarea and text-input.

### Patch Changes

- Updated dependencies [2f5aca86679]
- Updated dependencies [f0b9db1d249]
- Updated dependencies [5b9cc2fbce3]
- Updated dependencies [5d8489f53de]
- Updated dependencies [90294ca5c3c]
- Updated dependencies [d25a2142196]
- Updated dependencies [5e37b79b433]
  - @ag.ds-next/react@1.19.0

## 0.6.8

### Patch Changes

- 566f4074026: Update all references of `steelthreads` to `agriculturegovau`
- 93aae34e45d: docs: Fix usage of apostrophes throughout.
- 8b09677bc62: docs: Review & update content, fix typos, apply content style.
- Updated dependencies [94a0550fe17]
- Updated dependencies [eb1ff4c52ae]
- Updated dependencies [df428a1a1c5]
- Updated dependencies [80e30b52dcd]
- Updated dependencies [691a33d18b7]
- Updated dependencies [4237eaba7a2]
- Updated dependencies [abdddaa51b0]
- Updated dependencies [51d103a66af]
- Updated dependencies [ac627a12898]
- Updated dependencies [e2bbf35bda9]
- Updated dependencies [4293723f322]
- Updated dependencies [81f4f8d0a79]
- Updated dependencies [b3fcefa9352]
- Updated dependencies [d12b727557f]
- Updated dependencies [67d48135aa5]
- Updated dependencies [4ba6cf84f48]
- Updated dependencies [9e354eb3559]
- Updated dependencies [8a6ec918201]
- Updated dependencies [68047540933]
  - @ag.ds-next/react@1.18.0

## 0.6.7

### Patch Changes

- f4928d2ea96: Fix many, simple a11y errors detected by axe such as incorrect landmarks, incorrect heading order and incorrect use of aria attributes.
- Updated dependencies [548da280cb1]
- Updated dependencies [53f13b06519]
- Updated dependencies [1f4d51b7c77]
- Updated dependencies [158bd561f52]
- Updated dependencies [49ded9bd0a3]
  - @ag.ds-next/react@1.17.0

## 0.6.6

### Patch Changes

- c5a4373ce5c: combobox: Fixed a bug where changing the value of the `options` prob would not immediately update the list of options.
- Updated dependencies [c85a4fdfe0c]
- Updated dependencies [5948f43f9b6]
- Updated dependencies [2fe8c26bc9d]
- Updated dependencies [79e31f8fb38]
- Updated dependencies [db4243407d4]
- Updated dependencies [d7c4fcde9b4]
- Updated dependencies [97723bb52b6]
- Updated dependencies [65f7f83e0c9]
  - @ag.ds-next/react@1.16.0

## 0.6.5

### Patch Changes

- Updated dependencies [6245c4774]
  - @ag.ds-next/react@1.0.0

## 0.6.4

### Patch Changes

- Updated dependencies [9e48e4aae]
- Updated dependencies [85dd20b03]
- Updated dependencies [d5670236e]
- Updated dependencies [427be30b7]
- Updated dependencies [f2aa9ecfe]
- Updated dependencies [7ce825655]
- Updated dependencies [57a0971bf]
- Updated dependencies [acc884879]
- Updated dependencies [edccac3dd]
- Updated dependencies [324746fb5]
- Updated dependencies [9ff8a7fed]
- Updated dependencies [b8d470ad0]
- Updated dependencies [3f446d19e]
- Updated dependencies [5d76ded12]
- Updated dependencies [9ff8a7fed]
- Updated dependencies [324746fb5]
- Updated dependencies [9ff8a7fed]
- Updated dependencies [0f2c88bd3]
- Updated dependencies [c220cef58]
- Updated dependencies [5585e7d0f]
- Updated dependencies [0a5bc0bef]
- Updated dependencies [e05a47386]
- Updated dependencies [127cbaa29]
- Updated dependencies [a4803ea9a]
- Updated dependencies [1f3bdfc4c]
- Updated dependencies [29f1aa7f4]
- Updated dependencies [1f3bdfc4c]
- Updated dependencies [ea89383fd]
- Updated dependencies [9e48e4aae]
- Updated dependencies [25a2a8ea0]
- Updated dependencies [a0e019d0e]
- Updated dependencies [7fc4289c5]
- Updated dependencies [f8cc11ed5]
  - @ag.ds-next/content@11.0.0
  - @ag.ds-next/icon@13.0.0
  - @ag.ds-next/box@8.1.0
  - @ag.ds-next/control-input@13.0.0
  - @ag.ds-next/breadcrumbs@16.0.0
  - @ag.ds-next/combobox@2.0.0
  - @ag.ds-next/card@9.0.0
  - @ag.ds-next/header@13.0.0
  - @ag.ds-next/global-alert@1.0.0
  - @ag.ds-next/autocomplete@2.0.0
  - @ag.ds-next/progress-indicator@14.0.0
  - @ag.ds-next/task-list@12.0.0
  - @ag.ds-next/field@12.0.0
  - @ag.ds-next/file-upload@8.0.0
  - @ag.ds-next/search-input@1.0.0
  - @ag.ds-next/select@13.0.0
  - @ag.ds-next/text-input@13.0.0
  - @ag.ds-next/textarea@13.0.0
  - @ag.ds-next/search-box@14.0.0
  - @ag.ds-next/summary-list@2.0.0
  - @ag.ds-next/date-picker@10.0.0
  - @ag.ds-next/core@4.1.1
  - @ag.ds-next/fieldset@9.0.0
  - @ag.ds-next/main-nav@16.0.0
  - @ag.ds-next/badge@4.0.0
  - @ag.ds-next/prose@3.0.0
  - @ag.ds-next/hero-banner@8.0.0
  - @ag.ds-next/loading@8.0.0
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
  - @ag.ds-next/pagination@5.0.0
  - @ag.ds-next/skeleton@4.0.0
  - @ag.ds-next/sub-nav@5.0.0
  - @ag.ds-next/switch@5.0.0
  - @ag.ds-next/table@8.0.0
  - @ag.ds-next/tags@11.0.0
  - @ag.ds-next/text@12.0.0
  - @ag.ds-next/ag-branding@8.0.1
  - @ag.ds-next/skip-link@11.0.0

## 0.6.3

### Patch Changes

- def4b6687: Sort package.json files
- c128d8632: Upgraded `@reach/auto-id`
- Updated dependencies [811e848a9]
- Updated dependencies [70aa65c52]
- Updated dependencies [2f51df9f4]
- Updated dependencies [499ea1ad7]
- Updated dependencies [8d83083ea]
- Updated dependencies [69b617d26]
- Updated dependencies [ad147fd83]
- Updated dependencies [4f0759ad3]
- Updated dependencies [e11d39fc0]
- Updated dependencies [3f1a09f96]
- Updated dependencies [be45db31f]
- Updated dependencies [10b37b586]
- Updated dependencies [ad9dcc4e1]
- Updated dependencies [a668ba49b]
- Updated dependencies [38f4a514d]
- Updated dependencies [bff0bf355]
- Updated dependencies [02b265c75]
- Updated dependencies [718c5aaf6]
- Updated dependencies [18f47809c]
- Updated dependencies [846946d51]
- Updated dependencies [3f1a09f96]
- Updated dependencies [0ba460044]
- Updated dependencies [f0d750313]
- Updated dependencies [4b9c98d2a]
- Updated dependencies [e7f877f2a]
- Updated dependencies [8bae0bec4]
- Updated dependencies [30726c674]
- Updated dependencies [ad9dcc4e1]
- Updated dependencies [1be68516e]
- Updated dependencies [2fc77cfe8]
- Updated dependencies [1be68516e]
- Updated dependencies [e4c7ceb5f]
- Updated dependencies [4d69e2720]
- Updated dependencies [db9f1ff26]
- Updated dependencies [74ca5f4c6]
- Updated dependencies [def4b6687]
- Updated dependencies [2a22f30f2]
- Updated dependencies [01fac530d]
- Updated dependencies [74ca5f4c6]
- Updated dependencies [70aa65c52]
- Updated dependencies [c128d8632]
- Updated dependencies [57e717dda]
- Updated dependencies [1c2002935]
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
- Updated dependencies [078ecafe5]
- Updated dependencies [1b41cc56d]
- Updated dependencies [e11d39fc0]
- Updated dependencies [e11d39fc0]
- Updated dependencies [74823f460]
- Updated dependencies [dfe7f8c99]
- Updated dependencies [47d71e5e4]
- Updated dependencies [f67730714]
- Updated dependencies [c3de35634]
- Updated dependencies [355806633]
  - @ag.ds-next/task-list@11.0.0
  - @ag.ds-next/table@7.0.0
  - @ag.ds-next/search-box@13.0.0
  - @ag.ds-next/control-input@12.0.0
  - @ag.ds-next/fieldset@8.0.0
  - @ag.ds-next/date-picker@9.0.0
  - @ag.ds-next/a11y@1.2.2
  - @ag.ds-next/field@11.0.0
  - @ag.ds-next/button@12.0.0
  - @ag.ds-next/ag-branding@8.0.0
  - @ag.ds-next/loading@7.0.0
  - @ag.ds-next/content@10.0.0
  - @ag.ds-next/select@12.0.0
  - @ag.ds-next/text-input@12.0.0
  - @ag.ds-next/textarea@12.0.0
  - @ag.ds-next/combobox@1.0.0
  - @ag.ds-next/file-upload@7.0.0
  - @ag.ds-next/main-nav@15.0.0
  - @ag.ds-next/box@8.0.0
  - @ag.ds-next/side-nav@14.0.0
  - @ag.ds-next/core@4.1.0
  - @ag.ds-next/hero-banner@7.0.0
  - @ag.ds-next/accordion@11.0.0
  - @ag.ds-next/autocomplete@1.0.0
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
  - @ag.ds-next/pagination@4.0.0
  - @ag.ds-next/progress-indicator@13.0.0
  - @ag.ds-next/prose@2.0.0
  - @ag.ds-next/skeleton@3.0.0
  - @ag.ds-next/skip-link@10.0.0
  - @ag.ds-next/sub-nav@4.0.0
  - @ag.ds-next/switch@4.0.0
  - @ag.ds-next/tags@10.0.0
  - @ag.ds-next/text@11.0.0
  - @ag.ds-next/text-link@7.0.0
  - @ag.ds-next/summary-list@1.0.0

## 0.6.2

### Patch Changes

- Updated dependencies [aad2cb62d]
- Updated dependencies [5495984f4]
- Updated dependencies [713b6d32b]
- Updated dependencies [a501c561c]
- Updated dependencies [c5890b78a]
- Updated dependencies [425668432]
- Updated dependencies [3af46a46f]
- Updated dependencies [5495984f4]
- Updated dependencies [64858c711]
- Updated dependencies [b56cb0cef]
- Updated dependencies [0f09cd4b5]
- Updated dependencies [b56cb0cef]
- Updated dependencies [7a61751d6]
- Updated dependencies [b56cb0cef]
- Updated dependencies [aad2cb62d]
- Updated dependencies [5495984f4]
- Updated dependencies [931a7e7a2]
- Updated dependencies [77b6e8530]
- Updated dependencies [931a7e7a2]
- Updated dependencies [b56cb0cef]
  - @ag.ds-next/badge@2.0.0
  - @ag.ds-next/box@7.0.0
  - @ag.ds-next/control-input@11.0.0
  - @ag.ds-next/field@10.0.0
  - @ag.ds-next/file-upload@6.0.0
  - @ag.ds-next/footer@9.0.0
  - @ag.ds-next/loading@6.0.0
  - @ag.ds-next/main-nav@14.0.0
  - @ag.ds-next/page-alert@7.0.0
  - @ag.ds-next/search-box@12.0.0
  - @ag.ds-next/select@11.0.0
  - @ag.ds-next/text-input@11.0.0
  - @ag.ds-next/prose@1.0.0
  - @ag.ds-next/header@11.0.0
  - @ag.ds-next/date-picker@8.0.0
  - @ag.ds-next/sub-nav@3.0.0
  - @ag.ds-next/breadcrumbs@14.0.0
  - @ag.ds-next/ag-branding@7.0.0
  - @ag.ds-next/core@4.0.0
  - @ag.ds-next/icon@11.0.0
  - @ag.ds-next/text-link@6.0.0
  - @ag.ds-next/button@11.0.0
  - @ag.ds-next/accordion@10.0.0
  - @ag.ds-next/call-to-action@10.0.0
  - @ag.ds-next/callout@7.0.0
  - @ag.ds-next/card@7.0.0
  - @ag.ds-next/columns@8.0.0
  - @ag.ds-next/content@9.0.0
  - @ag.ds-next/direction-link@10.0.0
  - @ag.ds-next/fieldset@7.0.0
  - @ag.ds-next/form-stack@6.0.0
  - @ag.ds-next/heading@9.0.0
  - @ag.ds-next/hero-banner@6.0.0
  - @ag.ds-next/inpage-nav@9.0.0
  - @ag.ds-next/keyword-list@9.0.0
  - @ag.ds-next/link-list@12.0.0
  - @ag.ds-next/pagination@3.0.0
  - @ag.ds-next/progress-indicator@12.0.0
  - @ag.ds-next/side-nav@13.0.0
  - @ag.ds-next/skeleton@2.0.0
  - @ag.ds-next/switch@3.0.0
  - @ag.ds-next/table@6.0.0
  - @ag.ds-next/tags@9.0.0
  - @ag.ds-next/task-list@10.0.0
  - @ag.ds-next/text@10.0.0
  - @ag.ds-next/textarea@11.0.0
  - @ag.ds-next/skip-link@9.0.0

## 0.6.1

### Patch Changes

- 9133b50df: Improve layout of component props table on mobile
- 1df395f12: Updated copyright from 'Commonwealth of Australia' to 'Department of Agriculture, Fisheries and Forestry'
- 27b6ef36b: Added props table MDX component
- Updated dependencies [bef68c34e]
- Updated dependencies [797ca223f]
- Updated dependencies [709e773be]
- Updated dependencies [0f76d269a]
- Updated dependencies [c0dc7a79e]
- Updated dependencies [d43864f0e]
- Updated dependencies [4c73c5747]
- Updated dependencies [26a7dc53c]
- Updated dependencies [b73cf3ade]
- Updated dependencies [8969f876a]
- Updated dependencies [062184833]
- Updated dependencies [bc7c629d6]
- Updated dependencies [69ef154cc]
- Updated dependencies [2ee1443ee]
- Updated dependencies [4829c105f]
- Updated dependencies [34ded166e]
- Updated dependencies [1827720eb]
- Updated dependencies [43fa70f0f]
- Updated dependencies [7e90951bb]
- Updated dependencies [c9413c905]
- Updated dependencies [af72175b3]
- Updated dependencies [4c370db43]
- Updated dependencies [4ea3bd2c2]
- Updated dependencies [272c39925]
- Updated dependencies [27b6ef36b]
- Updated dependencies [880ab6c37]
- Updated dependencies [80aaf3ded]
- Updated dependencies [5dc4b6fd1]
- Updated dependencies [0c0b47dd3]
- Updated dependencies [3271a1fd3]
- Updated dependencies [24a627354]
- Updated dependencies [bbb9c124d]
- Updated dependencies [89372aa9d]
- Updated dependencies [27b6ef36b]
- Updated dependencies [4a226fe8d]
- Updated dependencies [b13fa0593]
- Updated dependencies [db54c495b]
- Updated dependencies [697615cd6]
- Updated dependencies [0d0cc187b]
- Updated dependencies [675eb90cd]
- Updated dependencies [e769cb490]
- Updated dependencies [27b6ef36b]
- Updated dependencies [e12ae0738]
- Updated dependencies [36056c812]
- Updated dependencies [5b573b930]
- Updated dependencies [47e9fdbab]
- Updated dependencies [fee0e7c30]
- Updated dependencies [46eea44f4]
- Updated dependencies [dda722445]
- Updated dependencies [eb79bfb77]
- Updated dependencies [d354c5c36]
- Updated dependencies [48c64b03e]
- Updated dependencies [9c434b358]
- Updated dependencies [1df395f12]
- Updated dependencies [2561a1cc8]
- Updated dependencies [3c01cd424]
- Updated dependencies [b68d528b8]
- Updated dependencies [46dc5310d]
- Updated dependencies [a30165b00]
- Updated dependencies [b67fa1685]
- Updated dependencies [648324c71]
- Updated dependencies [b0d04ab07]
- Updated dependencies [c9413c905]
- Updated dependencies [9506faf98]
- Updated dependencies [c970b5d81]
- Updated dependencies [b0d04ab07]
- Updated dependencies [42578efa2]
- Updated dependencies [c9413c905]
- Updated dependencies [042fb9e8c]
- Updated dependencies [cec044d6e]
- Updated dependencies [633228a0f]
- Updated dependencies [a59985d66]
- Updated dependencies [ddd77324f]
  - @ag.ds-next/date-picker@7.0.0
  - @ag.ds-next/search-box@11.0.0
  - @ag.ds-next/select@10.0.0
  - @ag.ds-next/text-input@10.0.0
  - @ag.ds-next/textarea@10.0.0
  - @ag.ds-next/card@6.0.0
  - @ag.ds-next/table@5.0.0
  - @ag.ds-next/box@6.1.0
  - @ag.ds-next/inpage-nav@8.0.0
  - @ag.ds-next/core@3.0.1
  - @ag.ds-next/field@9.0.0
  - @ag.ds-next/form-stack@5.0.0
  - @ag.ds-next/icon@10.0.0
  - @ag.ds-next/body@8.0.0
  - @ag.ds-next/columns@7.0.0
  - @ag.ds-next/content@8.0.0
  - @ag.ds-next/progress-indicator@11.0.0
  - @ag.ds-next/side-nav@12.0.0
  - @ag.ds-next/skip-link@8.0.0
  - @ag.ds-next/accordion@9.0.0
  - @ag.ds-next/call-to-action@9.0.0
  - @ag.ds-next/main-nav@13.0.0
  - @ag.ds-next/page-alert@6.0.0
  - @ag.ds-next/button@10.0.0
  - @ag.ds-next/heading@8.0.0
  - @ag.ds-next/callout@6.0.0
  - @ag.ds-next/file-upload@5.0.0
  - @ag.ds-next/sub-nav@2.0.0
  - @ag.ds-next/pagination@2.0.0
  - @ag.ds-next/switch@2.0.0
  - @ag.ds-next/tags@8.0.0
  - @ag.ds-next/ag-branding@6.1.1
  - @ag.ds-next/keyword-list@8.0.0
  - @ag.ds-next/direction-link@9.0.0
  - @ag.ds-next/hero-banner@5.0.0
  - @ag.ds-next/header@10.0.0
  - @ag.ds-next/task-list@9.0.0
  - @ag.ds-next/a11y@1.2.1
  - @ag.ds-next/link-list@11.0.0
  - @ag.ds-next/footer@8.0.0
  - @ag.ds-next/control-input@10.0.0
  - @ag.ds-next/fieldset@6.0.0
  - @ag.ds-next/breadcrumbs@13.0.0
  - @ag.ds-next/text-link@5.0.0
  - @ag.ds-next/skeleton@1.0.0
  - @ag.ds-next/loading@5.0.0
  - @ag.ds-next/text@9.0.0
  - @ag.ds-next/badge@1.0.0

## 0.6.0

### Minor Changes

- cc586fd2: New package documentation layout
- 724f47ec: Removed `target="_blank"` from all links as per accessibility recommendations.

### Patch Changes

- e46ac4e1: Disable scrolling to the top of the page when using `SubNav`
- 55e17b60: Update examples with new branding
- bb77f99d: Update template thumbnail generation script to exclude template header from screenshots
- Updated dependencies [606ee946]
- Updated dependencies [606ee946]
- Updated dependencies [3261a916]
- Updated dependencies [0ee4ad39]
- Updated dependencies [cc586fd2]
- Updated dependencies [bdb9ab14]
- Updated dependencies [777c2f11]
- Updated dependencies [5c075955]
- Updated dependencies [1c78eebc]
- Updated dependencies [55e17b60]
- Updated dependencies [aac71787]
- Updated dependencies [fe651155]
- Updated dependencies [724f47ec]
- Updated dependencies [55e17b60]
- Updated dependencies [42a960f1]
- Updated dependencies [11959839]
  - @ag.ds-next/file-upload@4.0.0
  - @ag.ds-next/pagination@1.0.0
  - @ag.ds-next/switch@1.0.0
  - @ag.ds-next/accordion@8.0.0
  - @ag.ds-next/button@9.1.0
  - @ag.ds-next/sub-nav@1.0.0
  - @ag.ds-next/select@9.0.1
  - @ag.ds-next/text-link@4.0.0
  - @ag.ds-next/ag-branding@6.1.0
  - @ag.ds-next/breadcrumbs@12.0.0
  - @ag.ds-next/main-nav@12.0.0
  - @ag.ds-next/keyword-list@7.0.0
  - @ag.ds-next/call-to-action@8.0.0
  - @ag.ds-next/date-picker@6.0.0
  - @ag.ds-next/direction-link@8.0.0
  - @ag.ds-next/progress-indicator@10.0.0
  - @ag.ds-next/search-box@10.0.0
  - @ag.ds-next/side-nav@11.0.0
  - @ag.ds-next/skip-link@7.0.0
  - @ag.ds-next/task-list@8.0.0
  - @ag.ds-next/inpage-nav@7.0.0
  - @ag.ds-next/link-list@10.0.0
  - @ag.ds-next/tags@7.0.0

## 0.5.2

### Patch Changes

- Updated dependencies [743cd7b5]
  - @ag.ds-next/text-link@3.0.0
  - @ag.ds-next/breadcrumbs@11.0.0
  - @ag.ds-next/call-to-action@7.0.0
  - @ag.ds-next/direction-link@7.0.0
  - @ag.ds-next/inpage-nav@6.0.0
  - @ag.ds-next/keyword-list@6.0.0
  - @ag.ds-next/link-list@9.0.0
  - @ag.ds-next/progress-indicator@9.0.0
  - @ag.ds-next/tags@6.0.0
  - @ag.ds-next/task-list@7.0.0

## 0.5.1

### Patch Changes

- 6fa3aa60: Fixed small eslint warnings after updating import order rule
- 0e2cc75b: Updated imports of `text-link`
- c248ec2e: Updated `LinkComponent` example to include `forwardRef`
- Updated dependencies [c248ec2e]
- Updated dependencies [6c5d1563]
- Updated dependencies [33310e30]
- Updated dependencies [dcf1c2ad]
- Updated dependencies [6fa3aa60]
- Updated dependencies [9e94811e]
- Updated dependencies [57dd916e]
- Updated dependencies [0e2cc75b]
- Updated dependencies [ac551394]
- Updated dependencies [f8d3f116]
- Updated dependencies [00cbe00f]
- Updated dependencies [27e26e25]
- Updated dependencies [8d25d373]
- Updated dependencies [4d5acb08]
- Updated dependencies [00cbe00f]
- Updated dependencies [0e2cc75b]
- Updated dependencies [27e26e25]
- Updated dependencies [c248ec2e]
- Updated dependencies [0e2cc75b]
- Updated dependencies [5729dc55]
- Updated dependencies [57ce7d01]
- Updated dependencies [989b45b4]
- Updated dependencies [2d964cc7]
- Updated dependencies [dd4f423d]
- Updated dependencies [5729dc55]
- Updated dependencies [1d45cb74]
- Updated dependencies [7a92bc96]
- Updated dependencies [afdc5214]
- Updated dependencies [8ddb8b61]
- Updated dependencies [c248ec2e]
- Updated dependencies [6c5d1563]
- Updated dependencies [d748f7c9]
- Updated dependencies [00cbe00f]
- Updated dependencies [bda91113]
  - @ag.ds-next/core@3.0.0
  - @ag.ds-next/text-link@1.0.0
  - @ag.ds-next/accordion@7.0.0
  - @ag.ds-next/date-picker@5.0.0
  - @ag.ds-next/a11y@1.2.0
  - @ag.ds-next/body@7.0.0
  - @ag.ds-next/box@6.0.0
  - @ag.ds-next/breadcrumbs@10.0.0
  - @ag.ds-next/button@9.0.0
  - @ag.ds-next/call-to-action@6.0.0
  - @ag.ds-next/callout@5.0.0
  - @ag.ds-next/card@5.0.0
  - @ag.ds-next/columns@6.0.0
  - @ag.ds-next/content@7.0.0
  - @ag.ds-next/control-input@9.0.0
  - @ag.ds-next/direction-link@6.0.0
  - @ag.ds-next/field@8.0.0
  - @ag.ds-next/fieldset@5.0.0
  - @ag.ds-next/file-upload@3.0.0
  - @ag.ds-next/footer@7.0.0
  - @ag.ds-next/form-stack@4.0.0
  - @ag.ds-next/header@9.0.0
  - @ag.ds-next/heading@7.0.0
  - @ag.ds-next/hero-banner@4.0.0
  - @ag.ds-next/icon@9.0.0
  - @ag.ds-next/inpage-nav@5.0.0
  - @ag.ds-next/keyword-list@5.0.0
  - @ag.ds-next/link-list@8.0.0
  - @ag.ds-next/loading@4.0.0
  - @ag.ds-next/main-nav@11.0.0
  - @ag.ds-next/progress-indicator@8.0.0
  - @ag.ds-next/search-box@9.0.0
  - @ag.ds-next/secondary-nav@2.0.0
  - @ag.ds-next/select@9.0.0
  - @ag.ds-next/side-nav@10.0.0
  - @ag.ds-next/skip-link@6.0.0
  - @ag.ds-next/table@4.0.0
  - @ag.ds-next/tags@5.0.0
  - @ag.ds-next/task-list@6.0.0
  - @ag.ds-next/text-input@9.0.0
  - @ag.ds-next/textarea@9.0.0
  - @ag.ds-next/text@8.0.0
  - @ag.ds-next/page-alert@5.0.0
  - @ag.ds-next/ag-branding@6.0.0

## 0.5.0

### Minor Changes

- b3ff81ec: Adjusted content spacing
- e1fe3b3e: Add Template docs

### Patch Changes

- 6a6e6952: Created `PageTitle` component
- 48324e1d: Updated examples to utilise new `ButtonGroup` component
- 51eb8049: Update repo URL for docs package
- Updated dependencies [7eccff5b]
- Updated dependencies [72a7efa7]
- Updated dependencies [df01e99d]
- Updated dependencies [e93f10ca]
- Updated dependencies [711c47b1]
- Updated dependencies [48324e1d]
- Updated dependencies [3366253b]
- Updated dependencies [f9ec2e90]
- Updated dependencies [8b7b300c]
- Updated dependencies [48324e1d]
- Updated dependencies [f773d891]
- Updated dependencies [711c47b1]
- Updated dependencies [076b2fa6]
- Updated dependencies [2cb7df61]
- Updated dependencies [bd5a14a2]
- Updated dependencies [9d64236c]
- Updated dependencies [7d952e03]
- Updated dependencies [bc90dd9e]
- Updated dependencies [f7f75d19]
- Updated dependencies [61a7c981]
- Updated dependencies [9d64236c]
- Updated dependencies [4bdc69f1]
- Updated dependencies [1fea9c6c]
- Updated dependencies [182c3245]
- Updated dependencies [94a2c9b1]
- Updated dependencies [f9ec2e90]
- Updated dependencies [585bffeb]
  - @ag.ds-next/hero-banner@3.0.0
  - @ag.ds-next/card@4.0.1
  - @ag.ds-next/core@2.2.1
  - @ag.ds-next/file-upload@2.0.0
  - @ag.ds-next/button@8.0.0
  - @ag.ds-next/breadcrumbs@9.0.0
  - @ag.ds-next/a11y@1.1.0
  - @ag.ds-next/text@7.0.0
  - @ag.ds-next/form-stack@3.0.1
  - @ag.ds-next/page-alert@4.0.0
  - @ag.ds-next/fieldset@4.0.0
  - @ag.ds-next/secondary-nav@1.0.0
  - @ag.ds-next/call-to-action@5.0.0
  - @ag.ds-next/direction-link@5.0.0
  - @ag.ds-next/main-nav@10.0.0
  - @ag.ds-next/progress-indicator@7.0.0
  - @ag.ds-next/task-list@5.0.0
  - @ag.ds-next/body@6.0.1
  - @ag.ds-next/ag-branding@5.1.0
  - @ag.ds-next/content@6.0.1
  - @ag.ds-next/accordion@6.0.0
  - @ag.ds-next/box@5.0.1
  - @ag.ds-next/callout@4.0.0
  - @ag.ds-next/columns@5.0.1
  - @ag.ds-next/control-input@8.0.0
  - @ag.ds-next/date-picker@4.0.0
  - @ag.ds-next/field@7.0.0
  - @ag.ds-next/footer@6.0.1
  - @ag.ds-next/header@8.0.0
  - @ag.ds-next/heading@6.0.1
  - @ag.ds-next/icon@8.0.0
  - @ag.ds-next/inpage-nav@4.0.0
  - @ag.ds-next/keyword-list@4.0.0
  - @ag.ds-next/link-list@7.0.0
  - @ag.ds-next/loading@3.0.0
  - @ag.ds-next/search-box@8.0.0
  - @ag.ds-next/select@8.0.0
  - @ag.ds-next/side-nav@9.0.0
  - @ag.ds-next/skip-link@5.0.0
  - @ag.ds-next/table@3.0.0
  - @ag.ds-next/tags@4.0.0
  - @ag.ds-next/text-input@8.0.0
  - @ag.ds-next/textarea@8.0.0

## 0.4.0

### Minor Changes

- f596c8b5: Show/hide code example
- 2349d6c8: Prevent body styles from being inherited in live code examples
- 94338184: Add mq function to Playroom

### Patch Changes

- 2349d6c8: Updated code theme to match body styles
- 0e3c9d9e: Add Storybook links to docs site
- b1a5f7e3: Add `Open in Playroom` link to interactive code examples
- 99f031dd: Remove `type` from releases
- Updated dependencies [ce428c01]
- Updated dependencies [ae1ca403]
- Updated dependencies [0e3c9d9e]
- Updated dependencies [00362da6]
- Updated dependencies [2e52d3d2]
- Updated dependencies [6483d4b5]
- Updated dependencies [71bdfef2]
- Updated dependencies [3062abfa]
- Updated dependencies [ae1ca403]
- Updated dependencies [ae1ca403]
- Updated dependencies [71bdfef2]
- Updated dependencies [be5e2c2a]
- Updated dependencies [2e52d3d2]
- Updated dependencies [71bdfef2]
- Updated dependencies [f596c8b5]
- Updated dependencies [5195c600]
- Updated dependencies [eea76e11]
- Updated dependencies [2349d6c8]
- Updated dependencies [edffae08]
  - @ag.ds-next/hero-banner@2.0.0
  - @ag.ds-next/file-upload@1.0.0
  - @ag.ds-next/a11y@1.0.2
  - @ag.ds-next/accordion@5.0.0
  - @ag.ds-next/ag-branding@5.0.0
  - @ag.ds-next/body@6.0.0
  - @ag.ds-next/box@5.0.0
  - @ag.ds-next/breadcrumbs@8.0.0
  - @ag.ds-next/button@7.0.0
  - @ag.ds-next/call-to-action@4.0.0
  - @ag.ds-next/callout@3.0.0
  - @ag.ds-next/card@4.0.0
  - @ag.ds-next/columns@5.0.0
  - @ag.ds-next/control-input@7.0.0
  - @ag.ds-next/core@2.2.0
  - @ag.ds-next/date-picker@3.0.0
  - @ag.ds-next/direction-link@4.0.0
  - @ag.ds-next/field@6.0.0
  - @ag.ds-next/fieldset@3.0.0
  - @ag.ds-next/footer@6.0.0
  - @ag.ds-next/header@7.0.0
  - @ag.ds-next/heading@6.0.0
  - @ag.ds-next/icon@7.0.0
  - @ag.ds-next/inpage-nav@3.0.0
  - @ag.ds-next/keyword-list@3.0.0
  - @ag.ds-next/link-list@6.0.0
  - @ag.ds-next/loading@2.0.0
  - @ag.ds-next/main-nav@9.0.0
  - @ag.ds-next/page-alert@3.0.0
  - @ag.ds-next/progress-indicator@6.0.0
  - @ag.ds-next/search-box@7.0.0
  - @ag.ds-next/select@7.0.0
  - @ag.ds-next/side-nav@8.0.0
  - @ag.ds-next/skip-link@4.0.0
  - @ag.ds-next/table@2.0.0
  - @ag.ds-next/tags@3.0.0
  - @ag.ds-next/task-list@4.0.0
  - @ag.ds-next/text@6.0.0
  - @ag.ds-next/text-input@7.0.0
  - @ag.ds-next/textarea@7.0.0
  - @ag.ds-next/content@6.0.0
  - @ag.ds-next/form-stack@3.0.0

## 0.3.0

### Minor Changes

- 5919f48f: Modal pictogram
- 80f3fbf6: Add new Pictograms

### Patch Changes

- 49694d1f: Add welcome to country to footer
- Updated dependencies [3f6803d6]
- Updated dependencies [3f6803d6]
- Updated dependencies [cd053653]
- Updated dependencies [7384726a]
- Updated dependencies [6336cb22]
- Updated dependencies [4a29ac1a]
- Updated dependencies [4869ca9a]
- Updated dependencies [3e2abfe3]
- Updated dependencies [556ee539]
- Updated dependencies [f9432f01]
- Updated dependencies [4869ca9a]
- Updated dependencies [c1b67108]
- Updated dependencies [c8445564]
- Updated dependencies [27e83c48]
- Updated dependencies [38fbc85c]
- Updated dependencies [181b58f6]
- Updated dependencies [3f6803d6]
- Updated dependencies [68d7435f]
- Updated dependencies [c15a9374]
- Updated dependencies [4869ca9a]
- Updated dependencies [e90ab8e8]
- Updated dependencies [124bddeb]
- Updated dependencies [8db898f7]
- Updated dependencies [02c59f92]
- Updated dependencies [13ab6db0]
- Updated dependencies [9dbf6670]
- Updated dependencies [5478fc48]
- Updated dependencies [7c567fb6]
  - @ag.ds-next/field@5.1.0
  - @ag.ds-next/date-picker@2.0.0
  - @ag.ds-next/main-nav@8.1.0
  - @ag.ds-next/call-to-action@3.0.1
  - @ag.ds-next/loading@1.0.0
  - @ag.ds-next/box@4.1.1
  - @ag.ds-next/core@2.1.5
  - @ag.ds-next/progress-indicator@5.1.0
  - @ag.ds-next/control-input@6.0.0
  - @ag.ds-next/button@6.0.0
  - @ag.ds-next/footer@5.0.1
  - @ag.ds-next/accordion@4.1.0
  - @ag.ds-next/side-nav@7.1.0
  - @ag.ds-next/select@6.0.0
  - @ag.ds-next/text-input@6.0.0
  - @ag.ds-next/textarea@6.0.0
  - @ag.ds-next/table@1.0.1
  - @ag.ds-next/skip-link@3.0.0
  - @ag.ds-next/hero-banner@1.0.0
  - @ag.ds-next/ag-branding@4.1.2
  - @ag.ds-next/body@5.0.1
  - @ag.ds-next/card@3.0.1
  - @ag.ds-next/breadcrumbs@7.0.1
  - @ag.ds-next/callout@2.0.1
  - @ag.ds-next/columns@4.0.1
  - @ag.ds-next/content@5.0.1
  - @ag.ds-next/direction-link@3.0.1
  - @ag.ds-next/fieldset@2.0.1
  - @ag.ds-next/form-stack@2.0.1
  - @ag.ds-next/header@6.0.1
  - @ag.ds-next/heading@5.0.1
  - @ag.ds-next/icon@6.0.1
  - @ag.ds-next/inpage-nav@2.0.1
  - @ag.ds-next/keyword-list@2.0.1
  - @ag.ds-next/link-list@5.0.1
  - @ag.ds-next/page-alert@2.0.1
  - @ag.ds-next/search-box@6.0.0
  - @ag.ds-next/tags@2.0.1
  - @ag.ds-next/task-list@3.0.1
  - @ag.ds-next/text@5.0.1

## 0.2.4

### Patch Changes

- 737988e7: Updated mobile styles for `ProgressIndicator`
- c41903e7: - Added links to new starter kit
  - Added more info to getting started guide
- Updated dependencies [737988e7]
- Updated dependencies [41c0b427]
- Updated dependencies [819dffc4]
- Updated dependencies [1fb96813]
- Updated dependencies [819dffc4]
- Updated dependencies [1c084608]
- Updated dependencies [35f6f094]
- Updated dependencies [533c20f6]
- Updated dependencies [285fe4f1]
- Updated dependencies [c2d3c64a]
- Updated dependencies [b2270b13]
- Updated dependencies [1d641451]
- Updated dependencies [f50f3a0a]
- Updated dependencies [b2270b13]
- Updated dependencies [1c084608]
- Updated dependencies [fdd2328b]
- Updated dependencies [533c20f6]
  - @ag.ds-next/progress-indicator@5.0.0
  - @ag.ds-next/date-picker@1.0.0
  - @ag.ds-next/control-input@5.0.0
  - @ag.ds-next/field@5.0.0
  - @ag.ds-next/card@3.0.0
  - @ag.ds-next/core@2.1.4
  - @ag.ds-next/icon@6.0.0
  - @ag.ds-next/box@4.1.0
  - @ag.ds-next/button@5.0.0
  - @ag.ds-next/main-nav@8.0.0
  - @ag.ds-next/table@1.0.0
  - @ag.ds-next/select@5.0.0
  - @ag.ds-next/text-input@5.0.0
  - @ag.ds-next/textarea@5.0.0
  - @ag.ds-next/accordion@4.0.0
  - @ag.ds-next/ag-branding@4.1.1
  - @ag.ds-next/body@5.0.0
  - @ag.ds-next/breadcrumbs@7.0.0
  - @ag.ds-next/call-to-action@3.0.0
  - @ag.ds-next/callout@2.0.0
  - @ag.ds-next/columns@4.0.0
  - @ag.ds-next/content@5.0.0
  - @ag.ds-next/direction-link@3.0.0
  - @ag.ds-next/fieldset@2.0.0
  - @ag.ds-next/footer@5.0.0
  - @ag.ds-next/form-stack@2.0.0
  - @ag.ds-next/header@6.0.0
  - @ag.ds-next/heading@5.0.0
  - @ag.ds-next/inpage-nav@2.0.0
  - @ag.ds-next/keyword-list@2.0.0
  - @ag.ds-next/link-list@5.0.0
  - @ag.ds-next/page-alert@2.0.0
  - @ag.ds-next/search-box@5.0.0
  - @ag.ds-next/side-nav@7.0.0
  - @ag.ds-next/skip-link@2.0.0
  - @ag.ds-next/tags@2.0.0
  - @ag.ds-next/task-list@3.0.0
  - @ag.ds-next/text@5.0.0

## 0.2.3

### Patch Changes

- 9d385f89: Added forms guide
- 1ccdcd15: Add more information to getting started guide
- 98a1811e: Updated documentation
- 5c399ebb: Updated dependencies
- 263358cb: Removed storybook ie11 support
- 3b5c3ac4: Add CTA link to home page
- Updated dependencies [fe63315e]
- Updated dependencies [335dd760]
- Updated dependencies [aa23d98f]
- Updated dependencies [e8ea2abe]
- Updated dependencies [d9d84a6b]
- Updated dependencies [98a1811e]
- Updated dependencies [98a1811e]
- Updated dependencies [f05e58d8]
- Updated dependencies [b93e3ca6]
- Updated dependencies [ce3b91c5]
- Updated dependencies [e9a397ec]
- Updated dependencies [f05e58d8]
- Updated dependencies [a6fdf372]
- Updated dependencies [1ddaad1c]
- Updated dependencies [f05e58d8]
  - @ag.ds-next/card@2.1.2
  - @ag.ds-next/side-nav@6.0.0
  - @ag.ds-next/ag-branding@4.1.0
  - @ag.ds-next/core@2.1.3
  - @ag.ds-next/page-alert@1.0.0
  - @ag.ds-next/fieldset@1.0.1
  - @ag.ds-next/form-stack@1.0.1
  - @ag.ds-next/footer@4.0.3
  - @ag.ds-next/header@5.0.1
  - @ag.ds-next/select@4.0.0
  - @ag.ds-next/task-list@2.0.0
  - @ag.ds-next/icon@5.1.0
  - @ag.ds-next/control-input@4.0.0
  - @ag.ds-next/field@4.0.0
  - @ag.ds-next/text-input@4.0.0
  - @ag.ds-next/textarea@4.0.0
  - @ag.ds-next/progress-indicator@4.0.0
  - @ag.ds-next/accordion@3.0.0
  - @ag.ds-next/body@4.0.3
  - @ag.ds-next/box@4.0.3
  - @ag.ds-next/breadcrumbs@6.0.0
  - @ag.ds-next/button@4.0.3
  - @ag.ds-next/call-to-action@2.0.0
  - @ag.ds-next/callout@1.0.1
  - @ag.ds-next/columns@3.0.3
  - @ag.ds-next/content@4.0.3
  - @ag.ds-next/direction-link@2.0.0
  - @ag.ds-next/heading@4.0.3
  - @ag.ds-next/inpage-nav@1.0.2
  - @ag.ds-next/keyword-list@1.0.3
  - @ag.ds-next/link-list@4.0.3
  - @ag.ds-next/main-nav@7.0.0
  - @ag.ds-next/search-box@4.0.0
  - @ag.ds-next/skip-link@1.0.3
  - @ag.ds-next/tags@1.0.1
  - @ag.ds-next/text@4.0.3

## 0.2.2

### Patch Changes

- 60822794: - Restricted the `size` prop in the `Icon` component to accept only `sm` and `md`
  - Removed vector scaling from icon components
  - Updated usage of icons
- 2a06c8c5: Fixed layout issue on mobile
- 22f57db3: Use new Icon components
- 60822794: Updated `icon` prop API to be consistent with `Button` and updated usage
- 7f919084: Used new `tag` component in release page
- Updated dependencies [974b379d]
- Updated dependencies [7e58e438]
- Updated dependencies [60822794]
- Updated dependencies [74bd2fff]
- Updated dependencies [4a45d834]
- Updated dependencies [a48ac575]
- Updated dependencies [f61e4466]
- Updated dependencies [0bf021f6]
- Updated dependencies [f185fbf9]
- Updated dependencies [a35f83a5]
- Updated dependencies [eb7b2b1e]
- Updated dependencies [1ea67132]
- Updated dependencies [42b85722]
- Updated dependencies [89e8a5bd]
- Updated dependencies [cb844b7e]
- Updated dependencies [2a6c7516]
- Updated dependencies [22f57db3]
- Updated dependencies [cb844b7e]
- Updated dependencies [60822794]
- Updated dependencies [d1d414c9]
- Updated dependencies [2e6085ef]
- Updated dependencies [b71b667d]
- Updated dependencies [42b85722]
- Updated dependencies [96690306]
- Updated dependencies [19dfa596]
- Updated dependencies [d1d414c9]
- Updated dependencies [1c2bd6b3]
- Updated dependencies [cb844b7e]
- Updated dependencies [2e6085ef]
- Updated dependencies [11113d3a]
- Updated dependencies [6e62afe1]
- Updated dependencies [cc5412a1]
- Updated dependencies [3cb18aed]
- Updated dependencies [d263c0cc]
- Updated dependencies [fd41c54a]
- Updated dependencies [cfea9d7e]
- Updated dependencies [7f919084]
- Updated dependencies [3d4831cd]
- Updated dependencies [72e9eb7f]
- Updated dependencies [22f57db3]
  - @ag.ds-next/direction-link@1.0.0
  - @ag.ds-next/main-nav@6.0.0
  - @ag.ds-next/progress-indicator@3.0.0
  - @ag.ds-next/form-stack@1.0.0
  - @ag.ds-next/accordion@2.0.0
  - @ag.ds-next/breadcrumbs@5.0.0
  - @ag.ds-next/card@2.1.1
  - @ag.ds-next/field@3.0.0
  - @ag.ds-next/icon@5.0.0
  - @ag.ds-next/search-box@3.0.0
  - @ag.ds-next/side-nav@5.0.0
  - @ag.ds-next/text-input@3.0.0
  - @ag.ds-next/select@3.0.0
  - @ag.ds-next/textarea@3.0.0
  - @ag.ds-next/link-list@4.0.2
  - @ag.ds-next/call-to-action@1.0.0
  - @ag.ds-next/fieldset@1.0.0
  - @ag.ds-next/box@4.0.2
  - @ag.ds-next/button@4.0.2
  - @ag.ds-next/core@2.1.2
  - @ag.ds-next/header@5.0.0
  - @ag.ds-next/content@4.0.2
  - @ag.ds-next/callout@1.0.0
  - @ag.ds-next/task-list@1.0.0
  - @ag.ds-next/keyword-list@1.0.2
  - @ag.ds-next/tags@1.0.0
  - @ag.ds-next/body@4.0.2
  - @ag.ds-next/inpage-nav@1.0.1
  - @ag.ds-next/skip-link@1.0.2
  - @ag.ds-next/control-input@3.0.0
  - @ag.ds-next/columns@3.0.2
  - @ag.ds-next/footer@4.0.2
  - @ag.ds-next/heading@4.0.2
  - @ag.ds-next/text@4.0.2
  - @ag.ds-next/ag-branding@4.0.2

## 0.2.1

### Patch Changes

- c6c6c26: Updated usage of `MainNav`
- Updated dependencies [ae3ddb0]
- Updated dependencies [c6c6c26]
- Updated dependencies [bebc219]
- Updated dependencies [77aaeba]
- Updated dependencies [5d3891e]
- Updated dependencies [54339e9]
  - @ag.ds-next/select@2.0.2
  - @ag.ds-next/main-nav@5.0.1
  - @ag.ds-next/inpage-nav@1.0.0
  - @ag.ds-next/control-input@2.0.2
  - @ag.ds-next/progress-indicator@2.0.2

## 0.2.0

### Minor Changes

- 91528c5: Implement Alpha badge in Header

### Patch Changes

- fe056ee: Add `CardHeader`, `CardFooter` and `CardList`
- 135bb87: Updated `LinkComponent` to use an `a` tag when linking to external sites
- f8cba6b: Added skip links to documentation site
- ffa1b11: Updated snippets using the `aria-label` attribute
- Updated dependencies [fe056ee]
- Updated dependencies [135bb87]
- Updated dependencies [c16dbbe]
- Updated dependencies [2af17ba]
- Updated dependencies [935e833]
- Updated dependencies [66eb7ed]
- Updated dependencies [c16dbbe]
- Updated dependencies [ffa1b11]
- Updated dependencies [653709c]
- Updated dependencies [7abc9d8]
- Updated dependencies [bd36abb]
- Updated dependencies [d28a3c4]
- Updated dependencies [ffa1b11]
- Updated dependencies [653709c]
- Updated dependencies [f8cba6b]
- Updated dependencies [ffd5cba]
- Updated dependencies [c1ef321]
- Updated dependencies [91528c5]
- Updated dependencies [c3a5ded]
- Updated dependencies [69cdd3d]
- Updated dependencies [f8cba6b]
- Updated dependencies [a51f0d9]
  - @ag.ds-next/card@2.1.0
  - @ag.ds-next/breadcrumbs@4.0.1
  - @ag.ds-next/button@4.0.1
  - @ag.ds-next/core@2.1.1
  - @ag.ds-next/keyword-list@1.0.1
  - @ag.ds-next/link-list@4.0.1
  - @ag.ds-next/main-nav@5.0.0
  - @ag.ds-next/progress-indicator@2.0.1
  - @ag.ds-next/side-nav@4.0.1
  - @ag.ds-next/skip-link@1.0.1
  - @ag.ds-next/text@4.0.1
  - @ag.ds-next/body@4.0.1
  - @ag.ds-next/box@4.0.1
  - @ag.ds-next/control-input@2.0.1
  - @ag.ds-next/field@2.0.1
  - @ag.ds-next/footer@4.0.1
  - @ag.ds-next/heading@4.0.1
  - @ag.ds-next/search-box@2.0.1
  - @ag.ds-next/select@2.0.1
  - @ag.ds-next/text-input@2.0.1
  - @ag.ds-next/accordion@1.0.1
  - @ag.ds-next/header@4.1.0
  - @ag.ds-next/ag-branding@4.0.1
  - @ag.ds-next/columns@3.0.1
  - @ag.ds-next/icon@4.0.1
  - @ag.ds-next/textarea@2.0.1
  - @ag.ds-next/content@4.0.1

## 0.1.3

### Patch Changes

- 6831b2f: Updated usage of `SearchBox` after API change
- Updated dependencies [be7b54f]
- Updated dependencies [2aff143]
- Updated dependencies [088ff6c]
- Updated dependencies [0ccabe5]
- Updated dependencies [9680133]
- Updated dependencies [6831b2f]
- Updated dependencies [c7d2a66]
- Updated dependencies [cd7e437]
- Updated dependencies [cd7e437]
- Updated dependencies [0b1ed6c]
- Updated dependencies [a7a00b7]
- Updated dependencies [a7a00b7]
- Updated dependencies [8504053]
- Updated dependencies [1a91ea3]
- Updated dependencies [23f1c08]
- Updated dependencies [e3f309e]
- Updated dependencies [178d952]
- Updated dependencies [d94cb5d]
- Updated dependencies [3e8b39b]
- Updated dependencies [ccaa011]
- Updated dependencies [b6a9bd9]
- Updated dependencies [86cf334]
- Updated dependencies [d94cb5d]
- Updated dependencies [214cbf9]
- Updated dependencies [01b9691]
- Updated dependencies [fe0b19c]
- Updated dependencies [cb58bc1]
- Updated dependencies [9680133]
- Updated dependencies [9d19a2a]
- Updated dependencies [b6a9bd9]
- Updated dependencies [2d985a6]
- Updated dependencies [9680133]
- Updated dependencies [214cbf9]
- Updated dependencies [3e8b39b]
  - @ag.ds-next/side-nav@4.0.0
  - @ag.ds-next/ag-branding@4.0.0
  - @ag.ds-next/button@4.0.0
  - @ag.ds-next/select@2.0.0
  - @ag.ds-next/text-input@2.0.0
  - @ag.ds-next/core@2.1.0
  - @ag.ds-next/search-box@2.0.0
  - @ag.ds-next/box@4.0.0
  - @ag.ds-next/accordion@1.0.0
  - @ag.ds-next/textarea@2.0.0
  - @ag.ds-next/field@2.0.0
  - @ag.ds-next/breadcrumbs@4.0.0
  - @ag.ds-next/header@4.0.0
  - @ag.ds-next/control-input@2.0.0
  - @ag.ds-next/columns@3.0.0
  - @ag.ds-next/icon@4.0.0
  - @ag.ds-next/link-list@4.0.0
  - @ag.ds-next/main-nav@4.0.0
  - @ag.ds-next/progress-indicator@2.0.0
  - @ag.ds-next/text@4.0.0
  - @ag.ds-next/card@2.0.0
  - @ag.ds-next/body@4.0.0
  - @ag.ds-next/content@4.0.0
  - @ag.ds-next/footer@4.0.0
  - @ag.ds-next/heading@4.0.0

## 0.1.2

### Patch Changes

- 2d1576b: Added new `Columns` component
- 56c2179: Layout changes from review
- 4d2c4a5: Rename background.page to body
- c4de3f7: Add Guides section
- ef5d708: Move TextLink to Text
- fd181c9: Swapped the naming of theme and palette to better reflect expectations

  `theme` now means the global set of colours which are applied to the a site as a whole. Eg. Gold theme or Agriculture theme.

  `palette` (aka. `boxPalette`) is the set of colours to be applied within a Box or related component. Eg. `<Box palette="dark" />`

- 21aa449: Use Columns component for page layout
- b76fddb: Remove usage of NextImage to fix builds
- 2b2ae0b: Improve information architecture
- Updated dependencies [54e2d1d]
- Updated dependencies [c995f6e]
- Updated dependencies [bd69a75]
- Updated dependencies [d860253]
- Updated dependencies [439f22c]
- Updated dependencies [2d1576b]
- Updated dependencies [3194f79]
- Updated dependencies [bd3a1bb]
- Updated dependencies [56c2179]
- Updated dependencies [4d2c4a5]
- Updated dependencies [744d620]
- Updated dependencies [c995f6e]
- Updated dependencies [9986517]
- Updated dependencies [ef5d708]
- Updated dependencies [d860253]
- Updated dependencies [9336772]
- Updated dependencies [ea3087e]
- Updated dependencies [6f7ad65]
- Updated dependencies [e220b64]
- Updated dependencies [0d4cf72]
- Updated dependencies [fd181c9]
- Updated dependencies [e1c6866]
- Updated dependencies [21aa449]
- Updated dependencies [e220b64]
- Updated dependencies [dfc68f0]
- Updated dependencies [c995f6e]
- Updated dependencies [a7ec30f]
- Updated dependencies [889e832]
- Updated dependencies [5517fac]
  - @ag.ds-next/footer@3.0.0
  - @ag.ds-next/body@3.0.0
  - @ag.ds-next/box@3.0.0
  - @ag.ds-next/breadcrumbs@3.0.0
  - @ag.ds-next/side-nav@3.0.0
  - @ag.ds-next/header@3.0.0
  - @ag.ds-next/icon@3.0.0
  - @ag.ds-next/columns@2.0.0
  - @ag.ds-next/core@2.0.0
  - @ag.ds-next/heading@3.0.0
  - @ag.ds-next/text@3.0.0
  - @ag.ds-next/ag-branding@3.0.0
  - @ag.ds-next/main-nav@3.0.0
  - @ag.ds-next/button@3.0.0
  - @ag.ds-next/link-list@3.0.0
  - @ag.ds-next/card@1.0.0
  - @ag.ds-next/content@3.0.0

## 0.1.1

### Patch Changes

- Updated dependencies [e1cf05c]
  - @ag.ds-next/breadcrumbs@2.0.1
  - @ag.ds-next/icon@2.0.1

## 0.1.0

### Minor Changes

- 6048f94: Playroom fixes

### Patch Changes

- c13a0e6: Refactor LinkList, new subcomponents and improved spacing
- 8118c18: Add Icon component
- 62bc031: - Added new `Breadcrumbs` component
  - Renamed `LinkListGroup` to `LinkListContainer`
  - Updated `Icon` component to allow spreading of SVG props
- Updated dependencies [c13a0e6]
- Updated dependencies [a78a224]
- Updated dependencies [6048f94]
- Updated dependencies [40c6ab2]
- Updated dependencies [e3c292c]
- Updated dependencies [50d3dd9]
- Updated dependencies [62bc031]
- Updated dependencies [331c577]
  - @ag.ds-next/link-list@2.0.0
  - @ag.ds-next/ag-branding@2.0.0
  - @ag.ds-next/footer@2.0.0
  - @ag.ds-next/header@2.0.0
  - @ag.ds-next/core@1.1.0
  - @ag.ds-next/body@2.0.0
  - @ag.ds-next/main-nav@2.0.0
  - @ag.ds-next/side-nav@2.0.0
  - @ag.ds-next/text-link@2.0.0
  - @ag.ds-next/breadcrumbs@2.0.0
  - @ag.ds-next/icon@2.0.0
  - @ag.ds-next/box@2.0.0
  - @ag.ds-next/button@2.0.0
  - @ag.ds-next/content@2.0.0
  - @ag.ds-next/heading@2.0.0
  - @ag.ds-next/text@2.0.0

## 0.0.2

### Patch Changes

- Updated dependencies [458f1db]
- Updated dependencies [458f1db]
- Updated dependencies [458f1db]
  - @ag.ds-next/body@1.0.1
  - @ag.ds-next/core@1.0.1
  - @ag.ds-next/link-list@1.0.1
  - @ag.ds-next/main-nav@1.0.1
  - @ag.ds-next/box@1.0.1
  - @ag.ds-next/ag-branding@1.0.1
  - @ag.ds-next/button@1.0.1
  - @ag.ds-next/content@1.0.1
  - @ag.ds-next/footer@1.0.1
  - @ag.ds-next/header@1.0.1
  - @ag.ds-next/heading@1.0.1
  - @ag.ds-next/text@1.0.1
  - @ag.ds-next/text-link@1.0.1
