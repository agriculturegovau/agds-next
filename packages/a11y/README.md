---
title: A11y
description: Utilities for improving accessibility.
group: Foundations
---

### Visually Hidden

Use the `VisuallyHidden` component to hide an element visually without hiding it from screen readers.

```jsx live
<TextLink href="#">
	Read more<VisuallyHidden> about how to visually hide content</VisuallyHidden>
</TextLink>
```

Alternatively you can use the `visuallyHiddenStyles` style object directly.

```jsx
import { visuallyHiddenStyles } from '@ag.ds-next/a11y';

function Example() {
	return (
		<span css={visuallyHiddenStyles}>This element is visually hidden</span>
	);
}
```
