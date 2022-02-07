---
'@ag.ds-next/docs': patch
'@ag.ds-next/example-site': patch
'@ag.ds-next/ag-branding': patch
'@ag.ds-next/body': patch
'@ag.ds-next/box': major
'@ag.ds-next/breadcrumbs': patch
'@ag.ds-next/button': patch
'@ag.ds-next/card': patch
'@ag.ds-next/columns': patch
'@ag.ds-next/content': patch
'@ag.ds-next/core': major
'@ag.ds-next/footer': patch
'@ag.ds-next/header': patch
'@ag.ds-next/icon': patch
'@ag.ds-next/link-list': patch
'@ag.ds-next/main-nav': patch
'@ag.ds-next/side-nav': patch
---

Swapped the naming of theme and palette to better reflect expectations

`theme` now means the global set of colours which are applied to the a site as a whole. Eg. Gold theme or Agriculture theme.

`palette` (aka. `boxPalette`) is the set of colours to be applied within a Box or related component. Eg. `<Box palette="dark" />`
