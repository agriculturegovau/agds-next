import { PropsWithChildren } from 'react';
import { SiteLayout } from './SiteLayout';
import { PageLayout } from './PageLayout';
import { PageTitle } from './PageTitle';
import { DocumentTitle } from './DocumentTitle';

export const TOKEN_PAGES = {
	border: {
		label: 'Border',
		pageTitle: 'Border tokens',
		description: 'Guidelines for using borders across the Design System.',
	},
	breakpoints: {
		label: 'Breakpoints',
		pageTitle: 'Breakpoint tokens',
		description:
			'Breakpoints are a set of predefined viewport widths that can be used to change the layout of a webpage to ensure it accommodates different devices.',
	},
	colour: {
		label: 'Colour',
		pageTitle: 'Colour tokens',
		description:
			'How to use colour to design consistent, purposeful, and accessible products.',
	},
	'max-width': {
		label: 'Max width',
		pageTitle: 'Max width tokens',
		description:
			'Used to set the maximum width of elements and containers in a page layout.',
	},
	spacing: {
		label: 'Spacing',
		pageTitle: 'Spacing tokens',
		description:
			'Space is the distance between interface elements. It can affect grouping, visual hierarchy, and aesthetics.',
	},
	typography: {
		label: 'Typography',
		pageTitle: 'Typography tokens',
		description:
			'A set of predefined text styles to ensure text is consistent and legible.',
	},
	elevation: {
		label: 'Elevation',
		pageTitle: 'Elevation tokens',
		description:
			'A set of predefined tokens for handling the relative distance between two surfaces along the z-axis.',
	},
} as const;

export const TOKEN_NAV_LINKS = Object.entries(TOKEN_PAGES).map(
	([key, item]) => ({
		href: `/foundations/tokens/${key}`,
		...item,
	})
);

export const TokenLayout = ({
	slug,
	children,
}: PropsWithChildren<{
	slug: keyof typeof TOKEN_PAGES;
}>) => {
	const { pageTitle, description } = TOKEN_PAGES[slug];

	const editPath = `/docs/pages/foundations/tokens/${slug}.tsx`;

	return (
		<SiteLayout applyMainElement={false}>
			<DocumentTitle title={pageTitle} description={description} />
			<PageLayout
				applyMainElement={true}
				sideNav={{
					title: 'Tokens',
					titleLink: '/foundations/tokens',
					items: TOKEN_NAV_LINKS,
				}}
				editPath={editPath}
				breadcrumbs={[
					{
						label: 'Home',
						href: '/',
					},
					{
						label: 'Foundations',
						href: '/foundations',
					},
					{
						label: 'Tokens',
						href: '/foundations/tokens',
					},
					{
						label: pageTitle,
					},
				]}
			>
				<PageTitle title={pageTitle} introduction={description} />
				{children}
			</PageLayout>
		</SiteLayout>
	);
};
