---
title: Hero Banner
description: Hero banner are used to grab a user’s attention.
group: Layout
---

```jsx live
<HeroBanner
	backgroundImageSrc="https://steelthreads.github.io/export-landing/homepage-harvest-medium.jpg"
	mobileImage={
		<img
			alt="Hero image"
			src="https://steelthreads.github.io/export-landing/homepage-harvest-medium.jpg"
			style={{ display: 'block', height: 'auto', width: '100%' }}
		/>
	}
	subTitle="Hero banner paragraph text"
	title="Hero banner title"
>
	<SearchBox onSubmit={() => {}}>
		<SearchBoxInput label="Search this website" />
		<SearchBoxButton>Search</SearchBoxButton>
	</SearchBox>
</HeroBanner>
```

### Buttons

```jsx live
<HeroBanner
	backgroundImageSrc="https://steelthreads.github.io/export-landing/homepage-harvest-medium.jpg"
	mobileImage={
		<img
			alt="Hero image"
			src="https://steelthreads.github.io/export-landing/homepage-harvest-medium.jpg"
			style={{ display: 'block', height: 'auto', width: '100%' }}
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
