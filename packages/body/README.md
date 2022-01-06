---
title: Body
description: A container for CMS content
---

Many sites will have content being generated in a WYSIWIG or HTML field within a content management system. This content is inherently difficult to style as developers often times have limited control over the markup being generated in these editors. `Body` is designed to apply styling to make CMS content look ok.

```jsx live
<Box theme="light" background="page">
	<Body>
		<h1>Title</h1>
		<p>Lorem ipsum delor sit amet.</p>
		<ul>
			<li>List item</li>
		</ul>
	</Body>
</Box>
```
