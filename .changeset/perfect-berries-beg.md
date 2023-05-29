---
'@ag.ds-next/react': minor
---

`DateRangePicker` has been moved into it's own entrypoint. 

`DateRangePicker` will continue to work out of the the `@ag.ds-next/react/date-picker` entrypoint, but this usage has been marked as deprecated and will be removed in the next major release.

To upgrade, simply update the import when using these components.

```diff
- import { DateRangePicker } from '@ag.ds-next/react/date-picker';
+ import { DateRangePicker } from '@ag.ds-next/react/date-range-picker';
```
