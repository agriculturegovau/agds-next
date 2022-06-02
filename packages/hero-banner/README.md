---
title: Hero Banner
description: Hero banner are used to grab a user’s attention.
group: Layout
storybookPath: /story/layout-herobanner--light-variant
---

## Hero Banner

```jsx live
<HeroBanner
	image={
		<img
			alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
			src="/agds-next/img/placeholder/hero-banner.png"
		/>
	}
>
	<HeroBannerTitleContainer>
		<HeroBannerTitle>Hero banner title (H1)</HeroBannerTitle>
		<HeroBannerSubTitle>Hero banner paragraph text (P)</HeroBannerSubTitle>
	</HeroBannerTitleContainer>
	<SearchBox onSubmit={() => {}}>
		<SearchBoxInput label="Search this website" />
		<SearchBoxButton iconOnly={{ xs: true, md: false }}>Search</SearchBoxButton>
	</SearchBox>
</HeroBanner>
```

## Section Banner

```jsx live
<SectionBanner
	image={
		<img
			alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
			src="/agds-next/img/placeholder/hero-banner.png"
		/>
	}
>
	<SectionBannerTitle>
		Website hero banner title - xxl/display (H1)
	</SectionBannerTitle>
	<SectionBannerSubTitle>Hero banner sub title (P).</SectionBannerSubTitle>
</SectionBanner>
```

## Category Banner

```jsx live
<CategoryBanner>
	<Breadcrumbs
		links={[
			{ href: '#', label: 'Section 1' },
			{ href: '#', label: 'Category page' },
			{ label: 'Subcategory page' },
		]}
	/>
	<CategoryBannerTitle>
		Subcategory banner title - xxl/display (H1)
	</CategoryBannerTitle>
</CategoryBanner>
```

### Image selection

Images in this component are automatically resized to fit their container using the [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property. Because of this it is important to use image at an appropriate image ratio. You can reference the image size and ratio of our [example image](/agds-next/img/placeholder/hero-banner.png). Images should be also accompanied by descriptive alternative text using the [alt tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt).
