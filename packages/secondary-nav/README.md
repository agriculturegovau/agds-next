---
title: Sub Nav
description: A horizontal list of links typically placed between the main navigation and page content.
group: Navigation
storybookPath: /story/navigation-SubNav--light-variant
---

The sub navigation component is intended to be used as a secondary means of navigation around the website. It typically accommodates the third level of the information architecture, following the `SideNav` on a content page. The preferred navigation component for second level information architecture on category and subcategory pages are cards lists.

The sub-navigation component is designed to collapse down to a static list on smaller devices.

Note: Because the sub navigation component is a horizontal list, it doesn’t accommodate a large number of items. The Sub-nav list should only include 5 or less list items and is best suited to situations where persistent labels are used. If you need more space, consider another navigation component such as the `SideNav` or `Card` lists.

```jsx live
<SubNav
	activePath="#code"
	links={[
		{ href: '#usage', label: 'Usage' },
		{ href: '#code', label: 'Code' },
		{ href: '#content', label: 'Content' },
		{ href: '#accessibility', label: 'Accessibility' },
	]}
/>
```
