---
title: Card
description: The card component is used to provide a brief summary of content or a task, often with a link to more detail. Cards are frequently displayed alongside other cards to group related content or tasks.
group: Layout
---

## Basic card

Cards are used to organise information related to a single topic. Cards can contain multiple elements, such as images, links, actions, text and more.

```jsx live
<Stack gap={1}>
	<Box theme="light" padding={1} background="body">
		<Card>
			<CardInner>
				<Body>
					<h2>Card Title</h2>
					<p>Additional content</p>
				</Body>
			</CardInner>
		</Card>
	</Box>
	<Box theme="dark" padding={1} background="body">
		<Card>
			<CardInner>
				<Body>
					<h2>Card Title</h2>
					<p>Additional content</p>
				</Body>
			</CardInner>
		</Card>
	</Box>
</Stack>
```

## Images

A card with an image. For full width images, add the img tag outside the `CardInner` container. For images with inner padding, add the img tag inside the `CardInner` container.

```jsx live
<Card>
	<PlaceholderImage alt="Grey placeholder image" />
	<CardInner>
		<Body>
			<a href="#">Action</a>
		</Body>
	</CardInner>
</Card>
```

## Clickable cards

For cards that contain a single link, the hit area for that link can be made to wrap the entire card. This pattern may be used on cards that act as a preview for an article or blog post, for example. These cards could contain an image, a title and a brief summary of the article. Avoid wrapping an entire card in an anchor tag as this can be a difficult experience for a screen reader user.

```jsx live
<Card shadow clickable>
	<PlaceholderImage alt="Grey placeholder image" />
	<CardInner>
		<Body>
			<h3>
				<CardLink href="#">Title of article</CardLink>
			</h3>
			<p>Some text</p>
		</Body>
	</CardInner>
</Card>
```

## TODO

- [Card lists](https://designsystem.gov.au/components/card/#card-lists)
- [Feature Headers](https://designsystem.gov.au/components/card/#feature-headers)
- [Feature Footers](https://designsystem.gov.au/components/card/#feature-footers)
