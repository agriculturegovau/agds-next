---
'@ag.ds-next/react': minor
---

Filter drawer has been renamed to Drawer;

The `FilterDrawer` component will continue to work out of the the `@ag.ds-next/react/filter-drawer` entrypoint, but this usage has been marked as deprecated and will be removed in the next major release.

To upgrade, update the import and component name when using these components.

```diff
- import { FilterDrawer } from '@ag.ds-next/react/filter-drawer';
+ import { Drawer } from '@ag.ds-next/react/drawer';
```
