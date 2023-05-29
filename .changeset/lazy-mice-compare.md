---
'@ag.ds-next/react': minor
---

`IndicatorDot`, `NotificationBadge` and `StatusBadge` has been moved into their own entrypoints. 

These components will continue to work out of the the `@ag.ds-next/react/badge` entrypoint, but this usage has been marked as deprecated and will be removed in the next major release.

To upgrade, simply update the import when using these components.

```diff
- import { IndicatorDot, NotificationBadge, StatusBadge } from '@ag.ds-next/react/badge';
+ import { IndicatorDot } from '@ag.ds-next/react/indicator-dot';
+ import { NotificationBadge } from '@ag.ds-next/react/notification-badge';
+ import { StatusBadge } from '@ag.ds-next/react/status-badge';
```

