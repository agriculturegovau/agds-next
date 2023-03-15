import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../test-utils';
import { AuthenticatedAppShell } from './AuthenticatedAppShell';
import {
	ChartIcon,
	FactoryIcon,
	HomeIcon,
	MailIcon,
	QuestionIcon,
	TickIcon,
} from './icons';

afterEach(cleanup);

function AppShellTest() {
	const navItems = [
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
			icon: ChartIcon,
			href: '#data',
		},
		{
			label: 'Compliance',
			active: false,
			icon: TickIcon,
			href: '#compliance',
		},
		{ isSeperator: true },
		{ label: 'Messages', active: false, icon: MailIcon, href: '#messages' },
		{ label: 'Help', active: false, icon: QuestionIcon, href: '#help' },
	];

	const signOut = () => {
		console.log('sign out');
	};

	return (
		<AuthenticatedAppShell
			siteTitle="Export Service"
			siteSubtitle="Supporting Australian agricultural exports"
			navItems={navItems}
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
