---
'@ag.ds-next/react': minor
---

`IndicatorDot`, `NotificationBadge` and `StatusBadge` have been moved to their own entry points.

These components will continue to work out of the the `@ag.ds-next/react/badge` entrypoint, but this usage has been marked as deprecated and will be removed in the next major release.

To upgrade, update the import when using these components.

```diff
- import { IndicatorDot, NotificationBadge, StatusBadge } from '@ag.ds-next/react/badge';
+ import { IndicatorDot } from '@ag.ds-next/react/indicator-dot';
+ import { NotificationBadge } from '@ag.ds-next/react/notification-badge';
+ import { StatusBadge } from '@ag.ds-next/react/status-badge';
```

