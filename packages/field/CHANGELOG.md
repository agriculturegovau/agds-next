# @ag.ds-next/field

## 4.0.0

### Patch Changes

- a6fdf372: Added new prop `requiredLabel` which can be used to disable the "(optional)" and "(required)" label text
- Updated dependencies [e8ea2abe]
- Updated dependencies [f05e58d8]
  - @ag.ds-next/core@2.1.3
  - @ag.ds-next/icon@5.1.0
  - @ag.ds-next/box@4.0.3
  - @ag.ds-next/text@4.0.3

## 3.0.0

### Minor Changes

- fd41c54a: Replace `required` with `aria-required` to improve a11y

### Patch Changes

- 60822794: - Restricted the `size` prop in the `Icon` component to accept only `sm` and `md`
  - Removed vector scaling from icon components
  - Updated usage of icons
- 4a45d834: Fixed a bug in `Field` and updated usage so if an `id` prop is supplied, that value will be used instead of the auto generated ID.
- 22f57db3: Use new Icon components
- Updated dependencies [60822794]
- Updated dependencies [a35f83a5]
- Updated dependencies [42b85722]
- Updated dependencies [89e8a5bd]
- Updated dependencies [d1d414c9]
- Updated dependencies [cb844b7e]
- Updated dependencies [cfea9d7e]
- Updated dependencies [22f57db3]
  - @ag.ds-next/icon@5.0.0
  - @ag.ds-next/box@4.0.2
  - @ag.ds-next/core@2.1.2
  - @ag.ds-next/text@4.0.2

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
  - @ag.ds-next/text@4.0.1
  - @ag.ds-next/box@4.0.1
  - @ag.ds-next/icon@4.0.1
