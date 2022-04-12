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
	<Box
		maxWidth={{
			lg: '42em',
			sm: '50%',
		}}
		width="100%"
	>
		<Stack gap={1.5}>
			<Stack gap={0.5}>
				<Heading type="h1">Hero banner title</Heading>
				<Text as="p">Hero banner paragraph text</Text>
			</Stack>
			<SearchBox onSubmit={() => {}}>
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
