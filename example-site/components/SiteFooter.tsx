import { Footer as AgDsFooter } from '@ag.ds-next/footer';

const footerLinks = [
	{ title: 'Home', href: '/' },
	{ title: 'Content', href: '/content' },
];

export const SiteFooter = () => {
	return <AgDsFooter links={footerLinks} />;
};
