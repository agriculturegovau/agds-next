# @ag.ds-next/text-input

## 13.0.0

### Minor Changes

- e05a47386: Removed `valid` prop

### Patch Changes

- b8d470ad0: Added new prop `hideOptionalLabel`. If true, "(optional)" will never be appended to the label even when `required` is `false`.
- 1f3bdfc4c: Adjusted form field max widths
- Updated dependencies [d5670236e]
- Updated dependencies [b8d470ad0]
- Updated dependencies [e05a47386]
- Updated dependencies [1f3bdfc4c]
  - @ag.ds-next/box@8.1.0
  - @ag.ds-next/field@12.0.0
  - @ag.ds-next/core@4.1.1

## 12.0.0

### Patch Changes

- bff0bf355: Added `autoFocus` prop
- 02b265c75: Fixed small typo in code
- 1be68516e: Set a default value of the `type` prop to `text`
- 74ca5f4c6: Fixed typo in styles
- def4b6687: Sort package.json files
- 1ed62efe7: Add support for `autoComplete` prop
- Updated dependencies [e11d39fc0]
- Updated dependencies [02b265c75]
- Updated dependencies [0ba460044]
- Updated dependencies [30726c674]
- Updated dependencies [e4c7ceb5f]
- Updated dependencies [def4b6687]
- Updated dependencies [70aa65c52]
- Updated dependencies [c128d8632]
- Updated dependencies [74ca5f4c6]
- Updated dependencies [6f06cd8cc]
- Updated dependencies [77ff925b0]
- Updated dependencies [355806633]
  - @ag.ds-next/field@11.0.0
  - @ag.ds-next/box@8.0.0
  - @ag.ds-next/core@4.1.0

## 11.0.0

### Minor Changes

- aad2cb62d: Update references to colour tokens

### Patch Changes

- Updated dependencies [aad2cb62d]
- Updated dependencies [aad2cb62d]
  - @ag.ds-next/box@7.0.0
  - @ag.ds-next/field@10.0.0
  - @ag.ds-next/core@4.0.0

## 10.0.0

### Minor Changes

- bef68c34e: - Updated documentation
  - Narrowed down prop types

### Patch Changes

- 042fb9e8c: Added `@babel/runtime` as a package dependency.
- Updated dependencies [0f76d269a]
- Updated dependencies [d43864f0e]
- Updated dependencies [26a7dc53c]
- Updated dependencies [062184833]
- Updated dependencies [3271a1fd3]
- Updated dependencies [27b6ef36b]
- Updated dependencies [46eea44f4]
- Updated dependencies [b67fa1685]
- Updated dependencies [042fb9e8c]
  - @ag.ds-next/box@6.1.0
  - @ag.ds-next/core@3.0.1
  - @ag.ds-next/field@9.0.0

## 9.0.0

### Minor Changes

- 8ddb8b61: Add support for React version 18

### Patch Changes

- 6fa3aa60: Fixed small eslint warnings after updating import order rule
- Updated dependencies [c248ec2e]
- Updated dependencies [6fa3aa60]
- Updated dependencies [afdc5214]
- Updated dependencies [8ddb8b61]
- Updated dependencies [6c5d1563]
- Updated dependencies [00cbe00f]
  - @ag.ds-next/core@3.0.0
  - @ag.ds-next/box@6.0.0
  - @ag.ds-next/field@8.0.0

## 8.0.0

### Patch Changes

- Updated dependencies [df01e99d]
- Updated dependencies [9d64236c]
  - @ag.ds-next/core@2.2.1
  - @ag.ds-next/box@5.0.1
  - @ag.ds-next/field@7.0.0

## 7.0.0

### Patch Changes

- 0e3c9d9e: Add Storybook links to docs site
- Updated dependencies [0e3c9d9e]
- Updated dependencies [2e52d3d2]
- Updated dependencies [71bdfef2]
  - @ag.ds-next/box@5.0.0
  - @ag.ds-next/core@2.2.0
  - @ag.ds-next/field@6.0.0

## 6.0.0

### Minor Changes

- 3f6803d6: Removed `requiredLabel` prop

### Patch Changes

- Updated dependencies [3f6803d6]
- Updated dependencies [3e2abfe3]
- Updated dependencies [3f6803d6]
  - @ag.ds-next/field@5.1.0
  - @ag.ds-next/box@4.1.1
  - @ag.ds-next/core@2.1.5

## 5.0.0

### Patch Changes

- Updated dependencies [819dffc4]
- Updated dependencies [819dffc4]
- Updated dependencies [1c084608]
- Updated dependencies [533c20f6]
- Updated dependencies [b2270b13]
  - @ag.ds-next/field@5.0.0
  - @ag.ds-next/core@2.1.4
  - @ag.ds-next/box@4.1.0

## 4.0.0

### Patch Changes

- a6fdf372: Added new prop `requiredLabel` which can be used to disable the "(optional)" and "(required)" label text
- Updated dependencies [e8ea2abe]
- Updated dependencies [a6fdf372]
  - @ag.ds-next/core@2.1.3
  - @ag.ds-next/field@4.0.0
  - @ag.ds-next/box@4.0.3

## 3.0.0

### Minor Changes

- fd41c54a: Replace `required` with `aria-required` to improve a11y

### Patch Changes

- 74bd2fff: Renamed type `InputProps` to `TextInputProps`
- 4a45d834: Fixed a bug in `Field` and updated usage so if an `id` prop is supplied, that value will be used instead of the auto generated ID.
- Updated dependencies [60822794]
- Updated dependencies [4a45d834]
- Updated dependencies [89e8a5bd]
- Updated dependencies [22f57db3]
- Updated dependencies [d1d414c9]
- Updated dependencies [cb844b7e]
- Updated dependencies [fd41c54a]
  - @ag.ds-next/field@3.0.0
  - @ag.ds-next/box@4.0.2
  - @ag.ds-next/core@2.1.2

## 2.0.1

### Patch Changes

- c16dbbe: - Added new token `borderWidths` to `core`
  - Added new props to `Box` for configuring border widths
  - Replaced usage of inline border widths with new token values
- c3a5ded: Improved the typescript types of components with children or extend default HTML elements
- Updated dependencies [135bb87]
- Updated dependencies [c16dbbe]
- Updated dependencies [653709c]
- Updated dependencies [bd36abb]
- Updated dependencies [c3a5ded]
  - @ag.ds-next/core@2.1.1
  - @ag.ds-next/box@4.0.1
  - @ag.ds-next/field@2.0.1
