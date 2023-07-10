import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { render, cleanup, screen } from '../../../../test-utils';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuItem,
	DropdownMenuList,
} from './index';

afterEach(cleanup);

function renderDropdownMenu() {
	return render(
		<DropdownMenu>
			<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
			<DropdownMenuList>
				<DropdownMenuItem onSelect={() => console.log('Profile')}>
					Item 1
				</DropdownMenuItem>
				<DropdownMenuItem onSelect={() => console.log('Messages')}>
					Item 2
				</DropdownMenuItem>
				<DropdownMenuItem onSelect={() => console.log('Account settings')}>
					Item 3
				</DropdownMenuItem>
			</DropdownMenuList>
		</DropdownMenu>
	);
}

describe('DropdownMenu', () => {
	it('renders correctly', () => {
		const { container } = renderDropdownMenu();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderDropdownMenu();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
				'no-inline-style': 'off',
			},
		});
	});

	it('renders the correct basic aria attributes', async () => {
		renderDropdownMenu();

		const menuButton = await screen.findByRole('button');
		const menuList = await screen.findByRole('menu', { hidden: true });

		expect(menuButton).toHaveAttribute('aria-haspopup', 'true');
		expect(menuButton).toHaveAttribute('aria-expanded', 'false');
		expect(menuButton).toHaveAttribute('aria-controls', menuList.id);

		expect(menuList).toHaveAttribute('role', 'menu');
		expect(menuList).toHaveAttribute('tabIndex', '-1');
		expect(menuList).toHaveAttribute('aria-labelledby', menuButton.id);

		// Open the dropdown menu
		await userEvent.click(menuButton);

		expect(menuButton).toHaveAttribute('aria-expanded', 'true');

		// Close the dropdown menu
		await userEvent.keyboard('{Escape}');

		expect(menuButton).toHaveAttribute('aria-expanded', 'false');
	});

	it('focuses the correct element when opening/closing', async () => {
		renderDropdownMenu();

		const menuButton = await screen.findByRole('button');

		// Open the dropdown menu
		await userEvent.click(menuButton);

		// Once the dropdown menu is opened, the menu list should be focused
		const list = await screen.findByRole('menu');
		expect(list).toHaveFocus();

		// When closing the dropdown menu, the the trigger should be focused again
		await userEvent.keyboard('{Escape}');
		expect(menuButton).toHaveFocus();
	});

	it('menu items respond to the `onSelect` prop', async () => {
		const onSelect1 = jest.fn();
		const onSelect2 = jest.fn();
		const onSelect3 = jest.fn();
		render(
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuItem onSelect={onSelect1}>Item 1</DropdownMenuItem>
					<DropdownMenuItem onSelect={onSelect2}>Item 2</DropdownMenuItem>
					<DropdownMenuItem onSelect={onSelect3}>Item 3</DropdownMenuItem>
				</DropdownMenuList>
			</DropdownMenu>
		);

		const menuButton = await screen.findByRole('button');

		// Open the dropdown menu
		menuButton.focus();
		expect(menuButton).toHaveFocus();
		await userEvent.click(menuButton);

		// Once the dropdown menu is opened, the menu list should be focused
		const listItem1 = await screen.findByText('Item 1');
		await userEvent.click(listItem1);

		// When closing the dropdown menu, the the trigger should be focused again
		expect(menuButton).toHaveFocus();

		expect(onSelect1).toHaveBeenCalledTimes(1);
		expect(onSelect2).toHaveBeenCalledTimes(0);
		expect(onSelect3).toHaveBeenCalledTimes(0);
	});
});
