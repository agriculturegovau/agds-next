import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
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

function renderAppLayout({
	activePath = '/establishments',
	focusMode = false,
}: {
	activePath?: string;
	focusMode?: boolean;
}) {
	return render(
		<AppLayout focusMode={focusMode}>
			<AppLayoutHeader
				id="header"
				href="#"
				logo={<Logo />}
				heading="Export Service"
				subLine="Supporting Australian agricultural exports"
				badgeLabel="Beta"
				accountDetails={{
					href: '/account/preferences',
					name: 'Toto Wolff',
					secondaryText: 'Orange Meat Works',
				}}
			/>
			<AppLayoutSidebar activePath={activePath} items={navigationItems} />
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

expect.extend(toHaveNoViolations);

describe('AppLayout', () => {
	it('renders correctly', () => {
		const { container } = renderAppLayout({});
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderAppLayout({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
	});

	it('should pass axe linting', async () => {
		const { container } = renderAppLayout({});
		expect(await axe(container)).toHaveNoViolations();
	});

	describe('Focus mode', () => {
		it('renders a valid HTML structure', () => {
			const { container } = renderAppLayout({ focusMode: true });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
			});
		});
	});

	describe('Highlights the correct item based on the `activePath`', () => {
		test('matches basic path', () => {
			const { container } = renderAppLayout({});
			const currentPage = container.querySelector("[aria-current='page']");
			expect(currentPage).toHaveTextContent('Establishments');
		});

		test('matches path with hash', () => {
			const { container } = renderAppLayout({
				activePath: '/establishments#heading-id',
			});
			const currentPage = container.querySelector("[aria-current='page']");
			expect(currentPage).toHaveTextContent('Establishments');
		});

		test('matches nested path', () => {
			const { container } = renderAppLayout({
				activePath: '/establishments/sub-path',
			});
			const currentPage = container.querySelector("[aria-current='page']");
			expect(currentPage).toHaveTextContent('Establishments');
		});
	});
});
