---
title: Headings
description: Headings help to structure content on a page using relative visual prominence.
group: Content
---

Our range of supported headings. These use the `fontGrid` function to make the font-size and line-height snap to grid.

```jsx live
<Stack gap={1}>
	<H1>Heading 1</H1>
	<H2>Heading 2</H2>
	<H3>Heading 3</H3>
	<H4>Heading 4</H4>
	<H5>Heading 5</H5>
	<H6>Heading 6</H6>
</Stack>
```

## Sizes

If you wish to use a pair a different font-size with a specific heading for semantic reason you can use the `Heading` component.

```jsx live
<Stack gap={1}>
	<Heading as="h3" fontSize="xxxl">
		Heading 3 (xxxl)
	</Heading>
	<Heading as="h3" fontSize="xxl">
		Heading 3 (xxl)
	</Heading>
	<Heading as="h3" fontSize="xl">
		Heading 3 (xl)
	</Heading>
	<Heading as="h3" fontSize="lg">
		Heading 3 (lg)
	</Heading>
	<Heading as="h3" fontSize="md">
		Heading 3 (md)
	</Heading>
	<Heading as="h3" fontSize="sm">
		Heading 3 (sm)
	</Heading>
	<Heading as="h3" fontSize="xs">
		Heading 3 (xs)
	</Heading>
</Stack>
```
