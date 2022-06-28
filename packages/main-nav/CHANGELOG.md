# @ag.ds-next/main-nav

## 12.0.0

### Minor Changes

- 724f47ec: Removed `target="_blank"` from all links as per accessibility recommendations.

### Patch Changes

- Updated dependencies [cc586fd2]
- Updated dependencies [724f47ec]
  - @ag.ds-next/button@9.1.0

## 11.0.0

### Minor Changes

- 00cbe00f: Applied new `BaseButton` component to fix focus accessibility bug in safari.
- 8ddb8b61: Add support for React version 18

### Patch Changes

- 6fa3aa60: Fixed small eslint warnings after updating import order rule
- 9e94811e: Update link types after change in `Core`
- ac551394: Updated documentation
- Updated dependencies [c248ec2e]
- Updated dependencies [6fa3aa60]
- Updated dependencies [f8d3f116]
- Updated dependencies [00cbe00f]
- Updated dependencies [00cbe00f]
- Updated dependencies [afdc5214]
- Updated dependencies [8ddb8b61]
- Updated dependencies [6c5d1563]
- Updated dependencies [00cbe00f]
  - @ag.ds-next/core@3.0.0
  - @ag.ds-next/box@6.0.0
  - @ag.ds-next/button@9.0.0
  - @ag.ds-next/icon@9.0.0

## 10.0.0

### Patch Changes

- 9d64236c: Explicity pass `className` prop to components
- 182c3245: Added `MainNavBottomBar` for focus modes
- Updated dependencies [df01e99d]
- Updated dependencies [9d64236c]
  - @ag.ds-next/core@2.2.1
  - @ag.ds-next/box@5.0.1
  - @ag.ds-next/icon@8.0.0

## 9.0.0

### Minor Changes

- eea76e11: Add aria labels to MainNav buttons

### Patch Changes

- 0e3c9d9e: Add Storybook links to docs site
- 2e52d3d2: Added print media styles
- Updated dependencies [0e3c9d9e]
- Updated dependencies [ae1ca403]
- Updated dependencies [ae1ca403]
- Updated dependencies [2e52d3d2]
- Updated dependencies [71bdfef2]
- Updated dependencies [f596c8b5]
  - @ag.ds-next/box@5.0.0
  - @ag.ds-next/core@2.2.0
  - @ag.ds-next/icon@7.0.0

## 8.1.0

### Minor Changes

- cd053653: Improve accessibility for screenreader users

### Patch Changes

- 4a29ac1a: Remove data attributes for style overrides
- c1b67108: Return focus when modal is closed
- 124bddeb: Hide mobile toggle button if no links are supplied
- Updated dependencies [3e2abfe3]
  - @ag.ds-next/box@4.1.1
  - @ag.ds-next/core@2.1.5
  - @ag.ds-next/icon@6.0.1

## 8.0.0

### Patch Changes

- fdd2328b: Update focus lock libraries from `focus-trap-react` to `react-focus-lock`
- Updated dependencies [1c084608]
- Updated dependencies [35f6f094]
- Updated dependencies [533c20f6]
- Updated dependencies [1d641451]
- Updated dependencies [b2270b13]
  - @ag.ds-next/core@2.1.4
  - @ag.ds-next/icon@6.0.0
  - @ag.ds-next/box@4.1.0

## 7.0.0

### Patch Changes

- Updated dependencies [e8ea2abe]
- Updated dependencies [f05e58d8]
  - @ag.ds-next/core@2.1.3
  - @ag.ds-next/icon@5.1.0
  - @ag.ds-next/box@4.0.3

## 6.0.0

### Patch Changes

- 974b379d: Update usage of `forwardRefWithAs`
- 0bf021f6: Added `aria-current="page"` to active nav item
- 89e8a5bd: Added `underline` pack and updated usage
- 22f57db3: Use new Icon components
- 60822794: Updated `icon` prop API to be consistent with `Button` and updated usage
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

## 5.0.1

### Patch Changes

- c6c6c26: Fixed bugs with `secondaryLinks` and `rightContent`
- 54339e9: Added pointer cursor to `MainNavButton`

## 5.0.0

### Major Changes

- 653709c: Add support for global actions

### Patch Changes

- 135bb87: Updated link components to accept all anchor element HTML attributes
- c16dbbe: - Added new token `borderWidths` to `core`
  - Added new props to `Box` for configuring border widths
  - Replaced usage of inline border widths with new token values
- ffa1b11: Ensured consistent API of `aria-label`
- c3a5ded: Improved the typescript types of components with children or extend default HTML elements
- f8cba6b: Added `id` prop so it can be used with skip links
- Updated dependencies [135bb87]
- Updated dependencies [c16dbbe]
- Updated dependencies [653709c]
- Updated dependencies [bd36abb]
  - @ag.ds-next/core@2.1.1
  - @ag.ds-next/box@4.0.1

## 4.0.0

### Patch Changes

- fe0b19c: Fix issue where an active secondary link was also causing active Home link
- 3e8b39b: Added `packs` to core and updated usage
- Updated dependencies [9680133]
- Updated dependencies [c7d2a66]
- Updated dependencies [cd7e437]
- Updated dependencies [d94cb5d]
- Updated dependencies [9680133]
- Updated dependencies [214cbf9]
- Updated dependencies [3e8b39b]
  - @ag.ds-next/core@2.1.0
  - @ag.ds-next/box@4.0.0

## 3.0.0

### Patch Changes

- 56c2179: Layout changes from review
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

### Patch Changes

- 6048f94: Playroom fixes
- 50d3dd9: - Fixed internal usage of `themeVars` vs `themeValues`
  - Use the LinkComponent from Core in TextLink
  - Added `agriculture` variant to `MainNav` component.
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
