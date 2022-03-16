import { Footer, FooterDivider } from '@ag.ds-next/footer';
import { Text } from '@ag.ds-next/text';
import { LinkList } from '@ag.ds-next/link-list';

const footerLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'Storybook', href: '/storybook/index.html' },
	{ label: 'Playroom', href: '/playroom/index.html' },
	{ label: 'Example site', href: '/example-site/index.html' },
];

export const SiteFooter = () => {
	return (
		<Footer variant="agriculture">
			<LinkList links={footerLinks} horizontal />

			<FooterDivider />

			<Text>&copy; Commonwealth of Australia.</Text>
		</Footer>
	);
};
