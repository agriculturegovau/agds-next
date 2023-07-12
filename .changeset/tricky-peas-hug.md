---
'@ag.ds-next/react': patch
---

core: Deduplicated use of `findBestMatch` from navigational components and moved into the `core` entrypoint.

app-layout: Used `findBestMatch` utility function to ensure nav items are highlighted correctly based on the `activePath`.

sub-nav: Used `findBestMatch` utility function to ensure nav items are highlighted correctly based on the `activePath`.
