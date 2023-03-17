import {
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

function AppShellTest({ isFocusMode = false }) {
	const siteTitle = 'Export Service';
	const siteSubtitle = 'Supporting Australian agricultural exports';
	const userName = 'Toto Wolff';
	const userRole = 'Team Principal';
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
		},
		{ label: 'Help', icon: HelpIcon, href: '#help' },
	];

	const signOut = () => {
		console.log('sign out');
	};

	return (
		<AuthenticatedAppShell
			siteTitle={siteTitle}
			siteSubtitle={siteSubtitle}
			userName={userName}
			userRole={userRole}
			isFocusMode={isFocusMode}
			primaryNavItems={primaryNavItems}
			secondaryNavItems={secondaryNavItems}
			signOut={signOut}
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
