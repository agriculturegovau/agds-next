import { PropsWithChildren } from 'react';
import { SiteLayout } from './SiteLayout';
import { PageLayout } from './PageLayout';
import { PageTitle } from './PageTitle';

export const ACCESSIBILITY_PAGES = {
	'accessibility-overview': {
		label: 'Accessibility overview',
		pageTitle: 'Accessibility overview',
		description: 'TODO PAGE DESC.',
	},
	'aria-and-semantic-code': {
		label: 'ARIA and semantic code',
		pageTitle: 'ARIA and semantic code',
		description: 'TODO PAGE DESC.',
	},
	'clear-communication': {
		label: 'Clear communication',
		pageTitle: 'Clear communication',
		description: 'TODO PAGE DESC.',
	},
	'colour-and-contrast': {
		label: 'Colour and contrast',
		pageTitle: 'Colour and contrast',
		description: 'TODO PAGE DESC.',
	},
	'consistent-design': {
		label: 'Consistent design',
		pageTitle: 'Consistent design',
		description: 'TODO PAGE DESC.',
	},
	'error-management': {
		label: 'Error management',
		pageTitle: 'Error management',
		description: 'TODO PAGE DESC.',
	},
	'focus-management': {
		label: 'Focus management',
		pageTitle: 'Focus management',
		description: 'TODO PAGE DESC.',
	},
	'keyboard-accessibility': {
		label: 'Keyboard accessibility',
		pageTitle: 'Keyboard accessibility',
		description: 'TODO PAGE DESC.',
	},
	'motion-and-animation': {
		label: 'Motion and animation',
		pageTitle: 'Motion and animation',
		description: 'TODO PAGE DESC.',
	},
	'states-and-status': {
		label: 'States and status',
		pageTitle: 'States and status',
		description: 'TODO PAGE DESC.',
	},
	'text-sizing-and-spacing': {
		label: 'Text sizing and spacing',
		pageTitle: 'Text sizing and spacing',
		description: 'TODO PAGE DESC.',
	},
	timing: {
		label: 'Timing',
		pageTitle: 'Timing',
		description: 'TODO PAGE DESC.',
	},
} as const;

export const ACCESSIBILITY_NAV_LINKS = Object.entries(ACCESSIBILITY_PAGES).map(
	([key, item]) => ({
		href: `/foundations/accessibility/${key}`,
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
			label: 'Accessibility',
			href: '/foundations/accessibility',
		},
		{
			label: currentPageTitle,
		},
	];
};

type AccessibilityLayoutProps = PropsWithChildren<{
	description: string;
	editPath: string;
	title: string;
}>;

export const AccessibilityLayout = ({
	children,
	description,
	editPath,
	title,
}: AccessibilityLayoutProps) => {
	return (
		<SiteLayout applyMainElement={false}>
			<PageLayout
				applyMainElement
				breadcrumbs={getBreadcrumbs(title)}
				editPath={editPath}
				sideNav={{
					title: 'Accessibility',
					titleLink: '/foundations/accessibility',
					items: ACCESSIBILITY_NAV_LINKS.map(({ href, label }) => ({
						href,
						label,
					})),
				}}
			>
				<PageTitle introduction={description} title={title} />
				{children}
			</PageLayout>
		</SiteLayout>
	);
};
