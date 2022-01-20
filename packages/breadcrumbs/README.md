---
title: Breadcrumbs
description: Breadcrumbs are a navigational aid that display a user's location on a website as a row of links, usually located at the top of the page.
---

```jsx live
<Box theme="light" background="page">
	<Breadcrumbs
		links={[
			{ href: '#', label: 'Home' },
			{ href: '#', label: 'Establishments' },
			{ label: 'Applications' },
		]}
	/>
</Box>
```
