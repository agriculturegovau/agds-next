import { Footer as AgDsFooter } from '@ag.ds-next/footer';
import { LinkList } from '@ag.ds-next/link-list';

const footerLinks = [
	{ label: 'Home', href: '/' },
	{ label: 'Content', href: '/content' },
];

export const SiteFooter = () => {
	return (
		<AgDsFooter>
			<LinkList links={footerLinks} inline />
		</AgDsFooter>
	);
};
