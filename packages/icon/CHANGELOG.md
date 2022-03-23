# @ag.ds-next/icon

## 5.1.0

### Minor Changes

- f05e58d8: Add InfoFilledIcon and WarningFilledIcon

### Patch Changes

- Updated dependencies [e8ea2abe]
  - @ag.ds-next/core@2.1.3
  - @ag.ds-next/box@4.0.3
  - @ag.ds-next/text@4.0.3

## 5.0.0

### Major Changes

- 22f57db3: All-new Icon components

### Minor Changes

- 60822794: - Restricted the `size` prop in the `Icon` component to accept only `sm` and `md`
  - Removed vector scaling from icon components
  - Updated usage of icons

### Patch Changes

- a35f83a5: Updated documentation
- 42b85722: Export `IconProps` type
- cfea9d7e: Support classnames, Don't scale strokes
- Updated dependencies [89e8a5bd]
- Updated dependencies [d1d414c9]
- Updated dependencies [cb844b7e]
  - @ag.ds-next/box@4.0.2
  - @ag.ds-next/core@2.1.2
  - @ag.ds-next/text@4.0.2

## 4.0.1

### Patch Changes

- c3a5ded: Improved the typescript types of components with children or extend default HTML elements
- Updated dependencies [135bb87]
- Updated dependencies [c16dbbe]
- Updated dependencies [653709c]
- Updated dependencies [bd36abb]
  - @ag.ds-next/core@2.1.1
  - @ag.ds-next/text@4.0.1
  - @ag.ds-next/box@4.0.1

## 4.0.0

### Patch Changes

- b6a9bd9: Removed export of `IconExamples`
- 214cbf9: Updated the `size` prop to be required as it has a default value.
- b6a9bd9: Renamed component files from `index.ts`
- Updated dependencies [9680133]
- Updated dependencies [c7d2a66]
- Updated dependencies [cd7e437]
- Updated dependencies [d94cb5d]
- Updated dependencies [9680133]
- Updated dependencies [b6a9bd9]
- Updated dependencies [214cbf9]
- Updated dependencies [3e8b39b]
  - @ag.ds-next/core@2.1.0
  - @ag.ds-next/box@4.0.0
  - @ag.ds-next/text@4.0.0

## 3.0.0

### Minor Changes

- 439f22c: New icon designs

### Patch Changes

- 3194f79: Updated documentation
- fd181c9: Swapped the naming of theme and palette to better reflect expectations

  `theme` now means the global set of colours which are applied to the a site as a whole. Eg. Gold theme or Agriculture theme.

  `palette` (aka. `boxPalette`) is the set of colours to be applied within a Box or related component. Eg. `<Box palette="dark" />`

- Updated dependencies [c995f6e]
- Updated dependencies [3194f79]
- Updated dependencies [bd3a1bb]
- Updated dependencies [4d2c4a5]
- Updated dependencies [9986517]
- Updated dependencies [ef5d708]
- Updated dependencies [d860253]
- Updated dependencies [0d4cf72]
- Updated dependencies [fd181c9]
- Updated dependencies [e1c6866]
- Updated dependencies [c995f6e]
- Updated dependencies [5517fac]
  - @ag.ds-next/box@3.0.0
  - @ag.ds-next/core@2.0.0
  - @ag.ds-next/text@3.0.0

## 2.0.1

### Patch Changes

- e1cf05c: Include correct dependencies

## 2.0.0

### Patch Changes

- 62bc031: - Added new `Breadcrumbs` component
  - Renamed `LinkListGroup` to `LinkListContainer`
  - Updated `Icon` component to allow spreading of SVG props
- Updated dependencies [6048f94]
- Updated dependencies [50d3dd9]
  - @ag.ds-next/core@1.1.0
