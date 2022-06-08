---
title: Text Link
description: A primitive typographic component for constrained text styles
group: Navigation
storybookPath: /story/foundations-text--basic
---

This package includes the components `<TextLink />` and `<TextLinkExternal />`.

## TextLink

The `TextLink` component creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

```jsx live
<Text>
	This is some text with <TextLink href="#">a link</TextLink> inside.
</Text>
```

## TextLinkExternal

The `TextLinkExternal` component creates a hyperlink to a web page, which will open in a new tab. It is adorned by an external link Icon, and includes descriptive text to communicate to a screenreader the interaction.

```jsx live
<Text>
	Interact with our components in{' '}
	<TextLinkExternal href="https://steelthreads.github.io/agds-next/playroom/index.html">
		Playroom
	</TextLinkExternal>
	.
</Text>
```
