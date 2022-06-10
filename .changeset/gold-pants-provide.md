---
'@ag.ds-next/progress-indicator': major
---

- Added the ability the forward refs and use the as prop
- Removed `ProgressIndicatorItemLink` and `ProgressIndicatorItemButton`. Usage of these components can be replaced with:

```jsx
const Link = useLinkComponent();
return <ProgressIndicatorItem as={LinkComponent} {...} />
```