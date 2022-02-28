---
title: Card
description: The card component is used to provide a brief summary of content or a task, often with a link to more detail. Cards are frequently displayed alongside other cards to group related content or tasks.
group: Layout
---

## Basic card

Cards are used to organise information related to a single topic. Cards can contain multiple elements, such as images, links, actions, text and more.

```jsx live
<Flex gap={1} flexDirection="row">
	<Flex
		flexGrow={1}
		alignContent="stretch"
		palette="light"
		padding={1}
		background="body"
	>
		<Card>
			<CardInner>
				<Body>
					<h2>Card Title</h2>
					<p>Additional content</p>
				</Body>
			</CardInner>
		</Card>
	</Flex>
	<Flex flexGrow={1} palette="dark" padding={1} background="body">
		<Card>
			<CardInner>
				<Body>
					<h2>Card Title</h2>
					<p>Additional content</p>
				</Body>
			</CardInner>
		</Card>
	</Flex>
</Flex>
```

```jsx live
<Flex gap={1} flexDirection="row">
	<Flex
		flexGrow={1}
		alignContent="stretch"
		palette="light"
		padding={1}
		background="body"
	>
		<Card>
			<PlaceholderImage />
			<CardInner>
				<Body>
					<h2>Card title with a longer heading</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
						finibus leo, non rhoncus neque. Nunc et dui cursus, euismod felis
						eget, tristique augue. Praesent consequat mollis lorem id efficitur.
					</p>
				</Body>
			</CardInner>
		</Card>
	</Flex>
	<Flex
		flexGrow={1}
		alignContent="stretch"
		palette="dark"
		padding={1}
		background="body"
	>
		<Card>
			<PlaceholderImage />
			<CardInner>
				<Body>
					<h2>Card title with a longer heading</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
						finibus leo, non rhoncus neque. Nunc et dui cursus, euismod felis
						eget, tristique augue. Praesent consequat mollis lorem id efficitur.
					</p>
				</Body>
			</CardInner>
		</Card>
	</Flex>
</Flex>
```

## Images

A card with an image. For full width images, add the img tag outside the `CardInner` container. For images with inner padding, add the img tag inside the `CardInner` container.

```jsx live
<Card>
	<PlaceholderImage />
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
	<PlaceholderImage />
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

## CardHeader

Use feature headers to give the card heading more visual prominence.

```jsx live
<Flex gap={1} flexDirection="row">
	<Card>
		<CardHeader>
			<H4>Feature card title</H4>
		</CardHeader>
		<CardInner>
			<Body>
				<p>Some text</p>
			</Body>
		</CardInner>
	</Card>

	<Card>
		<CardHeader background="bodyAlt">
			<H4>Feature card title</H4>
		</CardHeader>
		<CardInner>
			<Body>
				<p>Some text</p>
			</Body>
		</CardInner>
	</Card>
</Flex>
```

## CardFooter

Use feature footers to give the card footer more visual prominence. This can be used to guide users to the call to action.

```jsx live
<Flex gap={1} flexDirection="row">
	<Card>
		<CardInner>
			<Text>Some body text can go here.</Text>
		</CardInner>
		<CardFooter>
			<a href="#">Action</a>
		</CardFooter>
	</Card>

	<Card>
		<CardInner>
			<Text>Some body text can go here.</Text>
		</CardInner>
		<CardFooter background="bodyAlt">
			<a href="#">Action</a>
		</CardFooter>
	</Card>
</Flex>
```

## CardList

```jsx live
<Box
	gap={1}
	css={{
		display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
		gridGap: '1rem',
	}}
>
	<Card shadow clickable>
		<CardInner>
			<Body>
				<h2>Card Title</h2>
				<p>Some content</p>
			</Body>
		</CardInner>
	</Card>
	<Card shadow clickable>
		<CardInner>
			<Body>
				<h2>Card Title</h2>
				<p>Some content</p>
				<p>Additional content</p>
			</Body>
		</CardInner>
	</Card>
	<Card shadow clickable>
		<CardInner>
			<Body>
				<h2>Card Title</h2>
				<p>Some content</p>
			</Body>
		</CardInner>
	</Card>
	<Card shadow clickable>
		<CardInner>
			<Body>
				<h2>Card Title</h2>
				<p>Some content</p>
			</Body>
		</CardInner>
	</Card>
	<Card shadow clickable>
		<CardInner>
			<Body>
				<h2>Card Title</h2>
				<p>Some content</p>
			</Body>
		</CardInner>
	</Card>
	<Card shadow clickable>
		<CardInner>
			<Body>
				<h2>Card Title</h2>
				<p>Some content</p>
			</Body>
		</CardInner>
	</Card>
	<Card shadow clickable>
		<CardInner>
			<Body>
				<h2>Card Title</h2>
				<p>Some content</p>
			</Body>
		</CardInner>
	</Card>
</Box>
```
