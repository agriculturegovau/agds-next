---
title: Text link
description: A typographic component for creating a hyperlinks.
group: Navigation
storybookPath: /story/navigation-textlink--basic
---

This package includes the components `<TextLink />` and `<TextLinkExternal />`.

The `TextLink` component creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

```jsx live
<Text>
	This is some text with <TextLink href="#">a link</TextLink> inside.
</Text>
```

### As button element

For situations where you need the appearance of a `TextLink` but the functionality of a HTML `button` element, you can use `as` prop.

```jsx live
<TextLink as={BaseButton} onClick={console.log}>
	Button element
</TextLink>
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
