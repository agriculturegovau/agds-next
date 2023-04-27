import '@testing-library/jest-dom';
import 'html-validate/jest';
import { cleanup, render } from '../../../../test-utils';
import { Text } from '../text';
import { LinkList } from '../link-list';
import { tokens } from '../core';
import { Logo } from '../ag-branding';
import { navigationItems } from './test-utils';
import {
	AppLayout,
	AppLayoutHeader,
	AppLayoutSidebar,
	AppLayoutContent,
	AppLayoutFooter,
	AppLayoutFooterDivider,
} from './index';

afterEach(cleanup);

function renderAppLayout({ focusMode }: { focusMode: boolean }) {
	return render(
		<AppLayout focusMode={focusMode}>
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
			<AppLayoutSidebar activePath="#dashboard" items={navigationItems} />
			<AppLayoutContent>
				<main
					id="main-content"
					tabIndex={-1}
					css={{ '&:focus': { outline: 'none' } }}
				>
					<p>Page content</p>
				</main>
				<AppLayoutFooter>
					<nav aria-label="footer">
						<LinkList links={[{ label: 'Home', href: '/' }]} horizontal />
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
	it('renders correctly', () => {
		const { container } = renderAppLayout({ focusMode: false });
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderAppLayout({ focusMode: false });
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});

	describe('Focus mode', () => {
		it('renders a valid HTML structure', () => {
			const { container } = renderAppLayout({ focusMode: true });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
		});
	});
});
