---
'@ag.ds-next/react': patch
---

table: Fix `TableRow`’s `selected` and hover styles not getting applied when an incorrect `tableLayout` is set. Add `pointer` cursor for clickable rows in fixed tables.  Update `TableRow`’s `onClick` to disable firing the row function when clicking on a label element.