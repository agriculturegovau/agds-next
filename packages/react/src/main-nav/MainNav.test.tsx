import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import { render, cleanup } from '../../../../test-utils';
import { DropdownMenuItem, DropdownMenuPanel } from '../dropdown-menu';
import { Avatar } from '../avatar';
import { AvatarIcon } from '../icon';
import { MainNav, MainNavProps } from './MainNav';

expect.extend(toHaveNoViolations);

afterEach(cleanup);

function renderMainNav({
	activePath = '/simple',
	items = [
		{ href: '/', label: 'Home' },
		{ href: '/content', label: 'Content page' },
		{ href: '/form', label: 'Form page' },
		{ href: '/simple', label: 'Simple page' },
	],
	secondaryItems = [
		{
			href: '#sign-in',
			label: 'Sign in',
			endElement: <AvatarIcon color="action" />,
		},
	],
}: Partial<MainNavProps>) {
	return render(
		<MainNav
			activePath={activePath}
			items={items}
			secondaryItems={secondaryItems}
		/>
	);
}

describe('MainNav', () => {
	it('renders correctly', () => {
		const { container } = renderMainNav({});
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderMainNav({});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	describe('Highlights the correct item based on the `activePath`', () => {
		test('matches basic path', () => {
			const { container } = renderMainNav({});
			const currentPage = container.querySelector("[aria-current='page']");
			expect(currentPage).toHaveTextContent('Simple page');
		});

		test('matches path with hash', () => {
			const { container } = renderMainNav({ activePath: '/simple#heading-id' });
			const currentPage = container.querySelector("[aria-current='page']");
			expect(currentPage).toHaveTextContent('Simple page');
		});

		test('matches nested path', () => {
			const { container } = renderMainNav({ activePath: '/simple/sub-path' });
			const currentPage = container.querySelector("[aria-current='page']");
			expect(currentPage).toHaveTextContent('Simple page');
		});
	});

	it('supports a dropdown in secondary items', async () => {
		const { container } = renderMainNav({
			secondaryItems: [
				{
					label: 'Moe Syzlack',
					beforeElement: <Avatar name="Moe Syzlack" size="md" tone="action" />,
					dropdown: (
						<DropdownMenuPanel>
							<DropdownMenuItem>Item 1</DropdownMenuItem>
							<DropdownMenuItem>Item 2</DropdownMenuItem>
							<DropdownMenuItem>Item 3</DropdownMenuItem>
						</DropdownMenuPanel>
					),
				},
			],
		});
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});
});
