---
title: Headings
description: A primitive typographic component for constrained heading styles. Headings help to structure content on a page using relative visual prominence.
group: Content
---

Headings use the `fontGrid` function to make the font-size and line-height snap to grid.

## Levels

Our range of supported headings.

```jsx live
<Stack>
	<H1>Heading 1</H1>
	<H2>Heading 2</H2>
	<H3>Heading 3</H3>
	<H4>Heading 4</H4>
	<H5>Heading 5</H5>
	<H6>Heading 6</H6>
</Stack>
```

## Semantic headings

If you wish to use a pair a different heading size with a different HTML element for semantic reason, you can use the `Heading` component and use the `as` property to change the HTML element that will be rendered.

```jsx live
<Stack>
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
