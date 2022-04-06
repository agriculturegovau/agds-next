---
title: Accordion
description: Accordions help users see only the content they need, by expanding and collapsing sections of content.
group: Layout
---

A singular method of expanding and collapsing a piece of content with a title.

```jsx live
<Accordion>
	<AccordionItem title="Accordion">
		<AccordionItemContent>
			<Text>This is some text inside an Accordion</Text>
		</AccordionItemContent>
	</AccordionItem>
</Accordion>
```

## Grouping

It is common for multiple AccordionItems to appear together. Grouped AccordionItems should not influence eachother - Meaning if one opens, it should not cause another to close.

```jsx live
<Accordion>
	<AccordionItem title="Accordion 1">
		<AccordionItemContent>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a libero
				vel dolor sollicitudin pretium quis quis mi. Fusce sapien mi, efficitur
				sit amet ex et, bibendum efficitur odio. Ut nec gravida metus, nec
				suscipit nulla. Donec est nulla, dictum sed ultricies congue, suscipit
				at velit. Integer ut leo lectus. Nullam volutpat ex quis imperdiet
				scelerisque. Etiam ultrices et nisi eget pulvinar. Cras ultrices lectus
				ut nisl gravida, eu rutrum sem luctus. Praesent vulputate eu dolor
				commodo tempor. Sed nec lorem consectetur, maximus justo at, tincidunt
				quam. Suspendisse pellentesque accumsan accumsan. Cras in odio leo. Nam
				pharetra, lorem eget aliquam gravida, felis ex tempor sapien, a ornare
				leo nulla eget magna. Quisque tempus ipsum eu elit bibendum, nec
				bibendum ligula posuere. Nam porttitor est eros, ac maximus nisl euismod
				nec.
			</p>
		</AccordionItemContent>
	</AccordionItem>
	<AccordionItem title="Accordion 2">
		<AccordionItemContent>
			<Body>
				<p>
					Curabitur urna erat, ornare in nulla vitae, tempor porttitor dolor.
					Nam luctus fermentum tellus, vitae maximus turpis viverra eget.
					Phasellus hendrerit tortor eu mauris ultricies congue. Suspendisse
					cursus, purus quis viverra pharetra, purus quam hendrerit magna,
					condimentum cursus massa nisi ut est. Mauris in tristique augue.
					Phasellus tellus ante, fermentum eget fringilla eget, tempor nec nunc.
					Ut nec dui vitae ex dignissim tempus ac et ante. Donec imperdiet
					suscipit leo. Suspendisse mattis quis nisl id mattis. Sed dictum
					tempus nibh, quis feugiat magna efficitur in. Sed vulputate et dui eu
					malesuada.
				</p>
			</Body>
		</AccordionItemContent>
	</AccordionItem>
	<AccordionItem title="Accordion 3">
		<AccordionItemContent>
			<Body>
				<p>
					Curabitur urna erat, ornare in nulla vitae, tempor porttitor dolor.
					Nam luctus fermentum tellus, vitae maximus turpis viverra eget.
					Phasellus hendrerit tortor eu mauris ultricies congue. Suspendisse
					cursus, purus quis viverra pharetra, purus quam hendrerit magna,
					condimentum cursus massa nisi ut est. Mauris in tristique augue.
					Phasellus tellus ante, fermentum eget fringilla eget, tempor nec nunc.
					Ut nec dui vitae ex dignissim tempus ac et ante. Donec imperdiet
					suscipit leo. Suspendisse mattis quis nisl id mattis. Sed dictum
					tempus nibh, quis feugiat magna efficitur in. Sed vulputate et dui eu
					malesuada.
				</p>
			</Body>
		</AccordionItemContent>
	</AccordionItem>
</Accordion>
```

## Edge-to-edge images

```jsx live
<Accordion>
	<AccordionItem title="Edge-to-edge image">
		<img
			alt="Placeholder image"
			src="/agds-next/img/placeholder/600X260.png"
			width="100%"
		/>
		<AccordionItemContent>
			<Text>
				In this example, we remove the default padding from the AccordionItem,
				in order to achieve the edge-to-edge image above. This Text is wrapped
				in the AccordionItemContent component.
			</Text>
		</AccordionItemContent>
	</AccordionItem>
</Accordion>
```
