import { PropsWithChildren } from 'react';
import { SiteLayout } from './SiteLayout';
import { PageLayout } from './PageLayout';
import { PageTitle } from './PageTitle';

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
	elevation: {
		label: 'Elevation',
		pageTitle: 'Elevation tokens',
		description:
			'A set of predefined tokens which are used to establish a sense of depth and perspective.',
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
} as const;

export const TOKEN_NAV_LINKS = Object.entries(TOKEN_PAGES).map(
	([key, item]) => ({
		href: `/foundations/tokens/${key}`,
		...item,
	})
);

const getBreadcrumbs = (currentPageTitle: string) => {
	return [
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
			label: currentPageTitle,
		},
	];
};

type TokenLayoutProps = PropsWithChildren<{
	editPath: string;
	title: string;
	description: string;
}>;

export const TokenLayout = ({
	editPath,
	children,
	title,
	description,
}: TokenLayoutProps) => {
	return (
		<SiteLayout applyMainElement={false}>
			<PageLayout
				applyMainElement={true}
				sideNav={{
					title: 'Tokens',
					titleLink: '/foundations/tokens',
					items: TOKEN_NAV_LINKS.map(({ href, label }) => ({ href, label })),
				}}
				editPath={editPath}
				breadcrumbs={getBreadcrumbs(title)}
			>
				<PageTitle title={title} introduction={description} />
				{children}
			</PageLayout>
		</SiteLayout>
	);
};
