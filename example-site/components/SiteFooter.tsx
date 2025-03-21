import { useMemo } from 'react';
import { Footer, FooterDivider } from '@ag.ds-next/react/footer';
import { Text } from '@ag.ds-next/react/text';
import { LinkList } from '@ag.ds-next/react/link-list';
import { tokens } from '@ag.ds-next/react/core';
import { Box } from '@ag.ds-next/react/box';

const footerLinks = [
	{ label: 'Home', href: '/' },
	{
		label: 'Storybook',
		href: 'https://design-system.agriculture.gov.au/storybook/index.html',
	},
	{
		label: 'Playroom',
		href: 'https://design-system.agriculture.gov.au/playroom',
	},
	{
		label: 'Starter kit',
		href: 'https://github.com/agriculturegovau/agds-starter-kit',
	},
	{
		label: 'Privacy',
		href: 'https://www.agriculture.gov.au/about/commitment/privacy',
	},
];

export const SiteFooter = () => {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Box palette="dark">
			<Footer background="bodyAlt">
				<nav aria-label="footer">
					<LinkList horizontal links={footerLinks} />
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
			</Footer>
		</Box>
	);
};
