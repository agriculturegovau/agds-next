---
title: Direction link
description: Direction links are accompanied by arrows to help users move quickly to other parts of the page or through a process.
group: Navigation
storybookPath: /story/navigation-directionlink--basic
---

Use direction links to indicate a physical direction, such as:

- Linking `up` or `down` within the page.
- Going `back` to a parent page.
- Showing the `next` or `previous` pages.

```jsx live
<Stack gap={2}>
	<DirectionLink href="#" direction="left">
		Back
	</DirectionLink>
	<DirectionLink href="#" direction="right">
		Next
	</DirectionLink>
	<DirectionLink href="#" direction="up">
		Top
	</DirectionLink>
	<DirectionLink href="#" direction="down">
		Skip to footer
	</DirectionLink>
</Stack>
```

### As button element

For situations where you need the appearance of a `DirectionLink` but the functionality of a HTML `button` element, you can use `as` prop.

```jsx live
<Stack gap={2}>
	<DirectionLink as={BaseButton} onClick={console.log} direction="left">
		Back
	</DirectionLink>
	<DirectionLink as={BaseButton} onClick={console.log} direction="right">
		Next
	</DirectionLink>
	<DirectionLink as={BaseButton} onClick={console.log} direction="up">
		Top
	</DirectionLink>
	<DirectionLink as={BaseButton} onClick={console.log} direction="down">
		Skip to footer
	</DirectionLink>
</Stack>
```
