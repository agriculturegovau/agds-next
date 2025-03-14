---
'@ag.ds-next/react': patch
---

box: Apply link style to hide URL on print media for internal hash anchors.

core: Add new `hideHref` `print` pack to prevent a link’s `href` from being appended when printed.

file-upload: Apply link style to hide URL on print media for existing file uploads. Existing file URLs should not be displayed and are not required.

pagination: Apply link style to hide URL for directions and numeric link elements. Pagination links are not functional on print.