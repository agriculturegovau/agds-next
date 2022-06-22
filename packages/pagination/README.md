---
title: Pagination
description: Pagination allows large amounts of content to be separated into multiple pages.
group: Navigation
storybookPath: /story/navigation--basic
---

Use pagination to let users move through an ordered collection of items that has been split into pages.

```jsx live
() => {
	// Note: This is demo code only
	// We are only using hash urls here so this interactiveexample works with our documentation website
	// You probably want to use `use-query-params` to managae this state
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

### Buttons

By default, the `Pagination` component renders an anchor tag for each list item. We strongly recommend using wherever possible as it the most inclusive and accessible solution for users.

However, this requires the page number to be stored in the users URL. This is fine in the majority of use cases, but in scenarios where that isn't possible we offer a `PaginationButtons` component. This component renders button elements for each list item, meaning you can manage the state of the active page yourself, such as with `React.useState`.

```jsx live
() => {
	const [currentPage, setCurrentPage] = React.useState(5);
	return (
		<PaginationButtons
			currentPage={currentPage}
			onChange={setCurrentPage}
			totalPages={10}
		/>
	);
};
```
