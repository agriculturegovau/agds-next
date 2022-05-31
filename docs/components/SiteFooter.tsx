import { Footer, FooterDivider } from '@ag.ds-next/footer';
import { Text } from '@ag.ds-next/text';
import { LinkList } from '@ag.ds-next/link-list';
import { tokens } from '@ag.ds-next/core';

const footerLinks = [
	{
		label: 'Home',
		href: '/',
	},
	{
		label: 'Storybook',
		href: '/storybook/index.html',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	{
		label: 'Playroom',
		href: '/playroom/index.html',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
	{
		label: 'Starter kit',
		href: 'https://github.com/steelthreads/agds-next-starter-kit',
		target: '_blank',
		rel: 'noopener noreferrer',
	},
];

export const SiteFooter = () => {
	return (
		<Footer variant="agriculture">
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
				&copy; Commonwealth of Australia.
			</Text>
		</Footer>
	);
};
