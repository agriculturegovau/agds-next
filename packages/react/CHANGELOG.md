# @ag.ds-next/react

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
