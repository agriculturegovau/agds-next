---
title: Keyword List
description: The keyword list style helps to emphasise and draw the user's eye to phrases that are repeated in a list.
group: Content
---

A key and value pair used to display a small subtitle above a larger title.

```jsx live
<KeywordList
	links={[
		{ subTitle: 'Department of', title: 'Agriculture and Water Resources' },
		{ subTitle: 'Department of', title: 'Communications and the Arts' },
	]}
/>
```

### With links

The keyword list also supports links which span both the key and value pair in the text.

```jsx live
<KeywordList
	links={[
		{
			href: '#',
			subTitle: 'Department of',
			title: 'Agriculture and Water Resources',
		},
		{
			href: '#',
			subTitle: 'Department of',
			title: 'Communications and the Arts',
		},
	]}
/>
```
