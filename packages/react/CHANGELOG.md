# @ag.ds-next/react

## 1.7.1

### Patch Changes

- 6d4cf66cae: core: Deduplicated use of `findBestMatch` from navigational components and moved into the `core` entrypoint.

  app-layout: Used `findBestMatch` utility function to ensure nav items are highlighted correctly based on the `activePath`.

  sub-nav: Used `findBestMatch` utility function to ensure nav items are highlighted correctly based on the `activePath`.

## 1.7.0

### Minor Changes

- bc80cb60f5: status-badge: Added new `weight` prop which can be used to set the visual weight of the badge. The two accepted values are `subtle` and `regular` (default).
- 44d7a5610a: core: Created a set of tokens for `z-index`
- afa37f2a43: Upgraded popover positioning dependency from React Popper to Floating UI
- 03decdf012: filter-drawer: Create initial component
- cbc0f401a0: page-alert: Added support for dismissing through a new `onDismiss` prop

### Patch Changes

- cf8b7f588f: app-layout: Change responsive behaviour so that the desktop layout is visible from the extra large breakpoint (1200px).
- f4a2792573: table: Added `fontWeight` prop to `TableCell`
- 82abee9a79: prose: Improved styles for figcaption
- 7470452022: modal: Fixed inconsistent padding on mobile
- beb9e47710: core: Removed `modalDialog` and `mobileMenu` max-width tokens as they are related to specific components.
- 898ad597d3: icon: Added `FactoryIcon`
- 57de28f13f: app-layout: Added new prop `badgeLabel` to `AppLayoutHeader` which can be used to indicate if an application is in a prerelease state.
- 41c7a04b21: prose: Increased margin between `hr` elements
- 4c4a5729e4: file-input: Removed red tint background from invalid state
- 2f6ab611e7: combobox: Improved hover styles

## 1.6.0

### Minor Changes

- 3f7d46f832: ## Box

  `Flex` and `Stack` have been moved to their own entry points.

  These components will continue to work out of the the `@ag.ds-next/react/box` entrypoint, but this usage has been marked as deprecated and will be removed in the next major release.

  To upgrade, update the import when using these components.

  ```diff
  - import { Box, Flex, Stack } from '@ag.ds-next/react/box';
  + import { Box } from '@ag.ds-next/react/box';
  + import { Flex } from '@ag.ds-next/react/flex';
  + import { Stack } from '@ag.ds-next/react/stack';
  ```

- 12bf142fd9: core: Created a new `overlay` design token which can be used as an overlay for modals and other components that sit on top of the main background.
- 4d84709678: `Checkbox`, `Radio` and `ControlGroup` have been moved to their own entry points.

  These components will continue to work out of the the `@ag.ds-next/react/control-input` entrypoint, but this usage has been marked as deprecated and will be removed in the next major release.

  To upgrade, update the import when using these components.

  ```diff
  - import { Checkbox, Radio, ControlGroup } from '@ag.ds-next/react/control-input';
  + import { Checkbox } from '@ag.ds-next/react/checkbox';
  + import { Radio } from '@ag.ds-next/react/radio';
  + import { ControlGroup } from '@ag.ds-next/react/control-group';
  ```

- c177bc6c95: date-range-picker: Updated container wrapping behaviour to allow the component to be placed in tight areas such as sidebars.
- 7e0f1ec100: `IndicatorDot`, `NotificationBadge` and `StatusBadge` have been moved to their own entry points.

  These components will continue to work out of the the `@ag.ds-next/react/badge` entrypoint, but this usage has been marked as deprecated and will be removed in the next major release.

  To upgrade, update the import when using these components.

  ```diff
  - import { IndicatorDot, NotificationBadge, StatusBadge } from '@ag.ds-next/react/badge';
  + import { IndicatorDot } from '@ag.ds-next/react/indicator-dot';
  + import { NotificationBadge } from '@ag.ds-next/react/notification-badge';
  + import { StatusBadge } from '@ag.ds-next/react/status-badge';
  ```

- 0942aab35d: `DateRangePicker` has been moved to it's own entry point.

  `DateRangePicker` will continue to work out of the the `@ag.ds-next/react/date-picker` entrypoint, but this usage has been marked as deprecated and will be removed in the next major release.

  To upgrade, update the import when using these components.

  ```diff
  - import { DateRangePicker } from '@ag.ds-next/react/date-picker';
  + import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
  ```

- 1fd2f2ceec: divider: Created new component `Divider`

### Patch Changes

- dc23907904: Autocomplete

  - Fixed bug where the "Clear" button was not being rendered as expected
  - Added new prop `emptyResultsMessage` which can be used to display a message when no options match the users search term

  Combobox

  - Fixed bug where the "Clear" button was not being rendered as expected

- 5f623c7016: combobox: Remove use-debounce dependency
- 7956c675a8: tags: Enabled wrapping behaviour to allow tags to flow across multiple lines.
- a92537a993: core: Created new hook `useAriaModalPolyfill` which adds `aria-hidden="true"` to every direct child of the `body` element when a modal is opened. This hook consolidates code that was previously copied/pasted across Modal, App layout and Main nav.
- bc11d4394e: file-upload: Removed the filesize third party dependency
- e4af9a6c11: app-layout: Updated `AppLayoutFooterDivider` border color from `border` to `borderMuted`
- 768b98090e: page-alert: Added support for a react element in the `title` prop
- a92537a993: app-layout: Adding missing aria dialog tags to mobile version of App layout sidebar.
- 11afd2c50a: combobox: Updated logic in the `splitLabel` helper function so options with special characters (brackets, slashes etc) are handled correctly.
- 2a86439bf9: file-upload: Made internal types available to consumers.

## 1.5.1

### Patch Changes

- da0458e9f7: app-layout: Reduce spacing between user avatar and user name in App layout header
- 7ff9d96a9b: app-layout: Fixed bug when server side rendering `AppLayoutSidebarDialog`

## 1.5.0

### Minor Changes

- f4aed33922: Replaced some react spring animations with CSS animations/transitions. This change improves performance by removing Javascript and utilising the browser's ability to process CSS.

  Accordion: Replaced chevron icon react spring animation with CSS animation

  Call to action: Removed icon animation on hover as it is inconsistent with AgDS interactions.

  Loading: Replaced react spring animation with CSS animation

  Modal: Replaced react spring animation with CSS animation

  Progress indicator: Replaced chevron icon react spring animation with CSS animation

  Side nav: Replaced chevron icon react spring animation with CSS animation

  Skeleton: Replaced react spring animation with CSS animation

  Switch: Replaced react spring animation with CSS animation

- b4fe9fe9b8: app-layout: Created a collection of components that can be composed together to create a layout for the authenticated space.

### Patch Changes

- 74bfce2981: main-nav: Replaced custom inline icons with design system icons `MenuIcon` and `CloseIcon`
- ca12a9df43: date-picker: Improved documentation examples and test coverage of `DateRangePicker`
- 92b79b5f67: core: Added new border token `xxl` which has a value of 8px.
- 3d5edea458: icon: Added new icons `ChevronsLeftIcon`, `ChevronsRightIcon` and `SettingsIcon`.
- 18125db5ad: combobox: Fixed exhaustive deps warning for the `onClear` function in `ComboboxAsyncMulti`
- 19c215cc0d: header: Updated header branding link size to match content

## 1.4.1

### Patch Changes

- 04829a478f: - combobox: Fixed controlled usage bug where `value` and `onChange` props were not being used/called in `ComboboxMulti` and `ComboboxAsyncMulti`
- 04829a478f: combobox: Updated disabled state in `ComboboxMulti` and `ComboboxAsyncMulti`
- 9b48dc0264: file-upload: Added support for `application/xml` and `text/xml` mime types.

## 1.4.0

### Minor Changes

- 2327b619e0: Combobox

  - Created new component `ComboboxMulti` which allows users to choose multiple items from a predefined list of options
  - Created new component `ComboboxAsyncMulti` which allows users to choose multiple items from a list of options that needs to be fetched over the network.
  - Upgraded internal dependency of `downshift` to version 7 which was updated to support the ARIA 1.2 combobox pattern

- b02a64147a: table: Created new component `TableHeaderSortable` which can be used in place of `TableHeader` when users can click a column header to sort the table.
- 2327b619e0: Autocomplete

  - Upgraded internal dependency of `downshift` to version 7 which was updated to support the ARIA 1.2 combobox pattern
  - Updated documentation
  - Fixed asynchronous test displaying a warning for performing a state update that is not wrapped in `act`

- 8c1f8daa66: progress-indicator: Added new status `started` which can be used to indicate that the step has been partially completed but is not active or selected.
- cd9d1db944: field: Update wrapping behaviour of label.
- 7569f78da7: icon: Added new icons: `HomeIcon` and `ExitIcon`.

### Patch Changes

- 36ff4165ab: date-picker: Fixed text colour bug when using in dark palette

  table: Fixed text colour bug when using `TableHeaderSortable` in dark palette

- e6155854c2: page-alert: Added flex growing to the content area
- 2da4ba7420: field: Extended the function returned from from `useScrollToField` to accept either a mouse event or an ID of a form field element. This change makes it easier for consumers to scroll and focus a form field on the same page in situations such as when a form first renders.
- 6a4b322201: badge: Added support for the `aria-hidden` prop in `NotificationBadge`

## 1.3.1

### Patch Changes

- f52eca2952: avatar: Render a span component
- e7d3c328ab: select: Updated styles for disabled state to fix default browser styles overrides.
- 546f3d7858: skip-links: Added high z-index to ensure the element is always placed above other elements on the page.

## 1.3.0

### Minor Changes

- 8074a9594d: Date picker

  - Updated default label to show "(optional)" when the field is not required. This is consistent with all other form components in the design system.

  Date range picker

  - Updated default label to show "(optional)" when the field is not required. This is consistent with all other form components in the design system.

- 8f27d1c5ea: Date range picker

  - Added support for a legend to be supplied via a new `legend` prop. If no legend is supplied, a default legend of `Date range` will be rendered but will be visually hidden
  - Added support for hint text via the `hint` prop
  - Added support for an invalid state via the `fromInvalid`, `toInvalid` and `message` prop

- 42d8d711c9: Removed dependency to Reach UI as it is no longer being maintained. The logic from `@reach/auto-id` has been forked and copied into the repo.
- fcc5cde78c: icon: Add ChevronsUpDownIcon, EmailIcon, FacebookIcon, InstagramIcon, LinkedInIcon, WebsiteIcon and TwitterIcon.
- 99a6b30916: Date picker

  - Added new prop `onInputChange` which can be used to track the value of the text input
  - Updated the type of the `value` prop so it can accept string (which represents the value of the text input)

  Date range picker

  - Added new prop `onFromInputChange` and `onToInputChange` which can be used to track the value of the text inputs
  - Updated the type of the `value` prop so it can accept string (which represents the value of the text inputs)

- 8074a9594d: Field

  - Updated behaviour of the `secondaryLabel` prop so it will prepend any text to the label instead of replacing default secondary label "(optional)".

- 3f245233e1: Side nav

  - Updated interface of link list items as per latest designs
  - Removed exports of primitive components and modular storybook example

- 1d4bb8a7b3: Date picker

  - Removed unused prop `placeholder`
  - Removed options `xs` and `sm` from `maxWidth` prop. These widths were too small to be used in this component.

### Patch Changes

- 5e8afca53b: table: Add support for `table-layout` property
  table: Widen types for column widths
- 54084988e9: Table: TableCell supports usage as a row header (th)
- 4cfd38ccb0: Table: support aria-labelledby and aria-describedby
- dbd3c05d9a: box: Updated the `palette` prop to accept responsive values. For example `<Box palette={["dark", "light"]} />`.
- 107ddf8b5d: ## Autocomplete

  Improved styles for disabled state

  ## Combobox

  Improved styles for disabled state

  ## Control Input

  Improved styles for disabled state

  ## Date Picker

  Improved styles for disabled state

  ## File Input

  Improved styles for disabled state

  ## File Upload

  Improved styles for disabled state

  ## Search Input

  Improved styles for disabled state

  ## Select

  Improved styles for disabled state

  ## TextInput

  Improved styles for disabled state

  ## Textarea

  Improved styless for disabled state

- 107ddf8b5d: combobox: Fixed bug where the dropdown trigger button and clear button were not being marked or shown as disabled
- 379536c7f5: - field: Added `className` prop to `FieldLabel`
  - field: Fixed typos in hook `useScrollToField`
  - field: Exported component props and added comments to props.
- 461f8da749: summary-list: Fixed a text colour bug when this component was placed inside dark palette. This was done by adding an explicit colour to `SummaryListItemTerm` and `SummaryListItemDescription`.
- c8e9a08fa1: table: Add support for ID prop
- 7ce426ca98: date-picker: Improved test coverage

## 1.2.1

### Patch Changes

- 1f7b6dafc: Avatar: Fix shrinking bug
- 6e91efe01: file-input: Update button size
- 5051525a7: button: Replaced transparent background in the `secondary` variant from `transparent` with body background colour.

## 1.2.0

### Minor Changes

- e212e210a: Created new component `Avatar`

### Patch Changes

- 26428ef8d: card: Revert back to pseudo-content trick for `CardLink`
- 95a0db5d6: icons: Add PlusIcon
- 54aa398c1: core: Added new `modalPanel` max-width token

  modal: Updated max-width of modal dialog

- 9fc4594eb: date-picker: Fixed bug where the text input component was not being updated correctly when the `value` prop changed.
- a3ec031e7: pagination: improved design for smaller devices
- 1dc47888b: select: Add support for sm size
- ee0d90b08: autocomplete, combobox: Fixed issue where hint and error text had incorrect max width.

## 1.1.0

### Minor Changes

- a655852a6: tags: Add support for removing tags
- 1d0038c22: Created new component `FileInput`
- 48b47f0ae: Added new icons: `ChartBarIcon`, `ChartLineIcon`, `DeleteIcon`, `DownloadIcon`, `EditIcon`, `FilterIcon`, `HelpIcon` and `PrintIcon`

### Patch Changes

- 2499d3179: combobox: Fixed bug in `ComboboxAsync` where options would be loaded on initial render incorrectly.
- 8162acfc9: card: prevent link event from firing twice
- 590db1c21: combobox: fixed a bug where the input element became non-interactive after blur
- 53e0c5fe8: text-input: Apply body background to all inputs

## 1.0.0

### Major Changes

- 6245c4774: Created package
