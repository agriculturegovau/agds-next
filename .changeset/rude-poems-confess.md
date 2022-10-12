---
'@ag.ds-next/docs': patch
'@ag.ds-next/accordion': patch
'@ag.ds-next/combobox': patch
'@ag.ds-next/control-input': patch
'@ag.ds-next/core': patch
'@ag.ds-next/field': patch
'@ag.ds-next/fieldset': patch
'@ag.ds-next/modal': patch
'@ag.ds-next/progress-indicator': patch
'@ag.ds-next/search-box': patch
'@ag.ds-next/side-nav': patch
---

Replace useId from `@reach/auto-id` with `@react-aria/utils` to ensure that HTML is valid before hydration.
