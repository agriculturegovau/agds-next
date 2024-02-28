---
'@ag.ds-next/react': minor
'@ag.ds-next/docs': minor
---

progress-indicator: Added ability to customise which item is treated as active. If no active item is specified, it defaults to the `"doing"` status for backwards compatibility.

Also, the `"doing"` status has been marked as **deprecated** (throws a console warning) and encourages the use of the `"started"` status with `isActive: true` applied as a replacement.
