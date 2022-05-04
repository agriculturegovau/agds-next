---
title: Body
description: Provides correct styling for Markdown or CMS content.
group: Content
storybookPath: /story/content-body--on-light
---

Many sites will have content being generated in a WYSIWIG or HTML field within a content management system. This content is inherently difficult to style as developers often times have limited control over the markup being generated in these editors. `Body` is designed to apply styling to make CMS content look ok.

This is also known as a Prose component.

Body component should only be used in the context of a page, to format long-form content. It should not be used inside a 'framing' component like a `Card` or `Modal`. Instead, a simple `Stack` should be used.

```jsx
<Body>{{ html }}</Body>
```

### Excluding styles

In some cases you may want to prevent the body styles styles from being inherited on specific elements. This can be achieved by adding the `excludeBodyStylesClassname` to any child of the `Body` component.

```jsx
<Body>
	<h1>Styled heading</h1>
	<div className={excludeBodyStylesClassname}>
		<h1>Unstyled heading</h1>
	</div>
</Body>
```
