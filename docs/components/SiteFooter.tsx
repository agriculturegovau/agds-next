import { Footer } from '@ag.ds-next/footer';
import { Divider } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { LinkList } from '@ag.ds-next/link-list';

const footerLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'Storybook', href: '/storybook/index.html' },
	{ label: 'Playroom', href: '/playroom/index.html' },
];

export const SiteFooter = () => {
	return (
		<Footer>
			<LinkList links={footerLinks} horizontal />

			<Divider />

			<Text>&copy; Commonwealth of Australia.</Text>
		</Footer>
	);
};
