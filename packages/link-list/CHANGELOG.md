# @ag.ds-next/link-list

## 3.0.0

### Minor Changes

- ea3087e: Enable wrapping for LinkList

### Patch Changes

- 4d2c4a5: Rename background.page to body
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

### Minor Changes

- c13a0e6: Refactor LinkList, new subcomponents and improved spacing

### Patch Changes

- 6048f94: Playroom fixes
- 62bc031: - Added new `Breadcrumbs` component
  - Renamed `LinkListGroup` to `LinkListContainer`
  - Updated `Icon` component to allow spreading of SVG props
- 331c577: LinkListItem takes `children` instead of `label` prop
- Updated dependencies [6048f94]
- Updated dependencies [50d3dd9]
  - @ag.ds-next/core@1.1.0
  - @ag.ds-next/box@2.0.0

## 1.0.1

### Patch Changes

- 458f1db: Add a linkComponent to Core which can be used in LinkList and MainNav. This enables supporting Link components from `next.js` or `react-router` inside DS components.
- Updated dependencies [458f1db]
- Updated dependencies [458f1db]
  - @ag.ds-next/core@1.0.1
  - @ag.ds-next/box@1.0.1
  - @ag.ds-next/text-link@1.0.1

## 1.0.0

### Major Changes

- 7e4600a: Initial Test Release

  This is the initial pre-release of the base set of DS components. The goal of this release is to test the process. Expect things to be broken if you're trying to use components from this release.

  ### If this is just a test, why is it a "major release"

  TL;DR: Because it **is** a major release. Before there was nothing. Now there is something.

  The slightly more complete answer is that publishing anything below a `1.0.0` to npm can lead to some unexpected behaviour when it comes to resolving dependencies. These numbers only have meaning within a given context so there is little benefit to using `0.1.0` over `1.0.0` other than that it hints to users that this **may** not be stable. Just starting at `1.0.0` makes things easier.

### Patch Changes

- Updated dependencies [7e4600a]
  - @ag.ds-next/box@1.0.0
  - @ag.ds-next/core@1.0.0
  - @ag.ds-next/text-link@1.0.0
