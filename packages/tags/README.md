---
title: Tags
description: Tags are a means of classifying content, typically using keywords or labels. They are added to a web page, an asset or other content to help users search for and find related content quickly and easily.
group: Content
---

### Tags with links

A list of related tags that use links.

Note: An appropriate heading level should be used to introduce the purpose of the list.

```jsx live
<Tags
	heading={
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
	}
	items={[
		{ href: '#', label: 'Foo' },
		{ href: '#', label: 'Bar' },
		{ href: '#', label: 'Baz' },
	]}
/>
```

### Tags without links

A list of related tags without links.

```jsx live
<Tags
	heading={
		<Text as="h2" fontWeight="bold">
			Tags:
		</Text>
	}
	items={[{ label: 'Foo' }, { label: 'Bar' }, { label: 'Baz' }]}
/>
```
