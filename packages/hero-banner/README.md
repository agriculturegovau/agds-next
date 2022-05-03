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

### Buttons

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
