---
title: LinkList
description: The link list style is a simple list of vertical or horizontal links used for site navigation. It is used to order information for users.
group: Navigation
---

The default link list component removes the normal bullets and spacing associated with a list.

```jsx live
<Box palette="light" background="body">
	<LinkList
		links={[
			{ href: '#', label: 'Home' },
			{ href: '#', label: 'Establishments' },
			{ href: '#', label: 'Applications' },
		]}
	/>
</Box>
```

## Horizontal

Setting the `horizontal` prop will stack the links horizontally.

```jsx live
<Box palette="light" background="body">
	<LinkList
		links={[
			{ href: '#', label: 'Home' },
			{ href: '#', label: 'Establishments' },
			{ href: '#', label: 'Applications' },
		]}
		horizontal
	/>
</Box>
```
