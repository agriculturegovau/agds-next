import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { cleanup, render } from '../../../../test-utils';
import { Text } from '../text';
import { LinkList } from '../link-list';
import { tokens } from '../core';
import { Logo } from '../ag-branding';
import {
	navigationItems,
	ExampleAccountDropdown,
	exampleData,
} from './test-utils';
import {
	AppLayout,
	AppLayoutHeader,
	AppLayoutSidebar,
	AppLayoutContent,
	AppLayoutFooter,
	AppLayoutFooterDivider,
} from './index';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderAppLayout({
	activePath = '/establishments',
	focusMode = false,
}: {
	activePath?: string;
	focusMode?: boolean;
}) {
	const businessList = exampleData.businessNames.medium;
	const businessName = exampleData.businessNames.medium[0];
	return render(
		<AppLayout focusMode={focusMode}>
			<AppLayoutHeader
				accountDetails={{
					name: exampleData.userNames.regular,
					secondaryText: 'My account',
					dropdown: (
						<ExampleAccountDropdown
							businesses={businessList}
							onBusinessChange={jest.fn()}
							selectedBusinessName={businessName}
						/>
					),
				}}
				badgeLabel="Beta"
				heading="Export Service"
				href="#"
				id="header"
				logo={<Logo />}
				subLine="Supporting Australian agricultural exports"
			/>
			<AppLayoutSidebar
				activePath={activePath}
				items={navigationItems(businessName)}
			/>
			<AppLayoutContent>
				<main
					css={{ '&:focus': { outline: 'none' } }}
					id="main-content"
					tabIndex={-1}
				>
					<p>Page content</p>
				</main>
				<AppLayoutFooter>
					<nav aria-label="footer">
						<LinkList horizontal links={[{ label: 'Home', href: '/' }]} />
					</nav>
					<AppLayoutFooterDivider />
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						We acknowledge the traditional owners of country throughout
						Australia and recognise their continuing connection to land, waters
						and culture. We pay our respects to their Elders past, present and
						emerging.
					</Text>
					<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
						&copy; 2024 Department of Agriculture, Fisheries and Forestry
					</Text>
				</AppLayoutFooter>
			</AppLayoutContent>
		</AppLayout>
	);
}

describe('AppLayout', () => {
	it('renders correctly', () => {
		const { container } = renderAppLayout({});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderAppLayout({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
				'no-inline-style': 'off',
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	describe('Focus mode', () => {
		it('renders valid HTML with no a11y violations', async () => {
			const { container } = renderAppLayout({ focusMode: true });
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					// react 18s `useId` break this rule
					'valid-id': 'off',
					'no-inline-style': 'off',
				},
			});
			expect(await axe(container)).toHaveNoViolations();
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
