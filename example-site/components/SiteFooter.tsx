import { tokens } from '@ag.ds-next/core';
import { Footer, FooterDivider } from '@ag.ds-next/footer';
import { LinkList } from '@ag.ds-next/link-list';
import { Text } from '@ag.ds-next/text';

const footerLinks = [
	{ href: '#', label: 'Accessibility' },
	{ href: '#', label: 'Disclaimer' },
	{ href: '#', label: 'Privacy' },
];

export const SiteFooter = () => (
	<Footer variant="agriculture">
		<nav aria-label="footer">
			<LinkList links={footerLinks} horizontal />
		</nav>
		<FooterDivider />
		<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
			We acknowledge the traditional owners of country throughout Australia and
			recognise their continuing connection to land, waters and culture. We pay
			our respects to their Elders past, present and emerging.
		</Text>
		<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
			&copy; Commonwealth of Australia.
		</Text>
	</Footer>
);
