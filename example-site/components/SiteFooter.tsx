import { Footer as AgDsFooter } from '@ag.ds-next/footer';
import { Flex } from '@ag.ds-next/box';
import { TextLink } from '@ag.ds-next/text-link';

const footerLinks = [
	{ title: 'Home', href: '/' },
	{ title: 'Content', href: '/content' },
];

export const SiteFooter = () => {
	return (
		<AgDsFooter>
			<Flex gap={1}>
				{footerLinks.map(({ title, href }) => (
					<TextLink key={href} href={href}>
						{title}
					</TextLink>
				))}
			</Flex>
		</AgDsFooter>
	);
};
