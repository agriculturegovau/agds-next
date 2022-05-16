---
title: Secondary Nav
description: A horizontal list of links typically placed between the main navigation and page content.
group: Navigation
storybookPath: /story/navigation-secondarynav--light-variant
---

```jsx live
<SecondaryNav
	activePath="/button"
	links={[
		{ href: '/button', label: 'Button' },
		{ href: '/button/code', label: 'Code' },
		{ href: '/button/content', label: 'Content' },
		{ href: '/button/accessibility', label: 'Accessibility' },
	]}
	variant="light"
/>
```
