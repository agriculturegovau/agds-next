import {
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

function AppShellTest() {
	const signOut = () => {
		console.log('sign out');
	};

	return (
		<AuthenticatedAppShell
			siteTitle="Export Service"
			siteSubtitle="Supporting Australian agricultural exports"
			primaryNavItems={[
				{ label: 'Dashboard', active: true, icon: HomeIcon, href: '#home' },
				{
					label: 'Establishments',
					active: false,
					icon: FactoryIcon,
					href: '#establishments',
				},
				{
					label: 'Data and Insights',
					active: false,
					icon: ChartPieIcon,
					href: '#data',
				},
				{
					label: 'Compliance',
					active: false,
					icon: SuccessIcon,
					href: '#compliance',
				},
			]}
			secondaryNavItems={[
				{
					label: 'Messages',
					active: false,
					icon: EmailIcon,
					href: '#messages',
				},
				{ label: 'Help', active: false, icon: HelpIcon, href: '#help' },
			]}
			signOut={signOut}
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
});
