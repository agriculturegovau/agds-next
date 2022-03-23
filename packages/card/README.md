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
		flexDirection="column"
		flexGrow={1}
		palette="light"
		padding={1}
		background="body"
	>
		<Card shadow clickable>
			<CardInner>
				<Stack gap={1}>
					<Box as="h3">
						<CardLink href="#">Card link</CardLink>
					</Box>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
						finibus leo.
					</Text>
				</Stack>
			</CardInner>
		</Card>
	</Flex>
	<Flex
		flexDirection="column"
		flexGrow={1}
		palette="dark"
		padding={1}
		background="body"
	>
		<Card clickable>
			<CardInner>
				<Stack gap={1}>
					<Box as="h3">
						<CardLink href="#">Card link</CardLink>
					</Box>
					<Text>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
						finibus leo.
					</Text>
				</Stack>
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

## Feature headers

Use feature headers to give the card heading more visual prominence.

```jsx live
<Columns>
	<Column columnSpan={6}>
		<Card>
			<CardHeader>
				<Body>
					<h4>Feature card title</h4>
				</Body>
			</CardHeader>
			<CardInner>
				<Body>
					<p>Additional conent relating to the card</p>
				</Body>
			</CardInner>
		</Card>
	</Column>
	<Column columnSpan={6}>
		<Card>
			<CardHeader background="bodyAlt">
				<Body>
					<h4>Feature card title</h4>
				</Body>
			</CardHeader>
			<CardInner>
				<Body>
					<p>Additional conent relating to the card</p>
				</Body>
			</CardInner>
		</Card>
	</Column>
</Columns>
```

## Feature footers

Use feature footers to give the card footer more visual prominence. This can be used to guide users to the call to action.

```jsx live
<Columns>
	<Column columnSpan={6}>
		<Card>
			<CardInner>
				<Body>
					<h3>Card title</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
						voluptatibus.
					</p>
				</Body>
			</CardInner>
			<CardFooter>
				<a href="#">Action</a>
			</CardFooter>
		</Card>
	</Column>
	<Column columnSpan={6}>
		<Card>
			<CardInner>
				<Body>
					<h3>Card title</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
						voluptatibus.
					</p>
				</Body>
			</CardInner>
			<CardFooter background="bodyAlt">
				<a href="#">Action</a>
			</CardFooter>
		</Card>
	</Column>
</Columns>
```

## Card lists

Multiple cards can be used in a list to display a collection of results or articles for example.

```jsx live
<CardList templateColumns={3}>
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
</CardList>
```
