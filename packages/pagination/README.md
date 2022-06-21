---
title: Pagination
description: Pagination allows large amounts of content to be separated into multiple pages.
group: Navigation
storybookPath: /story/navigation--basic
---

```jsx live
() => {
	const [currentPage, setCurrentPage] = React.useState(1);
	return (
		<Pagination
			currentPage={currentPage}
			onChange={setCurrentPage}
			limit={5}
			totalPages={10}
		/>
	);
};
```
