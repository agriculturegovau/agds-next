---
title: Hero Banner
description: Hero banner are used to grab a user’s attention.
group: Layout
storybookPath: /story/layout-herobanner--light-variant
---

## Hero Banner

Use the `HeroBanner` components on home or landing pages.

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
		<HeroBannerTitle>
			Website hero banner title - xxxl/display (H1)
		</HeroBannerTitle>
		<HeroBannerSubtitle>
			Short hero banner sentence - md/default (P)
		</HeroBannerSubtitle>
	</HeroBannerTitleContainer>
	<SearchBox onSubmit={() => {}}>
		<SearchBoxInput label="Search this website" />
		<SearchBoxButton iconOnly={{ xs: true, md: false }}>Search</SearchBoxButton>
	</SearchBox>
</HeroBanner>
```

## Section Banner

Use the `HeroCategoryBanner` components for top level category pages.

```jsx live
<HeroCategoryBanner
	image={
		<img
			alt="Harvester in a golden field of wheat emptying grain into a chaser bin moving alongside it."
			src="/agds-next/img/placeholder/hero-banner.png"
		/>
	}
>
	<HeroCategoryBannerTitle>
		Website hero banner title - xxl/display (H1)
	</HeroCategoryBannerTitle>
	<HeroCategoryBannerSubtitle>
		Hero banner sub title (P).
	</HeroCategoryBannerSubtitle>
</HeroCategoryBanner>
```

## Subcategory Banner

Use the `HeroSubcategoryBanner` components pages within a category.

```jsx live
<HeroSubcategoryBanner>
	<Breadcrumbs
		links={[
			{ href: '#', label: 'Section 1' },
			{ href: '#', label: 'Category page' },
			{ label: 'Subcategory page' },
		]}
	/>
	<HeroSubcategoryBannerTitle>
		Subcategory banner title - xxl/display (H1)
	</HeroSubcategoryBannerTitle>
</HeroSubcategoryBanner>
```

### Image selection

Images in this component are automatically resized to fit their container using the [`object-fit`](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit) CSS property. Because of this it is important to use image at an appropriate image ratio. You can reference the image size and ratio of our [example image](/agds-next/img/placeholder/hero-banner.png). Images should be also accompanied by descriptive alternative text using the [alt tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attr-alt).
