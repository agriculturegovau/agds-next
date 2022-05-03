---
title: Hero Banner
description: Hero banner are used to grab a user’s attention.
group: Layout
storybookPath: /story/layout-herobanner--light-variant
---

```jsx live
<HeroBanner
	backgroundImageSrc="/agds-next/img/placeholder/hero-banner.png"
	mobileImage={
		<img
			alt="Hero image"
			src="/agds-next/img/placeholder/hero-banner.png"
			style={{ display: 'block', height: 'auto', width: '100%' }}
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

### Buttons

```jsx live
<HeroBanner
	backgroundImageSrc="/agds-next/img/placeholder/hero-banner.png"
	mobileImage={
		<img
			alt="Hero image"
			src="/agds-next/img/placeholder/hero-banner.png"
			style={{ display: 'block', height: 'auto', width: '100%' }}
		/>
	}
	subTitle="Hero banner paragraph text"
	title="Hero banner title"
>
	<Flex flexDirection={{ xs: 'column', md: 'row' }} gap={1}>
		<Button>Primary button</Button>
		<Button variant="secondary">Secondary button</Button>
	</Flex>
</HeroBanner>
```
