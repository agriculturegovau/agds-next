# @ag.ds-next/hero-banner

## 4.0.0

### Major Changes

- 8d25d373: - Removed `title` and `subTitle` prop from `HeroBanner`. This has been replaced with `HeroBannerTitle`, `HeroBannerSubtitle` and `HeroBannerTitleContainer`.
  - Created `HeroCategoryBanner` and `HeroSubcategoryBanner` components

### Minor Changes

- 8ddb8b61: Add support for React version 18

### Patch Changes

- 6fa3aa60: Fixed small eslint warnings after updating import order rule
- 27e26e25: Updated usage of the `Content` component
- bda91113: Adjust mobile padding values in `HeroBanner`, `HeroCategoryBanner` and `HeroSubcategoryBanner`
- Updated dependencies [c248ec2e]
- Updated dependencies [6fa3aa60]
- Updated dependencies [0e2cc75b]
- Updated dependencies [27e26e25]
- Updated dependencies [0e2cc75b]
- Updated dependencies [dd4f423d]
- Updated dependencies [afdc5214]
- Updated dependencies [8ddb8b61]
- Updated dependencies [6c5d1563]
- Updated dependencies [d748f7c9]
- Updated dependencies [00cbe00f]
  - @ag.ds-next/core@3.0.0
  - @ag.ds-next/box@6.0.0
  - @ag.ds-next/content@7.0.0
  - @ag.ds-next/heading@7.0.0
  - @ag.ds-next/text@8.0.0

## 3.0.0

### Minor Changes

- 7eccff5b: - Updated gradient direction to `90deg` to ensure the gradient always covers the image
  - Improved width of content when no image is supplied

### Patch Changes

- e93f10ca: Use `HeroBanner` on home page
- 48324e1d: Updated examples to utilise new `ButtonGroup` component
- Updated dependencies [df01e99d]
- Updated dependencies [8b7b300c]
- Updated dependencies [9d64236c]
- Updated dependencies [94a2c9b1]
- Updated dependencies [f9ec2e90]
  - @ag.ds-next/core@2.2.1
  - @ag.ds-next/text@7.0.0
  - @ag.ds-next/content@6.0.1
  - @ag.ds-next/box@5.0.1
  - @ag.ds-next/heading@6.0.1

## 2.0.0

### Minor Changes

- 5195c600: - Update image position strategy
  - Replaced `backgroundImageSrc` and `mobileImage` prop with `image`

### Patch Changes

- ce428c01: Updated padding in `HeroBannerContent` to fix content alignment issue
- 0e3c9d9e: Add Storybook links to docs site
- be5e2c2a: Reverse gradient direction to fix image not getting covered by gradient
- Updated dependencies [0e3c9d9e]
- Updated dependencies [2e52d3d2]
- Updated dependencies [71bdfef2]
  - @ag.ds-next/box@5.0.0
  - @ag.ds-next/core@2.2.0
  - @ag.ds-next/heading@6.0.0
  - @ag.ds-next/text@6.0.0
  - @ag.ds-next/content@6.0.0
