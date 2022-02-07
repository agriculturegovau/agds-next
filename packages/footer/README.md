---
title: Footer
group: Layout
description: Footers help users find what they need after scrolling to the bottom of a page. They provide supplementary information such as copyright, ABN details, contact information, links to other pages within the website, and email and social media links.
---

## Main

The footer at the bottom of a page. Usually contains copyright information and links to other sections of the site.

```jsx live
<Footer variant="agriculture">
	<Columns>
		<Column columnSpan={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
			<Stack gap={0.5}>
				<Heading type="h3">Section title</Heading>
				<LinkList
					links={[
						{ href: '#', label: 'A really long link title' },
						{ href: '#', label: 'Terms and conditions' },
						{ href: '#', label: 'Another really long link title' },
					]}
				/>
			</Stack>
		</Column>
		<Column columnSpan={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
			<Stack gap={0.5}>
				<H3>Section</H3>
				<LinkList
					links={[
						{ href: '#', label: 'Link 1' },
						{ href: '#', label: 'Link 2' },
						{ href: '#', label: 'Link 3' },
					]}
				/>
			</Stack>
		</Column>
		<Column columnSpan={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
			<Stack gap={0.5}>
				<Heading type="h3">Section</Heading>
				<LinkList
					links={[
						{ href: '#', label: 'Link 1' },
						{ href: '#', label: 'Link 2' },
						{ href: '#', label: 'Link 3' },
					]}
				/>
			</Stack>
		</Column>
		<Column columnSpan={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
			<Stack gap={0.5}>
				<Heading type="h3">Section</Heading>
				<LinkList
					links={[
						{ href: '#', label: 'Link 1' },
						{ href: '#', label: 'Link 2' },
						{ href: '#', label: 'Link 3' },
					]}
				/>
			</Stack>
		</Column>
	</Columns>
	<FooterDivider />
	<Text as="p">Footer text</Text>

	<Box maxWidth="240px">
		<Logo />
	</Box>

	<FooterDivider />
	<Text>
		<small>
			&copy; Commonwealth of Australia,{' '}
			<TextLink
				href="https://github.com/govau/design-system-components/blob/master/LICENSE.md"
				rel="external license"
			>
				MIT licensed
			</TextLink>
		</small>
	</Text>
</Footer>
```

## Streamlined

```jsx live
<Footer variant="agriculture">
	<LinkList
		links={[
			{ href: '#1', label: 'Accessibility' },
			{ href: '#2', label: 'Disclaimer' },
			{ href: '#3', label: 'Privacy' },
		]}
		horizontal
	/>
	<FooterDivider />

	<Text fontSize="xs" maxWidth="42em">
		We acknowledge the traditional owners of country throughout Australia and
		recognise their continuing connection to land, waters and culture. We pay
		our respects to their Elders past, present and emerging.
	</Text>

	<Text fontSize="xs">© Commonwealth of Australia.</Text>
</Footer>
```
