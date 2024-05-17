---
'@ag.ds-next/react': minor
'@ag.ds-next/docs': minor
---

file-upload: New implementation of error handling: new UI and unaccepted files no longer trigger the invalid state. With `multiple`, duplicate files aren’t selected. `maxFiles` uses the total files being uploaded, not just current selection.

icon: Prevent from shrinking smaller than their intended size.

list: Add `BoxProps` to allowed types for `ListItem`.

section-alert: Ensure Close button is always aligned to the top.

text: Remove unnecessary margin reset CSS.
