---
title: Loading
description: Loading indicators inform users that their action is being processed.
group: Content
---

## Loading Blanket

The `LoadingBlanket` component can be used indicate the loading state of a component or page.

Note: As this component is positioned absolute, you will need to make sure your component container has relative position set.

```jsx live
<Box
	background="body"
	height="300px"
	width="100%"
	padding={1}
	border
	rounded
	style={{ position: 'relative' }}
>
	<LoadingBlanket label="Component loading state" />
</Box>
```

### Full-screen

Adding the `fullScreen` prop will position the component over the whole screen.

```jsx
<LoadingBlanket fullScreen label="Page loading state" />
```

## Loading Dots

The `LoadingDots` component can be used on it's own in some scenarios, for example when fetching data from a remote source.

```jsx live
<Stack gap={2} alignItems="center">
	<LoadingDots size="sm" aria-label="Loading" />
	<LoadingDots size="md" aria-label="Loading" />
	<LoadingDots size="lg" aria-label="Loading" />
</Stack>
```
