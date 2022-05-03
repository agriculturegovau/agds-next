---
title: Hero Banner
description: Hero banner are used to grab a user’s attention.
group: Layout
---

```jsx live
<HeroBanner
	image={
		<img
			alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
			src="/agds-next/img/placeholder/hero-banner.png"
		/>
	}
	subTitle="Hero banner paragraph text"
	title="Hero banner title"
>
	<SearchBox onSubmit={() => {}}>
		<SearchBoxInput label="Search this website" />
		<SearchBoxButton iconOnly={{ xs: true, md: false }}>Search</SearchBoxButton>
	</SearchBox>
</HeroBanner>
```

## Buttons

```jsx live
<HeroBanner
	image={
		<img
			alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
			src="/agds-next/img/placeholder/hero-banner.png"
		/>
	}
	subTitle="Hero banner paragraph text"
	title="Hero banner title"
>
	<Flex flexDirection={['column', 'row']} gap={1}>
		<Button>Primary button</Button>
		<Button variant="secondary">Secondary button</Button>
	</Flex>
</HeroBanner>
```

### Image selection

Images in this component are automatically resized to fit their container using the [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property. Because of this it is important to use image at an appropriate image ratio. You can reference the image size and ratio of our [example image](/agds-next/img/placeholder/hero-banner.png). Images should be also accompanied by descriptive alternative text using the [alt tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt).
