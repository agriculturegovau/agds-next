---
'@ag.ds-next/react': minor
---

box: Deprecate `focus` prop in favour of new `focusRingFor` prop to enable a focus ring when the element is keyboard focused (`focusRingFor="keyboard"`) and programmatically focused (`focusRingFor="all"`).

core: Add new `useFocusOnMount` hook to allow an element to be focused when it’s mounted.

drawer: Add `elementToFocusOnClose` prop to allow custom element to be focused when the drawer closes.

page-alert: Add `focusOnMount` prop to focus the alert as soon as it’s rendered to the page. Also enable the newly added `focusRingFor` prop from `Box` to improve accessibility for programmatically focused alerts.

section-alert: Add `focusOnMount` prop to focus the alert as soon as it’s rendered to the page. Also enable the newly added `focusRingFor` prop from `Box` to improve accessibility for programmatically focused alerts.
