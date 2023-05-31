---
'@ag.ds-next/react': minor
---

## Box

`Flex` and `Stack` have been moved into their own entrypoints. 

These components will continue to work out of the the `@ag.ds-next/react/box` entrypoint, but this usage has been marked as deprecated and will be removed in the next major release.

To upgrade, update the import when using these components.

```diff
- import { Box, Flex, Stack } from '@ag.ds-next/react/box';
+ import { Box } from '@ag.ds-next/react/box';
+ import { Flex } from '@ag.ds-next/react/flex';
+ import { Stack } from '@ag.ds-next/react/stack';
```
