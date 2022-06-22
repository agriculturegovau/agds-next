---
title: Pagination
description: Pagination allows large amounts of content to be separated into multiple pages.
group: Navigation
storybookPath: /story/navigation--basic
---

Use pagination to let users move through an ordered collection of items that has been split into pages.

```jsx live
() => {
	// Note: This example is meant for demonstrating purposes only
	// We are only using hash urls here so this interactive example works on our docs website
	const hash = window.location.hash;

	const currentPage = React.useMemo(() => {
		const pageParam = hash.match(/page-(\d)/);
		return (pageParam && pageParam[1] && parseInt(pageParam[1])) || 1;
	}, [hash]);

	return (
		<Pagination
			currentPage={currentPage}
			generateHref={(pageNumber) => `#page-${pageNumber}`}
			totalPages={10}
		/>
	);
};
```
