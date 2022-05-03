---
title: MainNav
description: A horizontal list of links to key areas on the website. Typically placed in the header.
group: Navigation
storybookPath: /story/navigation-mainnav--agriculture-variant
---

The main navigation component is intended to be used as the primary means of navigation around the website. It typically accommodates the top level of the information architecture.

Most sites will require some form of navigation to help users find the information they’re looking for. While a horizontal navigation bar is just one option for navigation design, it is one of the most visible and familiar ways of helping users navigate a site.

The main navigation component is designed to work closely with the header component and collapses down to a conventional open/close menu button on smaller devices.

Note: Because the main navigation component is a horizontal list, it doesn’t accommodate a large amount of items. If you need more space, consider another navigation component such as the [side nav](/agds-next/packages/navigation/side-nav).

```jsx live
<MainNav
	links={[
		{ href: '#home', label: 'Home' },
		{ href: '#content', label: 'Content page' },
		{ href: '#form', label: 'Form page' },
		{ href: '#', label: 'Simple terms' },
		{ href: '#', label: 'Distinct from each other' },
	]}
	variant="agriculture"
/>
```
