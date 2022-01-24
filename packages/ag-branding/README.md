---
title: AG Branding
description: A colour palette and logo set for Agriculture
group: Agriculture
---

## AG Palette

```jsx
import { Core } from '@ag.ds-next/core';
import { palette } from '@ag.ds-next/ag-branding';

export default function App({ Component }){
	return (
		<Core palette={palette}>
      <Component />
    </Core>
  )
```

## AG Logo

```jsx
import { Logo } from '@ag.ds-next/ag-branding';

export const App = () => (
	<Box theme="light" color="text" background="page" maxWidth={600} padding={2}>
		<Logo />
	</Box>
);
```
