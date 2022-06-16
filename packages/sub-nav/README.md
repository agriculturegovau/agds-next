---
title: Sub Nav
description: A horizontal list of links typically placed between the main navigation and page content.
group: Navigation
storybookPath: /story/navigation-subnav--light-variant
---

The `SubNav` component is a horizontal list of links that can accommodate up to 5 items. It is best suited for navigation to persistent links, or to reveal additional content on the same page. The `SubNav` component sometimes accommodates the third level of the information architecture, following the `SideNav` on a content page. If you need more space for longer lists, consider another form of navigation such as the `SideNav`, `LinkList`, `InPageNav` or `Card` lists.

The `SubNav` component is designed to collapse down to a static vertical list on smaller devices. Progressive disclosure should not be used to enclose the SubNav on small screens.

```jsx live
<SubNav
	activePath="#usage"
	links={[
		{ href: '#usage', label: 'Usage' },
		{ href: '#code', label: 'Code' },
		{ href: '#code', label: 'Content' },
		{ href: '#accessibility', label: 'Accessibility' },
	]}
/>
```
