---
title: Breadcrumbs
description: Breadcrumbs are a navigational aid that display a user's location on a website as a row of links, usually located at the top of the page.
group: Navigation
---

Breadcrumbs show users where they are in the website hierarchy and how to navigate back/up to previous levels or content.

```jsx live
<Box palette="light" background="body">
	<Breadcrumbs
		links={[
			{ href: '#', label: 'Home' },
			{ href: '#', label: 'Establishments' },
			{ label: 'Applications' },
		]}
	/>
</Box>
```
