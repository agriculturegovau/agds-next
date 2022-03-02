# @ag.ds-next/side-nav

## 4.0.1

### Patch Changes

- 135bb87: Updated link components to accept all anchor element HTML attributes
- c16dbbe: - Added new token `borderWidths` to `core`
  - Added new props to `Box` for configuring border widths
  - Replaced usage of inline border widths with new token values
- 2af17ba: Removed overflow to improve focus state
- ffa1b11: Ensured consistent API of `aria-label`
- c3a5ded: Improved the typescript types of components with children or extend default HTML elements
- Updated dependencies [135bb87]
- Updated dependencies [c16dbbe]
- Updated dependencies [653709c]
- Updated dependencies [bd36abb]
- Updated dependencies [c3a5ded]
  - @ag.ds-next/core@2.1.1
  - @ag.ds-next/box@4.0.1
  - @ag.ds-next/a11y@1.0.1
  - @ag.ds-next/icon@4.0.1

## 4.0.0

### Minor Changes

- cd7e437: Implement collapsing logic in SideNav

### Patch Changes

- be7b54f: Wrap title in H2. Adjust lineheight
- 0ccabe5: Adjust padding for mobile breakpoints
- 8504053: Used new `VisuallyHidden` component
- 3e8b39b: Added `packs` to core and updated usage
- Updated dependencies [9680133]
- Updated dependencies [c7d2a66]
- Updated dependencies [cd7e437]
- Updated dependencies [d94cb5d]
- Updated dependencies [b6a9bd9]
- Updated dependencies [214cbf9]
- Updated dependencies [9680133]
- Updated dependencies [b6a9bd9]
- Updated dependencies [214cbf9]
- Updated dependencies [3e8b39b]
  - @ag.ds-next/core@2.1.0
  - @ag.ds-next/box@4.0.0
  - @ag.ds-next/icon@4.0.0

## 3.0.0

### Patch Changes

- bd69a75: Read our current page for all levels
- 56c2179: Layout changes from review
- 4d2c4a5: Rename background.page to body
- 6f7ad65: Fix active state
- fd181c9: Swapped the naming of theme and palette to better reflect expectations

  `theme` now means the global set of colours which are applied to the a site as a whole. Eg. Gold theme or Agriculture theme.

  `palette` (aka. `boxPalette`) is the set of colours to be applied within a Box or related component. Eg. `<Box palette="dark" />`

- Updated dependencies [c995f6e]
- Updated dependencies [3194f79]
- Updated dependencies [bd3a1bb]
- Updated dependencies [4d2c4a5]
- Updated dependencies [9986517]
- Updated dependencies [d860253]
- Updated dependencies [0d4cf72]
- Updated dependencies [fd181c9]
- Updated dependencies [e1c6866]
- Updated dependencies [c995f6e]
- Updated dependencies [5517fac]
  - @ag.ds-next/box@3.0.0
  - @ag.ds-next/core@2.0.0

## 2.0.0

### Patch Changes

- 50d3dd9: - Fixed internal usage of `themeVars` vs `themeValues`
  - Use the LinkComponent from Core in TextLink
  - Added `agriculture` variant to `MainNav` component.
- 62bc031: - Added new `Breadcrumbs` component
  - Renamed `LinkListGroup` to `LinkListContainer`
  - Updated `Icon` component to allow spreading of SVG props
- Updated dependencies [6048f94]
- Updated dependencies [50d3dd9]
  - @ag.ds-next/core@1.1.0
  - @ag.ds-next/box@2.0.0
