---
'@ag.ds-next/react': minor
---

`Checkbox`, `Radio` and `ControlGroup` have been moved to their own entry points. 

These components will continue to work out of the the `@ag.ds-next/react/control-input` entrypoint, but this usage has been marked as deprecated and will be removed in the next major release.

To upgrade, update the import when using these components.

```diff
- import { Checkbox, Radio, ControlGroup } from '@ag.ds-next/react/control-input';
+ import { Checkbox } from '@ag.ds-next/react/checkbox';
+ import { Radio } from '@ag.ds-next/react/radio';
+ import { ControlGroup } from '@ag.ds-next/react/control-group';
```
