---
'@ag.ds-next/react': minor
---

app-layout: Extended the `items` prop in `AppLayoutSidebar` to accept an object with `options` and `items`. This allows consumers to control the padding between sidebar navigation groups.

```tsx
<AppLayoutSidebar
	activePath="/"
	items={[
    // pass an object with `options` and `items`
		{
			options: { disableGroupPadding: true },
			items: [{ label: 'Item A' }],
		},
    // pass an array of items 
		[
			{ label: 'Item B', href: '/b' },
			{ label: 'Item C', href: '/c' },
			{ label: 'Item D', href: '/c' },
		],
	]}
/>
```