# @ag.ds-next/react

## 1.23.0

### Minor Changes

- 4d996b47c82: footer: Add `borderColor` prop to `Footer` and `color` prop to `FooterDivider`.

  main-nav: Add `borderColor` prop to `MainNav` and `MainNavBottomBar`.

- 8faad29ce55: app-layout: Add co-branding to the `AppLayoutHeader` via `secondHref`, `secondLogo`, and `dividerPosition` props. Fix divider width.

  header: Fix spacing on desktop and divider not being hidden when wrapping to a second line.

- 1872836fdfa: main-nav: `Add focusMode` prop. Deprecate `MainNavBottomBar`.
- be10e7f7e45: side-nav: Add `always` and `whenActive` strategies for making sub-level items visible. The new default will be `whenActive` as `always` should be used sparingly and when only a small number of navigation items exist.
- e174f63ae43: date-picker: Reduce the size of and horizontally centre the calendar when the screen size is less than 375px.
- d3b7ff92dde: checkbox: Add `name` support. Fix `required` to set `aria-required`.

  control-group: Add automatic & custom `name` suppport. Fix passing `required` to `Checkbox` and `Radio` children.

  radio: Add `name` support. Fix `required` to set `aria-required`.

- 4bfc1337601: combobox-multi: Allow backspace to remove selected items when the popover is open.
- 71bf5dfc384: button: Add `form` prop from native button props to allow submit buttons to be connected from outside a form.

  drawer: Add docs and Storybook example of creating an accessible form within a drawer.

- c320d8704ee: app-layout: `AppLayoutSidebar` - Add sub-level support for navigation items with accompanying `always` and `whenActive` strategies for making them visible.

### Patch Changes

- c0a035a9595: main-nav: Use correct ARIA labels for menu button & dialog. Remove other incorrect ARIA properties.

  modal: Make the Close button’s visual and reading order identical.

- 8aabedc08dd: pagination: Fix docs for "Items per page" section not showing correct page number.
- 69178973bf5: table: Fix `textAlign` support in `TableHeaderSortable`.
- d69c1f773eb: build: Add `'use client'` to entrypoints so they can be imported and used directly from server components
- f2d348aae16: header: Update docs example for co-branding
- 4d31b029657: main-nav: Fix mobile dialog menu not closing when you press the active link.

## 1.22.0

### Minor Changes

- ce16f6a7577: table: Add `invalid` prop to table row component to visually indicate row with error.
- 174a1382ca0: app-layout: Add `background` and `palette` support to `AppLayoutFooter`, `AppLayoutHeader` & `AppLayoutSidebar`
- 359c74e357f: grouped-fields: Remove unused required prop
- f1b9d2b69db: box: Add `breakWords` prop to let words break across multiple lines where necessary
- 0ed83fe5448: header: Support second logo with link for cobranding.

  box: Add `justifySelf` responsive prop.

- 2a44de65cb9: file-upload: New implementation of error handling: new UI and unaccepted files no longer trigger the invalid state. With `multiple`, duplicate files aren’t selected. `maxFiles` uses the total files being uploaded, not just current selection.

  icon: Prevent from shrinking smaller than their intended size.

  list: Add `BoxProps` to allowed types for `ListItem`.

  section-alert: Ensure Close button is always aligned to the top.

  text: Remove unnecessary margin reset CSS.

- 358c561f2f7: box: Deprecate `focus` prop in favour of new `focusRingFor` prop to enable a focus ring when the element is keyboard focused (`focusRingFor="keyboard"`) and programmatically focused (`focusRingFor="all"`).

  core: Add new `useFocusOnMount` hook to allow an element to be focused when it’s mounted.

  drawer: Add `elementToFocusOnClose` prop to allow custom element to be focused when the drawer closes.

  page-alert: Add `focusOnMount` prop to focus the alert as soon as it’s rendered to the page. Also enable the newly added `focusRingFor` prop from `Box` to improve accessibility for programmatically focused alerts.

  section-alert: Add `focusOnMount` prop to focus the alert as soon as it’s rendered to the page. Also enable the newly added `focusRingFor` prop from `Box` to improve accessibility for programmatically focused alerts.

- 053eee29b67: core: move from `useFocusOnMount` to `useFocus` to allow for `focusOnUpdate`.

  page-alert: enable `focusOnUpdate` prop for focusing on updated alert content.

  section-alert: enable `focusOnUpdate` prop for focusing on updated alert content.

  box: add `alignSelf` CSS prop. Add `'start'` and `'end'` as valid `alignItems` values.

  button: add `alignSelf` CSS prop from `Box`.

- 80dfd608cfb: button: Add `focusRingFor` prop to allow programmatic focus, e.g. via a link, to render the focus ring. This is available for `Button` and `ButtonLink`.

### Patch Changes

- 0ce7fbf96ea: task-list: Make `doneRecently` status count towards `stepsCompleted`
- 29f393359da: summary-list: Increase gap between SummaryListItemTerm and SummaryListItemDescription to show a clearer separation
- 898f7d2ca29: box: Document all style props
- 94ad75b9931: avatar, control-group, drawer, icon, modal: Simplify some internals.
- 21dd180d274: app-layout: Fix sidebar not closing on item press.
- cf9055a1231: drawer: Fix docs for `elementToFocusOnClose` not returning focus to button when no alert is shown.
- 15a7d327718: table: Fix example header alignment

## 1.21.0

### Minor Changes

- 317f42af5c2: progress-indicator: Added level two item support for ProgressIndicator
  icons: Added CornerRightDownIcon
- 89ffacb7672: drawer: Added `mutedOverlay` prop to the Drawer component so that context with the main page content can be more easily retained.
- 2774726c192: TimeInput: Initial release of component

  DatePicker: Also call consumer’s `onBlur` function when passed

- 0b266d74b89: TimePicker: Initial release of component

  TimeInput: Update `TimeValue` to use `.value` instead of `.raw`

### Patch Changes

- 7460e609496: time-input: Fix Figma link.

  time-picker: Fix Figma link.

- a3d65cb143f: date-picker: Fix DatePicker scrolling to the top of the page on first open.
- 342c6a450af: docs: grouped-fields. Update select options. Allow appropriate ones to be changed
- bc39ac06327: combobox: Warn if unsupported maxWidth prop is set.

  combobox-multi: Warn if unsupported maxWidth prop is set.

  combobox-multi: Add default `block` value to docs props.

- 360e446abfb: status-badge: Remove background colour for subtle appearance

## 1.20.0

### Minor Changes

- 96b48e102f7: progress-indicator: Added ability to customise which item is treated as active. If no active item is specified, it defaults to the `"doing"` status for backwards compatibility.

  Also, the `"doing"` status has been marked as **deprecated** (throws a console warning) and encourages the use of the `"started"` status with `isActive: true` applied as a replacement.

- 65e9b26418e: drawer, global-alert, modal, page-alert, section-alert: Deprecating onDismiss in favour of onClose

  page-alert: Deprecating hasDismissButton in favour of hasCloseButton

- 4ca5c8eee02: status-badge: Add 9 new tones in 3 levels of attention. Deprecate existing `tone` values and the `weight` prop.

  icon: Add new AlertCircle, ProgressPaused and WarningCircle icons. Update the paths of existing circular icons.

- 3c755d8f224: icon: Add AttachmentIcon and PieChartIcon.

### Patch Changes

- 863c839d92d: section-alert: Changed "Dismiss" button text to say "Close" instead. This was to align with Global Alert and Modal.
- 8b08d4cc6d1: drawer: Fix scrollbar not appearing in Chrome/Edge on platforms with permanent scrollbars

## 1.19.0

### Minor Changes

- f0b9db1d249: date-picker: Allow alternative date formats to be entered via the text input, e.g. `28-2-2023`, `28/2/2023`, `28th Feb 2023` etc.

  date-range-picker: Allow alternative date formats to be entered via the text input, e.g. `28-2-2023`, `28/2/2023`, `28th Feb 2023` etc.

- 5d8489f53de: date-picker: Add new prop `dateFormat`, which can be used to adjust the date format displayed in the text input and secondary label.

  date-picker: Validate date formats `onBlur` instead of `onInputChange`.

  date-range-picker: Add new prop `dateFormat`, which can be used to adjust the date format displayed in the text input and secondary label.

  date-range-picker: Validate date formats `onBlur` instead of `onInputChange`.

- d25a2142196: grouped-fields: Initial release of component. To support this component, change how invalid state is applied to autocomplete, combobox, date-picker, date-range-picker, password-input, search, search-input, select, textarea and text-input.

### Patch Changes

- 2f5aca86679: field: Ensure all form inputs always try to achieve their maxWidth.
- 5b9cc2fbce3: date-picker: Add indicator dot to today’s date in calendar widget

  date-range-picker: Add indicator dot to today’s date in calendar widget

- 90294ca5c3c: icon: Add CalendarIcon to list of all icons.
- 5e37b79b433: icon: Update Warning and WarningFilled icons

## 1.18.0

### Minor Changes

- eb1ff4c52ae: date-picker:

  - Upgraded internal dependency of `react-day-picker`
  - Improved the ARIA label of the button that opens the calendar picker

  date-range-picker:

  - Upgraded internal dependency of `react-day-picker`
  - Improved the ARIA labels of the buttons that opens the calendar picker
  - Improved range styles inside of the calendar picker

- df428a1a1c5: date-picker: Updated calendar widget to include a month select

  date-range-picker: Updated calendar widget to include a month select

- ac627a12898: progress-indicator: Added two new statuses for items: `'saved'` and `'error'`.
- 4293723f322: progress-indicator: Added new prop `hideSubtitle`
- 81f4f8d0a79: core: Add scrollbar-gutter to prevent layout shift between short & long pages.
- b3fcefa9352: date-picker: Improved logic for determining what initial month to display when the calendar is opened by the user.

  date-range-picker: Improved logic for determining what initial month to display when the calendar is opened by the user.

  date-range-picker: Improved UX by ensuring that only valid date ranges can be entered when using the inputs to enter a date.

- 4ba6cf84f48: table: Add `colSpan` and `rowSpan` support to `TableCell` and `TableHeader`.
  table: Add `as` support to `TableHeader`.
  table: Fixed `scope` on `TableHeader`.
- 8a6ec918201: icon: Fixed incorrect usage of `focusable` attribute, which should always be set to "false"

### Patch Changes

- 94a0550fe17: icon: Make `fillRule="evenodd"` default. Remove icon-specific usage of `fillRule` and `clipRule`.
- 80e30b52dcd: section-alert: Correctly label dismiss button to match visible text.
- 691a33d18b7: date-range-picker: Correctly associate error message to appropriate date inputs.
- 4237eaba7a2: app-layout: Fix a11y of `AppLayoutSidebarDialog` by giving it a "Menu" label.
- abdddaa51b0: storybook: Fix various accessibility issues in Storybook stories.
- 51d103a66af: global-alert: Fixed accessible label of region and close button.
- e2bbf35bda9: table: Allow focus on `TableWrapper` to fix accessibility for keyboard users.
- d12b727557f: file-upload: Set `getErrorSummary().maxFiles` to have a default of 1 to fix `too-many-files` error message.
- 67d48135aa5: table: Reverse sortable arrow directions so ascending points up & descending points down.
- 9e354eb3559: date-picker: Change day buttons from toggle buttons to normal buttons. Announce selected date upfront.

  date-range-picker: Change day buttons from toggle buttons to normal buttons. Announce selected dates upfront and dates within regions.

- 68047540933: app-layout: Upgraded internal dependency of `react-focus-lock`

  date-picker: Upgraded internal dependency of `react-focus-lock`

  date-range-picker: Upgraded internal dependency of `react-focus-lock`

  drawer: Upgraded internal dependency of `react-focus-lock`

  main-nav: Upgraded internal dependency of `react-focus-lock`

  modal: Upgraded internal dependency of `react-focus-lock`

## 1.17.0

### Minor Changes

- 548da280cb1: - breadcrumbs: Update default `aria-label` to `'Breadcrumbs'`.
  - inpage-nav: Update default `aria-label` to `'In page'`.
  - pagination: Update default `aria-label` to `'Pagination'`.
  - search-box: Update default `aria-label` to `'Sitewide'`.
  - skip-link: Update default `aria-label` to `'Skip links'`.
  - sub-nav: Update default `aria-label` to `'Content'`.
  - main-nav `MainNavList`: Add default `aria-label` of `'Main'` and update 2nd use to `'Supplementary'`.
  - side-nav. Render as `div` instead of `aside'`.
- 53f13b06519: combobox: Added support for `onBlur` and `onFocus` props to all Combobox component variants (`Combobox`, `ComboboxAsync`, `ComboboxMulti`, `ComboboxAsyncMulti`)
- 49ded9bd0a3: drawer: Added new `width` prop which can be either Medium `md` (512px) or `lg` (720px).

### Patch Changes

- 1f4d51b7c77: app-layout: Improved accessibility by replacing the underlying HTML sidebar element from an `aside` to a `div`.
- 158bd561f52: progress-indicator: Tweaked padding and spacing values of list item elements to more closely match designs

## 1.16.0

### Minor Changes

- c85a4fdfe0c: file-input: Decreased the "Choose files" button size

  file-input: Increased visual prominence of when a file has been uploaded by changing the font weight when a file has been added

- 5948f43f9b6: password-input: Initial release of component
- 2fe8c26bc9d: file-upload: Added support for `href` in `FileWithStatus`
- 79e31f8fb38: main-nav: Made improvements to component under the hood to better improve performance and code readability.

  main-nav: Extended the `secondaryItems` prop to allow users to add a dropdown menu.

- db4243407d4: combobox: Added new `clearable` prop to `Combobox`. If true, the clear button ("x") will be rendered when there is a selected option.
- d7c4fcde9b4: file-input: Fixed hover styles in file selector button
- 97723bb52b6: combobox: Added support for react nodes in the `secondaryText` and `tertiaryText` props in the `ComboboxRenderItem` component

  autocomplete: Added support for react nodes in the `secondaryText` and `tertiaryText` props in the `AutocompleteRenderItem` component

### Patch Changes

- 65f7f83e0c9: ag-branding: Updated `darkBackgroundShade` and `darkBackgroundBodyAlt` color

## 1.15.0

### Minor Changes

- e1d185aef1d: button: Switched to `min-height` instead of `height` to better accommodate buttons with multi-line labels
- 9be9c23e8a4: autocomplete: Improved the `renderItem` prop which controls how each option in the dropdown list is rendered. Inside this function, consumers can style extra information about an option by using a new component called `AutocompleteRenderItem`.

  combobox: Improved the `renderItem` prop which controls how each option in the dropdown list is rendered. Inside this function, consumers can style extra information about an option by using a new component called `ComboboxRenderItem`.

### Patch Changes

- 33cbe1ea10a: text-input: Add support for max-length
- eced5863244: pagination: Fixed small bug where separators were sometimes being displayed unnecessarily
- 7d63c871570: button: Added flex-shrinking to icons to prevent from shrinking when the button label spans multiple lines

  button: Updated text alignment for the `text` button variant

- 3a66a0df9b3: dropdown-menu: Minor improvements to internal state reducer

## 1.14.0

### Minor Changes

- ccd0546cf13: pagination: Extended `Pagination` and `PaginationButtons` components to support items range text and items per page select dropdown
- 1739fc77e68: combobox: Improved internal positioning engine
- 6643ea7d23e: icon: Created InboxIcon
- 6643ea7d23e: icon: Created PauseIcon
- 6643ea7d23e: icon: Created PlayIcon
- 8a61c9819e9: file-upload: Added support for showing previously uploaded files with the new `existingFiles` and `onRemoveExistingFile` props.
- 603fcc8ffc0: dropdown-menu: Improved accessibility by ensuring that the `DropdownMenuButton` component always has a valid `aria-controls` attribute

  dropdown-menu: Improved accessibility by allowing users to press `Enter`, `Space`, `ArrowDown` or `ArrowUp` keys to open up the dropdown menu and activate a child descendant

  dropdown-menu: Fixed a bug where keyboard shortcuts couldn’t be used when the dropdown menu was open - e.g. refresh the page using cmd + r.

  dropdown-menu: Improved accessibility by significantly improving the logic for searching for a child descendant

### Patch Changes

- 4d24b00efbb: status-badge: Made each icon in the `StatusBadge` component announceable by screen readers
- bfb5825e0c1: table: Added support for `aria-rowcount` and `aria-rowindex` on the `Table` component
- 799315b7181: file-upload: Removed border from thumbnail
- 5379c038d6a: main-nav: Updated the mobile variant to always render in the light palette
- 73e89b590e1: app-layout: Remove "Menu" button from mobile variant when in focus mode
- ad7a1c3fa44: file-upload: Export `formatFileSize` utility
- bd707f8c7d6: checkbox: If supplied, the `invalid` prop will now override the value of the `invalid` prop set in `ControlGroup`.

## 1.13.0

### Minor Changes

- 5cc29a9c0f: table: Created new components for batch table actions: `TableBatchActionsBar` and `TableBatchActionsTitle`
- 6460150058: app-layout: Extended the `items` prop in `AppLayoutSidebar` to accept an object with `options` and `items`. This allows consumers to control the padding between sidebar navigation groups.

  ```tsx
  <AppLayoutSidebar
  	activePath="/"
  	items={[
  		// pass an object with `options` and `items`
  		{
  			options: { disableGroupPadding: true },
  			items: [{ label: 'Item A' }],
  		},
  		// pass an array of items
  		[
  			{ label: 'Item B', href: '/b' },
  			{ label: 'Item C', href: '/c' },
  			{ label: 'Item D', href: '/c' },
  		],
  	]}
  />
  ```

- 61b5fabd85: icon: Created FileIcon
- 862840c9bf: file-upload: Upgraded `react-dropzone` dependency

  file-upload: Extended the `accept` prop so MIME types that are not in the predefined list can be used

- b3e2e03b04: table: Created new `TableRow` component. If you’re using the standard `<tr>` HTML element, you can optionally upgrade to this new component.

  ```diff
  <Table>
    <TableHead>
  -   <tr>
  +   <TableRow>
        <TableHeader scope="col">Location</TableHeader>
        <TableHeader scope="col">Population</TableHeader>
  -   </tr>
  +   </TableRow>
    </TableHead>
    <TableBody>
  -   <tr>
  +   <TableRow>
        <TableCell>New South Wales</TableCell>
        <TableCell>7,670,700</TableCell>
  -   <tr>
  +   </TableRow>
    </TableBody>
  </Table>
  ```

### Patch Changes

- 61b5fabd85: file-upload: Added thumbnails to selected files
- 431294adf2: app-layout: Fixed small issue in `AppLayoutSidebar` where the text color wasn’t being applied correctly to text list items in dark mode
- bd89ce82ad: file-upload: Exported `formatFileSize` utility function. Example usage:

  ```tsx
  import { formatFileSize } from '@ag.ds-next/react/file-upload';
  ```

## 1.12.0

### Minor Changes

- 7b32460743: app-layout: Added support for displaying the active business name and ABN in `AppLayoutSidebar`

  app-layout: Decreased border left width of active item in sidebar from `8px` to `4px`

  app-layout: Decreased the width of the `AppLayoutSidebar` from `17.5rem` to `16rem`

  app-layout: Decreased the gap between icons and labels in `AppLayoutSidebar` from `1rem` to `0.75rem`

- d201d49ac4: field: Added new `labelId` prop
- 626ca776b7: app-layout: Updated app layout header to show hamburger menu in focus mode
- d201d49ac4: combobox: Improved accessibility by ensuring that the popover listbox element is described correctly by the field label
- 2bf3c6f9ef: app-layout: Added ability to have an account dropdown menu via a new `dropdown` key on the `accountDetails` prop.

### Patch Changes

- 72773ba7af: file-upload: Add support for the `application/vnd.ms-outlook` MIME type

## 1.11.0

### Minor Changes

- bccb34e3ac: Filter drawer has been renamed to Drawer;

  The `FilterDrawer` component will continue to work out of the the `@ag.ds-next/react/filter-drawer` entrypoint, but this usage has been marked as deprecated and will be removed in the next major release.

  To upgrade, update the import and component name when using these components.

  ```diff
  - import { FilterDrawer } from '@ag.ds-next/react/filter-drawer';
  + import { Drawer } from '@ag.ds-next/react/drawer';
  ```

- 645d7b66d0: callout: Added info tone and compact variant

  callout: Added support for custom icons

  box: Add support for more colours in background, foreground and border props

- 17009235df: Created new component `FilterSidebar`
- 46f4df84c3: SectionAlert: Created new component
- ad8d8d1d35: dropdown-menu: Added new prop `offset`

  dropdown-menu: Updated padding of label element in `DropdownMenuGroup`

  dropdown-menu: Swapped from display style to conditional rendering to improve panel element anchoring

### Patch Changes

- 75134caaaf: details: Added new prop `onBodyAlt`. If the Details component is placed on a page with bodyAlt background, set the `onBodyAlt` prop to true.
- 746108cbd0: Core: Added xxl breakpoint token
- 4d1c302e75: details: Updated width of interactive element to match content

  switch: Updated width of interactive element to match content

- 6a0b8f1942: app-layout: Removed `overflow: hidden` from `AppLayoutContent` to support sticky elements. Added `min-width: 0` to fix large tables breaking layout on smaller devices.
- cb153916a0: dropdown-menu: Improve handling of menu items with long labels
- 17009235df: core: Add 'none' border-width
- a73f20ab97: control-group: Added flex wrapping so horizontal options can break into multiple lines if required.
- d87f1599b3: autocomplete: Added search icon

  search-input: Updated search icon position

## 1.10.0

### Minor Changes

- 139067e47f: Create new `DropdownMenu` component
- fc54a6b2f4: core: Created `shadow` tokens for box-shadows
- 400db2e88c: combobox: Improved async logic in `ComboboxAsync` and `ComboboxAsyncMulti`

  combobox: Deprecated prop `openDropdownOnFocus` as it is no longer used.

- bc983c340a: filter-drawer: Update usage of `createPortal` to fix server side render issues

  modal: Update usage of `createPortal` to fix server side render issues

- c76354fc4e: box: Remove 'focus' from supported text styles
- 6dbdd207d6: list: Created new components `UnorderedList` and `OrderedList`
- 4ea9dda045: icon: Add new `CheckIcon`

  checkbox: Updated indicator icon

  switch: Updated indicator icon

- bd7049b95b: combobox: Upgraded dependency on `downshift` to version 8, which implements ARIA version 1.2.
- cc39fb8d27: box: Updated `focusStyles` to use the `:focus-visible` selector so the focus indicator will only be shown when the element receives keyboard focus.

  all: Updated component styles to use the `:focus-visible` selector so the focus indicator will only be shown when the element receives keyboard focus.

### Patch Changes

- 81c37e8d10: checkbox: Updated CSS for toggling the display of the checkbox indicator which stops the checkbox from shifting slightly in certain browsers

  radio: Updated CSS for toggling the display of the radio indicator for consistency with the `Checkbox` component

- fc54a6b2f4: card: Updated box-shadow with new tokens

  combobox: Updated box-shadow with new tokens

  date picker: Updated box-shadow with new tokens

  drop down: Updated box-shadow with new tokens

  filter drawer: Updated box-shadow with new tokens

  modal: Updated box-shadow with new tokens

- a64e44811b: date-picker: Update hover state styles in Calendar
- f6a1d78305: autocomplete: Added new `inputRef` prop

  combobox: Added new `inputRef` prop

- 8651809c39: core: Added new `truncate` pack

  select: Added truncation to selects to better handle long options that extend the width of the select box

- e06ede5f03: icon: Updated ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon and ChevronRightIcon
- 9eee66fc71: icon: Added `ArrowUpDownIcon`

  icon: Deprecated `ChevronsUpDownIcon`, use `ArrowUpDownIcon` instead. This will be removed in the next major version.

  table: Updated icons in `TableHeaderSortable`

- c3d3ba7aac: text-link: Added `onClick` prop to `TextLink` and `TextLinkExternal`
- a77f9e9225: patch: Updated `mark` styles
- 3ca4f01619: tabs: Increased vertical padding in the tab panel on mobile devices
- 024245c81d: combobox: Added truncation to better handle options with long labels
- e38b29f41a: core: Added `selected` and `selectedMuted` tokens
- 1edda17cc9: button: Increased the gap between icons and labels in the small button variant from `0.25rem` to `0.5rem`
- 559d286e02: combobox: Updated dropdown chevron indicator to flip when combobox is opened.
- 960e74b889: icon: Add new icon `MinusIcon`

  checkbox: Added support for indeterminate checkboxes via a new `indeterminate` prop

- 944e26eb6f: ag-branding: Updated selectedMuted tokens to new blue colours
- 82bfdd4449: - progress-indicator: Refactor logic for collapsing on mobile

  - side-nav: Refactor logic for collapsing on mobile

- af09a5f3e2: app-layout: Made focusMode prop optional

## 1.9.0

### Minor Changes

- ea766db901: global-alert: Visual refresh. Added support for 'info' tone.

### Patch Changes

- e075dbd59f: box: Extended the `Box` component so borders can be applied with the `accent` colour. For example:

  ```tsx
  <Box borderBottom borderBottomWidth="xxl" borderColor="accent">
  	Hello world
  </Box>
  ```

- f86f2d8275: core: Extended utility function `useClickOutside` to accept multiple refs
- d25b299afd: app-layout: Fixed usage of `useTransition` by `@react-spring/web` to ensure compatibility with latest version.

  filter-drawer: Fixed usage of `useTransition` by `@react-spring/web` to ensure compatibility with latest version.

- 4ce8d27e2b: date-picker: Clicking the calendar button trigger while the calendar popover is open will now close the calendar popover.

  date-range-picker: Clicking the calendar button trigger while the calendar popover is open will now close the calendar popover.

## 1.8.0

### Minor Changes

- 7906df7e2f: tabs: Created new component

### Patch Changes

- 7906df7e2f: button: Extended `BaseButton` to support `onKeyDown`, `onBlur`, `onFocus`, `role` and `tabIndex`.

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

- 0942aab35d: `DateRangePicker` has been moved to it’s own entry point.

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

- f4aed33922: Replaced some react spring animations with CSS animations/transitions. This change improves performance by removing Javascript and utilising the browser’s ability to process CSS.

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
