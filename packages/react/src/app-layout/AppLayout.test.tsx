import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { Text } from '../text';
import { LinkList } from '../link-list';
import { tokens } from '../core';
import { Logo } from '../ag-branding';
import { navigationItems } from './test-utils';
import {
	AppLayoutProps,
	AppLayout,
	AppLayoutSidebar,
	AppLayoutContent,
	AppLayoutHeader,
	AppLayoutFooter,
	AppLayoutFooterDivider,
} from './index';

afterEach(cleanup);

function renderAppLayout(props: AppLayoutProps) {
	return render(
		<AppLayout {...props}>
			<AppLayoutSidebar activePath="#dashboard" items={navigationItems} />
			<AppLayoutContent>
				<AppLayoutHeader
					id="header"
					href="#"
					logo={<Logo />}
					heading="Export Service"
					subLine="Supporting Australian agricultural exports"
					accountDetails={{
						href: '/account/preferences',
						name: 'Toto Wolff',
						secondaryText: 'Orange Meat Works',
					}}
				/>
				<main id="main-content">
					<p>Page content</p>
				</main>
				<AppLayoutFooter>
					<nav aria-label="footer">
						<LinkList
							links={[
								{ label: 'Home', href: '/' },
								{
									label: 'Storybook',
									href: 'https://design-system.agriculture.gov.au/storybook/index.html',
								},
								{
									label: 'Playroom',
									href: 'https://design-system.agriculture.gov.au/playroom/index.html',
								},
								{
									label: 'Starter kit',
									href: 'https://github.com/steelthreads/agds-starter-kit',
								},
							]}
							horizontal
						/>
					</nav>
					<AppLayoutFooterDivider />
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						We acknowledge the traditional owners of country throughout
						Australia and recognise their continuing connection to land, waters
						and culture. We pay our respects to their Elders past, present and
						emerging.
					</Text>
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						&copy; 2023 Department of Agriculture, Fisheries and Forestry
					</Text>
				</AppLayoutFooter>
			</AppLayoutContent>
		</AppLayout>
	);
}

describe('AppLayout', () => {
	describe('Open', () => {
		it('renders correctly', () => {
			const { container } = renderAppLayout({
				isMenuOpen: true,
				openMenu: console.log,
				closeMenu: console.log,
			});
			expect(container).toMatchSnapshot();
		});
		it('renders a valid HTML structure', () => {
			const { container } = renderAppLayout({
				isMenuOpen: true,
				openMenu: console.log,
				closeMenu: console.log,
			});
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
	describe('Closed', () => {
		it('renders a valid HTML structure', () => {
			const { container } = renderAppLayout({
				isMenuOpen: false,
				openMenu: console.log,
				closeMenu: console.log,
			});
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
});
