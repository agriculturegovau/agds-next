---
'@ag.ds-next/react': patch
---

core: Created new hook `useAriaModalPolyfill` which adds `aria-hidden="true"` to every direct child of the `body` element when a modal is opened. This hook consolidates code that was previously copied/pasted across Modal, App layout and Main nav.
