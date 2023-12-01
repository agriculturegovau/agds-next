import { useMemo } from 'react';
import { Footer, FooterDivider } from '@ag.ds-next/react/footer';
import { Text } from '@ag.ds-next/react/text';
import { LinkList } from '@ag.ds-next/react/link-list';
import { Box } from '@ag.ds-next/react/box';
import { tokens } from '@ag.ds-next/react/core';

const footerLinks = [
	{ label: 'About', href: '/about' },
	{ label: 'Updates', href: '/updates' },
	{ label: 'Roadmap', href: '/roadmap' },
	{
		label: 'Privacy',
		href: 'https://www.agriculture.gov.au/about/commitment/privacy',
	},
	{
		label: 'Storybook',
		href: process.env.NEXT_PUBLIC_STORYBOOK_URL,
	},
	{
		label: 'Playroom',
		href: process.env.NEXT_PUBLIC_PLAYROOM_URL,
	},
	{
		label: 'Starter kit',
		href: 'https://github.com/agriculturegovau/agds-starter-kit',
	},
];

export const SiteFooter = () => {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Box palette="dark">
			<Footer background="bodyAlt">
				<nav aria-label="footer">
					<LinkList links={footerLinks} horizontal />
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
