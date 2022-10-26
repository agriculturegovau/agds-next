import { useMemo } from 'react';
import {
	Footer,
	FooterDivider,
	Text,
	LinkList,
	tokens,
	Box,
} from '@ag.ds-next/react';

const footerLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'Services', href: '/services' },
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
