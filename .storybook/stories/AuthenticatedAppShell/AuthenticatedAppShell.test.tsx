import {
	AvatarIcon,
	ChartLineIcon,
	EmailIcon,
	HelpIcon,
	SuccessIcon,
} from '@ag.ds-next/react/icon';
import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
import { CogIcon, ExitIcon, FactoryIcon, HomeIcon } from './icons';
import { AuthenticatedAppShell } from './AuthenticatedAppShell';

afterEach(cleanup);

const navItems = [
	[
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
	],
	[
		{
			label: 'Messages',
			icon: EmailIcon,
			href: '#messages',
			badgeCount: 3,
		},
		{ label: 'Help', icon: HelpIcon, href: '#help' },
	],
];

function AppShellTest({ isFocusMode = false }) {
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
						icon: CogIcon,
					},
					{
						label: 'Sign out',
						onClick: () => console.log('sign out'),
						icon: ExitIcon,
					},
				],
			}}
			mainNavItems={navItems}
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
