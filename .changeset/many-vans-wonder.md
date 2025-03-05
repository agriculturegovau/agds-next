---
'@ag.ds-next/react': minor
'@ag.ds-next/yourgov': minor
---

app-layout: Update `AppLayoutSidebarNav` to cater for new native mouse events on links and buttons.

button: Add TypeScript support for native `onMouseEnter`, `onMouseLeave`, `onMouseOut` and `onMouseOver` events to `BaseButton`.

core: Add TypeScript support for native `onClick`, `onMouseEnter`, `onMouseLeave`, `onMouseOut` and `onMouseOver` events to `LinkProps`.

dropdown-menu: Add `event` to argument to `onClick` function prop.

main-nav: Update `MainNavList` to cater for new native mouse events on links and buttons.

table: Add `onMouseEnter`, `onMouseLeave`, `onMouseOut` and `onMouseOver` props. Update `onClick` to match `BaseButton`’s signature.

yourgov: Remove `@ts-ignore` for `CardLink` `onClick`.
