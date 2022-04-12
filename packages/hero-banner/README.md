---
title: Hero Banner
description: TODO
group: Layout
---

```jsx live
<HeroBanner
	backgroundImageSrc="https://steelthreads.github.io/export-landing/homepage-harvest-medium.jpg"
	mobileImage={
		<img
			alt="Hero image"
			src="https://steelthreads.github.io/export-landing/homepage-harvest-medium.jpg"
			style={{ height: 'auto', width: '100%' }}
		/>
	}
>
	<Box maxWidth={{ sm: '50%', lg: tokens.maxWidth.bodyText }} width="100%">
		<Stack gap={[1.5, 2]}>
			<Stack gap={[0.5, 1]}>
				<Heading type="h1" fontSize="xxxl">
					Hero banner title
				</Heading>
				<Text as="p" fontSize="md">
					Hero banner paragraph text
				</Text>
			</Stack>
			<SearchBox onSubmit={console.log}>
				<SearchBoxInput label="Search this website" />
				<SearchBoxButton>Search</SearchBoxButton>
			</SearchBox>
		</Stack>
	</Box>
</HeroBanner>
```

### Centered

```jsx live
<HeroBanner>
	<Flex
		flexDirection="column"
		alignItems="center"
		maxWidth={tokens.maxWidth.bodyText}
		width="100%"
		css={{ margin: '0 auto', textAlign: 'center' }}
	>
		<Stack gap={1.5}>
			<Stack gap={0.5}>
				<Heading type="h1">Hero banner title</Heading>
				<Text as="p">Hero banner paragraph text</Text>
			</Stack>
			<Flex gap={1}>
				<Button>Primary button</Button>
				<Button variant="secondary">Secondary button</Button>
			</Flex>
		</Stack>
	</Flex>
</HeroBanner>
```
