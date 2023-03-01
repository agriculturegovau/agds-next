---
'@ag.ds-next/react': minor
---

Date picker

- Added new prop `onInputChange` which can be used to track the value of the text input
- Updated the type of the `value` prop so it can accept string (which represents the value of the text input)
- Significantly improved test coverage

Date range picker

- Added support for a legend to be supplied via a new `legend` prop. If no legend is supplied, a default legend of `Date range` will be rendered but will be visually hidden
- Added support for hint text via the `hint` text
- Added support for an invalid state via the `fromInvalid`, `toInvalid` and `message` props
- Added new prop `onFromInputChange` and `onToInputChange` which can be used to track the value of the text inputs
- Updated the type of the `value` prop so it can accept string (which represents the value of the text inputs)
- Significantly improved test coverage
