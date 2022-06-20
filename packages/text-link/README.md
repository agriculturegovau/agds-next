---
title: Text Link
description: A typographic component for creating a hyperlinks.
group: Navigation
storybookPath: /story/navigation-textlink--basic
---

This package includes the components `<TextLink />`, `<TextButton />` and `<TextLinkExternal />`.

The `TextLink` component creates a hyperlink to web pages, files, email addresses, locations in the same page, or anything else a URL can address.

```jsx live
<Text>
	This is some text with <TextLink href="#">a link</TextLink> inside.
</Text>
```

## TextButton

For situations where you need the appearance of a `TextLink` but the functionality of a HTML `button` element, you can use the `TextButton` component.

```jsx live
<Text>
	This is some text with <TextButton onClick={console.log}>a button</TextButton>{' '}
	inside.
</Text>
```

## TextLinkExternal

[The W3C states](https://www.w3.org/TR/WCAG20-TECHS/G200.html) "In general, it is better not to open links in new windows and tabs since they can be disorienting for people, especially people who have difficulty perceiving visual content. However there are some situations where it is preferable from an accessibility perspective to open a new window or tab".

The `TextLinkExternal` component can be used to create a link that opens in a new tab which includes descriptive text to communicate to a screenreader the interaction.

```jsx live
<Text>
	Interact with our components in{' '}
	<TextLinkExternal href="https://steelthreads.github.io/agds-next/playroom/index.html">
		Playroom
	</TextLinkExternal>
	.
</Text>
```
