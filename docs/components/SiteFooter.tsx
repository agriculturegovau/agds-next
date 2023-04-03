import { useMemo } from 'react';
import { Footer, FooterDivider } from '@ag.ds-next/react/footer';
import { Text } from '@ag.ds-next/react/text';
import { LinkList, LinkListLink } from '@ag.ds-next/react/link-list';
import { Box, Stack } from '@ag.ds-next/react/box';
import { tokens } from '@ag.ds-next/react/core';
import { Column, Columns } from '@ag.ds-next/react/columns';
import { Heading } from '@ag.ds-next/react/heading';
import { TextLink } from '@ag.ds-next/react/text-link';

const aboutLinks: LinkListLink[] = [
	{ label: 'About', href: '/about' },
	{ label: 'Roadmap', href: '/roadmap' },
	{
		label: 'Exports Service',
		href: 'https://exports.agriculture.gov.au/',
	},
	{
		label: 'Privacy',
		href: 'https://www.agriculture.gov.au/about/commitment/privacy',
	},
];

const toolLinks: LinkListLink[] = [
	{ label: 'Figma', href: '' },
	{
		label: 'Github',
		href: 'https://github.com/steelthreads/agds-next',
	},
	{ label: 'Storybook', href: process.env.NEXT_PUBLIC_STORYBOOK_URL as string },
	{ label: 'Playroom', href: process.env.NEXT_PUBLIC_PLAYROOM_URL as string },
	{
		label: 'Starter kit',
		href: 'https://github.com/steelthreads/agds-starter-kit',
	},
];

const columnWidths = {
	xs: 12,
	sm: 4,
	lg: 3,
} as const;

export const SiteFooter = () => {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Box palette="dark">
			<Footer background="bodyAlt">
				<nav aria-label="footer">
					<Columns>
						<Column columnSpan={columnWidths}>
							<Stack gap={0.5}>
								<Heading as="h2" type="h3">
									About
								</Heading>
								<LinkList links={aboutLinks} />
							</Stack>
						</Column>
						<Column columnSpan={columnWidths}>
							<Stack gap={0.5}>
								<Heading as="h2" type="h3">
									Tools
								</Heading>
								<LinkList links={toolLinks} />
							</Stack>
						</Column>
					</Columns>
				</nav>
				<FooterDivider />
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					We acknowledge the traditional owners of country throughout Australia
					and recognise their continuing connection to land, waters and culture.
					We pay our respects to their Elders past, present and emerging.
				</Text>
				<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
					&copy; {year} Department of Agriculture, Fisheries and Forestry.{' '}
					<TextLink href="https://www.agriculture.gov.au/about/commitment/privacy">
						Privacy Policy
					</TextLink>
					.
				</Text>
			</Footer>
		</Box>
	);
};
