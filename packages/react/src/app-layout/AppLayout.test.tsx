import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { Prose } from '../prose';
import { ChartLineIcon, EmailIcon, HelpIcon, SuccessIcon } from '../icon';
import { AppLayout } from './AppLayout';
import type { AppLayoutProps } from './AppLayout';
import { FactoryIcon, HomeIcon } from './icons';

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

function renderAppLayout(props?: Partial<AppLayoutProps>) {
	return render(
		<AppLayout
			siteTitle="Export Service"
			siteSubtitle="Supporting Australian agricultural exports"
			userMenu={{
				name: 'Toto Wolff',
				organisation: 'Orange Meat Works',
				href: '/account',
			}}
			mainNavItems={navItems}
			isFocusMode={props?.isFocusMode}
			activePath="#home"
			handleSignOut={async () => console.log('sign out')}
		>
			<Prose>
				<h1>Authenticated App Shell</h1>
				<p>Some content</p>
			</Prose>
		</AppLayout>
	);
}

describe('AppLayout', () => {
	it('renders correctly', () => {
		const { container } = renderAppLayout();
		expect(container).toMatchSnapshot();
	});
	it('renders a valid HTML structure', () => {
		const { container } = renderAppLayout({});
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
		const { container } = renderAppLayout({ isFocusMode: true });
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
