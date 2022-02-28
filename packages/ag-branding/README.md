---
title: AG Branding
description: A colour palette and logo set for Agriculture
group: Brand
---

## AG Palette

```jsx
import { Core } from '@ag.ds-next/core';
import { theme } from '@ag.ds-next/ag-branding';

export default function App({ Component }) {
	return (
		<Core theme={theme}>
			<Component />
		</Core>
	);
}
```

## AG Logo

```jsx
import { Logo } from '@ag.ds-next/ag-branding';

export function App() {
	return (
		<Box
			palette="light"
			color="text"
			background="body"
			maxWidth={600}
			padding={2}
		>
			<Logo />
		</Box>
	);
}
```
