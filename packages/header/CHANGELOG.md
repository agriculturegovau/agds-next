# @ag.ds-next/header

## 6.0.1

### Patch Changes

- Updated dependencies [3e2abfe3]
  - @ag.ds-next/box@4.1.1
  - @ag.ds-next/core@2.1.5
  - @ag.ds-next/columns@4.0.1
  - @ag.ds-next/text@5.0.1

## 6.0.0

### Patch Changes

- Updated dependencies [1c084608]
- Updated dependencies [533c20f6]
- Updated dependencies [b2270b13]
  - @ag.ds-next/core@2.1.4
  - @ag.ds-next/box@4.1.0
  - @ag.ds-next/columns@4.0.0
  - @ag.ds-next/text@5.0.0

## 5.0.1

### Patch Changes

- b93e3ca6: Removed unused dependencies
- Updated dependencies [e8ea2abe]
  - @ag.ds-next/core@2.1.3
  - @ag.ds-next/box@4.0.3
  - @ag.ds-next/columns@3.0.3
  - @ag.ds-next/text@4.0.3

## 5.0.0

### Patch Changes

- 89e8a5bd: Added `underline` pack and updated usage
- Updated dependencies [60822794]
- Updated dependencies [4a45d834]
- Updated dependencies [89e8a5bd]
- Updated dependencies [22f57db3]
- Updated dependencies [d1d414c9]
- Updated dependencies [cb844b7e]
  - @ag.ds-next/search-box@3.0.0
  - @ag.ds-next/box@4.0.2
  - @ag.ds-next/core@2.1.2
  - @ag.ds-next/columns@3.0.2
  - @ag.ds-next/heading@4.0.2
  - @ag.ds-next/text@4.0.2

## 4.1.0

### Minor Changes

- 91528c5: Added badge

### Patch Changes

- ffa1b11: Ensured consistent API of `aria-label`
- ffd5cba: Visual tweaks to Header Badge
- c3a5ded: Improved the typescript types of components with children or extend default HTML elements
- Updated dependencies [135bb87]
- Updated dependencies [c16dbbe]
- Updated dependencies [ffa1b11]
- Updated dependencies [653709c]
- Updated dependencies [7abc9d8]
- Updated dependencies [bd36abb]
- Updated dependencies [ffa1b11]
- Updated dependencies [c3a5ded]
  - @ag.ds-next/core@2.1.1
  - @ag.ds-next/text@4.0.1
  - @ag.ds-next/box@4.0.1
  - @ag.ds-next/heading@4.0.1
  - @ag.ds-next/search-box@2.0.1
  - @ag.ds-next/columns@3.0.1

## 4.0.0

### Patch Changes

- 178d952: Updated `HeaderSearch` story
- ccaa011: Remove `BoxProps` from `Column` and `Columns`
- Updated dependencies [9680133]
- Updated dependencies [6831b2f]
- Updated dependencies [c7d2a66]
- Updated dependencies [cd7e437]
- Updated dependencies [8504053]
- Updated dependencies [d94cb5d]
- Updated dependencies [ccaa011]
- Updated dependencies [9680133]
- Updated dependencies [b6a9bd9]
- Updated dependencies [214cbf9]
- Updated dependencies [3e8b39b]
  - @ag.ds-next/core@2.1.0
  - @ag.ds-next/search-box@2.0.0
  - @ag.ds-next/box@4.0.0
  - @ag.ds-next/columns@3.0.0
  - @ag.ds-next/text@4.0.0
  - @ag.ds-next/heading@4.0.0

## 3.0.0

### Minor Changes

- d860253: Compose with Columns. Add rightContent slot.

### Patch Changes

- 56c2179: Layout changes from review
- 4d2c4a5: Rename background.page to body
- fd181c9: Swapped the naming of theme and palette to better reflect expectations

  `theme` now means the global set of colours which are applied to the a site as a whole. Eg. Gold theme or Agriculture theme.

  `palette` (aka. `boxPalette`) is the set of colours to be applied within a Box or related component. Eg. `<Box palette="dark" />`

- e220b64: Tweak responsive logic for text sizes
- a7ec30f: Adjust logo sizing for small breakpoints
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
  - @ag.ds-next/heading@3.0.0
  - @ag.ds-next/text@3.0.0

## 2.0.0

### Patch Changes

- a78a224: Fixed alignment when the site `Header` has no `subline`
  - header now uses the link component provided by `useLinkComponent` to wrap the `HeaderBrand`.
- Updated dependencies [6048f94]
- Updated dependencies [50d3dd9]
  - @ag.ds-next/core@1.1.0
  - @ag.ds-next/box@2.0.0
  - @ag.ds-next/heading@2.0.0
  - @ag.ds-next/text@2.0.0

## 1.0.1

### Patch Changes

- Updated dependencies [458f1db]
- Updated dependencies [458f1db]
  - @ag.ds-next/core@1.0.1
  - @ag.ds-next/box@1.0.1
  - @ag.ds-next/heading@1.0.1
  - @ag.ds-next/text@1.0.1

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
  - @ag.ds-next/heading@1.0.0
  - @ag.ds-next/text@1.0.0
