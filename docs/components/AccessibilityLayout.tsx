import { PropsWithChildren } from 'react';
import { SiteLayout } from './SiteLayout';
import { PageLayout } from './PageLayout';
import { PageTitle } from './PageTitle';

export const ACCESSIBILITY_PAGES = {
	'accessibility-overview': {
		label: 'Accessibility overview',
		pageTitle: 'Accessibility overview',
		description:
			'Our approach to building components that provide a great user experience for all users.',
	},
	'aria-and-semantic-code': {
		label: 'ARIA and semantic code',
		pageTitle: 'ARIA and semantic code',
		description:
			'The Accessible Rich Internet Application (ARIA) specification helps you to create accessible digital products and services.',
	},
	'clear-communication': {
		label: 'Clear communication',
		pageTitle: 'Clear communication',
		description:
			'Write in plain language and organise content logically. This makes reading easier for everyone, but it’s essential for anyone with English as a second language.',
	},
	'colour-and-contrast': {
		label: 'Colour and contrast',
		pageTitle: 'Colour and contrast',
		description:
			'Provide good contrast and avoid using colour alone to convey meaning. This enhances readability for everyone, especially those with colour vision differences.',
	},
	'consistent-design': {
		label: 'Consistent design',
		pageTitle: 'Consistent design',
		description:
			'Use the design system components predictably. It reduces cognitive load for everyone, but it’s essential for users with learning disabilities.',
	},
	'error-management': {
		label: 'Error management',
		pageTitle: 'Error management',
		description:
			'Provide clear, specific error messages. It helps all users recover from errors, but it’s essential for those with cognitive disabilities.',
	},
	'focus-management': {
		label: 'Focus management',
		pageTitle: 'Focus management',
		description:
			'The focus indicator shows which element has focus. Good focus management helps all users track their position, but it’s essential for people with low vision.',
	},
	'keyboard-accessibility': {
		label: 'Keyboard accessibility',
		pageTitle: 'Keyboard accessibility',
		description:
			'Make all functionality available via keyboard. It’s helpful for power users, but essential for people who use assistive technology.',
	},
	'motion-and-animation': {
		label: 'Motion and animation',
		pageTitle: 'Motion and animation',
		description:
			'Include controls to reduce or disable motion and avoid flashing content. This provides a comfortable experience, especially for those with vestibular or seizure conditions.',
	},
	'states-and-status': {
		label: 'States and status',
		pageTitle: 'States and status',
		description:
			'Clearly communicate change in state or status to all users. This keeps users informed about what’s happening, but it’s essential for people using assistive technologies.',
	},
	'text-sizing-and-spacing': {
		label: 'Text sizing and spacing',
		pageTitle: 'Text sizing and spacing',
		description:
			'Ensure adequate text size and spacing. This improves readability and reduces eye strain for everyone, but it’s essential for people with low vision or dyslexia.',
	},
	timing: {
		label: 'Timing',
		pageTitle: 'Timing',
		description:
			'Allow users to extend, pause or turn off time limits. This reduces pressure for everyone, but it’s essential for people who need more time to interact.',
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
