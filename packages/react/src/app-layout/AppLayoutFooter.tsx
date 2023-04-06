import { useMemo } from 'react';
import { Box, Stack } from '@ag.ds-next/react/box';
import { tokens } from '@ag.ds-next/react/core';
import { FooterDivider } from '@ag.ds-next/react/footer';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Text } from '@ag.ds-next/react/text';
import { Logo } from '@ag.ds-next/react/ag-branding';

export function AppLayoutFooter() {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Stack
			as="footer"
			width="100%"
			gap={1.5}
			paddingY={3}
			borderTop
			borderTopWidth="xl"
		>
			<Box
				width={230}
				display={{
					xs: 'block',
					lg: 'none',
				}}
			>
				<Logo />
			</Box>
			<nav aria-label="footer">
				<LinkList
					horizontal
					links={[
						{
							href: '/about',
							label: 'About',
						},
						{
							href: 'https://www.agriculture.gov.au/about/commitment/accessibility',
							rel: 'external',
							label: 'Accessibility',
						},
						{
							href: 'https://www.agriculture.gov.au/about/disclaimer',
							rel: 'external',
							label: 'Disclaimer',
						},
						{
							href: '/privacy',
							label: 'Privacy',
						},
					]}
				/>
			</nav>
			<FooterDivider />
			<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
				We acknowledge the traditional owners of country throughout Australia
				and recognise their continuing connection to land, waters and culture.
				We pay our respects to their Elders past, present and emerging.
			</Text>
			<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
				&copy; {year} Department of Agriculture, Fisheries and Forestry
			</Text>
		</Stack>
	);
}
