import {
	AvatarIcon,
	ChartLineIcon,
	ChartPieIcon,
	EmailIcon,
	FactoryIcon,
	HelpIcon,
	HomeIcon,
	SuccessIcon,
} from '@ag.ds-next/react/icon';
import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
import { AuthenticatedAppShell } from './AuthenticatedAppShell';

afterEach(cleanup);

const primaryNavItems = [
	{ label: 'Dashboard', icon: HomeIcon, href: '#home' },
	{
		label: 'Establishments',
		icon: FactoryIcon,
		href: '#establishments',
	},
	{
		label: 'Data and Insights',
		icon: ChartLineIcon,
		href: '#data',
	},
	{
		label: 'Compliance',
		icon: SuccessIcon,
		href: '#compliance',
	},
];
const secondaryNavItems = [
	{
		label: 'Messages',
		icon: EmailIcon,
		href: '#messages',
		badgeCount: 3,
	},
	{ label: 'Help', icon: HelpIcon, href: '#help' },
];

function AppShellTest({ isFocusMode = false }) {
	const signOut = () => {
		console.log('sign out');
	};

	return (
		<AuthenticatedAppShell
			siteTitle="Export Service"
			siteSubtitle="Supporting Australian agricultural exports"
			userMenu={{
				name: 'Toto Wolff',
				organisation: 'Orange Meat Works',
				items: [
					{
						label: 'Account settings',
						href: '#account',
					},
					{
						label: 'Sign out',
						onClick: () => console.log('sign out'),
						icon: AvatarIcon,
					},
				],
			}}
			mainNavItems={{ primary: primaryNavItems, secondary: secondaryNavItems }}
			isFocusMode={isFocusMode}
			activePath="#home"
		>
			<h1>Authenticated App Shell</h1>
			<p>Some content</p>
		</AuthenticatedAppShell>
	);
}

describe('AuthenticatedAppShell', () => {
	it('renders a valid HTML structure', () => {
		const { container } = render(<AppShellTest />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
				'no-inline-style': 'off',
			},
		});
	});

	it('renders a valid HTML structure when in focus mode', () => {
		const { container } = render(<AppShellTest isFocusMode />);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
				'no-inline-style': 'off',
			},
		});
	});
});
