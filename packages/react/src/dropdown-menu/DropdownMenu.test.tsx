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
					Profile
				</DropdownMenuItem>
				<DropdownMenuItem onSelect={() => console.log('Messages')}>
					Messages
				</DropdownMenuItem>
				<DropdownMenuItem onSelect={() => console.log('Account settings')}>
					Account settings
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

	it('focuses the correct element when opening/closing', async () => {
		renderDropdownMenu();

		const triggerButton = await screen.findByRole('button');

		// Open the dropdown menu
		triggerButton.focus();
		expect(triggerButton).toHaveFocus();
		await userEvent.click(triggerButton);

		// Once the dropdown menu is opened, the menu list should be focused
		const list = await screen.findByRole('menu');
		expect(list).toHaveFocus();

		// When closing the dropdown menu, the the trigger should be focused again
		await userEvent.keyboard('{Escape}');
		expect(triggerButton).toHaveFocus();
	});
});
