import '@testing-library/jest-dom';
import 'html-validate/jest';
import userEvent from '@testing-library/user-event';
import { Fragment } from 'react';
import { render, cleanup, screen } from '../../../../test-utils';
import { AvatarIcon, EmailIcon, SettingsIcon } from '../icon';
import { NotificationBadge } from '../notification-badge';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuDivider,
	DropdownMenuItem,
	DropdownMenuItemLink,
	DropdownMenuList,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
} from './index';

afterEach(cleanup);

function renderBasicDropdownMenu() {
	return render(
		<DropdownMenu>
			<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
			<DropdownMenuList>
				<DropdownMenuItem>Item 1</DropdownMenuItem>
				<DropdownMenuItem>Item 2</DropdownMenuItem>
				<DropdownMenuItem>Item 3</DropdownMenuItem>
			</DropdownMenuList>
		</DropdownMenu>
	);
}

describe('DropdownMenu', () => {
	it('renders correctly', () => {
		const { container } = renderBasicDropdownMenu();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderBasicDropdownMenu();
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
		renderBasicDropdownMenu();

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
		renderBasicDropdownMenu();

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

	it('up/down keys control `active-activedescendant` correctly', async () => {
		render(
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuItem id="item-1">Item 1</DropdownMenuItem>
					<DropdownMenuItem id="item-2">Item 2</DropdownMenuItem>
					<DropdownMenuItem id="item-3"> Item 3</DropdownMenuItem>
				</DropdownMenuList>
			</DropdownMenu>
		);

		const menuButton = await screen.findByRole('button');
		const menuList = await screen.findByRole('menu', { hidden: true });

		// Open the dropdown menu
		await userEvent.click(menuButton);

		// aria-activedescendant should be empty
		expect(menuList).not.toHaveAttribute('aria-activedescendant');

		// Pressing the down key should activate the first descendant
		await userEvent.keyboard('[ArrowDown]');
		expect(menuList).toHaveAttribute('aria-activedescendant', 'item-1');

		// Pressing the down key should activate the next menu item
		await userEvent.keyboard('[ArrowDown]');
		expect(menuList).toHaveAttribute('aria-activedescendant', 'item-2');

		// Pressing the down key should activate the previous menu item
		await userEvent.keyboard('[ArrowUp]');
		expect(menuList).toHaveAttribute('aria-activedescendant', 'item-1');

		await userEvent.keyboard('[ArrowDown]');
		await userEvent.keyboard('[ArrowDown]');
		expect(menuList).toHaveAttribute('aria-activedescendant', 'item-3');

		// Pressing the down key at the last menu item should activate the first menu item
		await userEvent.keyboard('[ArrowDown]');
		expect(menuList).toHaveAttribute('aria-activedescendant', 'item-1');

		// Pressing the up key at the first menu item should activate the last menu item
		await userEvent.keyboard('[ArrowUp]');
		expect(menuList).toHaveAttribute('aria-activedescendant', 'item-3');
	});

	it('home/end keys control `active-activedescendant` correctly', async () => {
		render(
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuItem id="item-1">Item 1</DropdownMenuItem>
					<DropdownMenuItem id="item-2">Item 2</DropdownMenuItem>
					<DropdownMenuItem id="item-3"> Item 3</DropdownMenuItem>
				</DropdownMenuList>
			</DropdownMenu>
		);

		const menuButton = await screen.findByRole('button');
		const menuList = await screen.findByRole('menu', { hidden: true });

		// Open the dropdown menu
		await userEvent.click(menuButton);

		// aria-activedescendant should be empty
		expect(menuList).not.toHaveAttribute('aria-activedescendant');

		// Pressing the down key should activate the first descendant
		await userEvent.keyboard('[Home]');
		expect(menuList).toHaveAttribute('aria-activedescendant', 'item-1');

		// Pressing the down key should activate the next menu item
		await userEvent.keyboard('[End]');
		expect(menuList).toHaveAttribute('aria-activedescendant', 'item-3');
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
		const firstListItem = await screen.findByText('Item 1');
		await userEvent.click(firstListItem);

		// When closing the dropdown menu, the the trigger should be focused again
		expect(menuButton).toHaveFocus();

		expect(onSelect1).toHaveBeenCalledTimes(1);
		expect(onSelect2).toHaveBeenCalledTimes(0);
		expect(onSelect3).toHaveBeenCalledTimes(0);
	});

	it('changes the button text based on render props', async () => {
		render(
			<DropdownMenu>
				{({ isMenuOpen }) => (
					<Fragment>
						<DropdownMenuButton>
							{isMenuOpen ? 'Close' : 'Open'}
						</DropdownMenuButton>
						<DropdownMenuList>
							<DropdownMenuItem>Item 1</DropdownMenuItem>
							<DropdownMenuItem>Item 2</DropdownMenuItem>
						</DropdownMenuList>
					</Fragment>
				)}
			</DropdownMenu>
		);

		const menuButton = await screen.findByRole('button');

		expect(menuButton).toHaveTextContent('Open');

		// Open the dropdown menu
		await userEvent.click(menuButton);

		expect(menuButton).toHaveTextContent('Close');
	});
});

// Decorative DropdownMenu

function renderDecorativeDropdownMenu() {
	return render(
		<DropdownMenu>
			{({ isMenuOpen }) => (
				<Fragment>
					<DropdownMenuButton>
						{isMenuOpen ? 'Close' : 'Open'}
					</DropdownMenuButton>
					<DropdownMenuList>
						<DropdownMenuItem icon={AvatarIcon}>Profile</DropdownMenuItem>
						<DropdownMenuItem
							icon={EmailIcon}
							endElement={
								<NotificationBadge value={100} max={99} tone="action" />
							}
						>
							Messages
						</DropdownMenuItem>
						<DropdownMenuDivider />
						<DropdownMenuItem icon={SettingsIcon}>
							Account settings
						</DropdownMenuItem>
					</DropdownMenuList>
				</Fragment>
			)}
		</DropdownMenu>
	);
}

describe('DropdownMenu Decorative', () => {
	it('renders correctly', () => {
		const { container } = renderDecorativeDropdownMenu();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderDecorativeDropdownMenu();
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

// DropdownMenu Links

function renderDropdownMenuLinks() {
	return render(
		<DropdownMenu>
			<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
			<DropdownMenuList>
				<DropdownMenuItemLink href="/about">About</DropdownMenuItemLink>
				<DropdownMenuItemLink href="/contact">Contact</DropdownMenuItemLink>
			</DropdownMenuList>
		</DropdownMenu>
	);
}

describe('DropdownMenu Links', () => {
	it('renders correctly', async () => {
		const { container } = renderDropdownMenuLinks();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderDropdownMenuLinks();
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				// react 18s `useId` break this rule
				'valid-id': 'off',
				'no-inline-style': 'off',
			},
		});
	});

	it('basic attributes render correctly', async () => {
		renderDropdownMenuLinks();

		const [firstListItem, secondListItem] = await screen.findAllByRole(
			'menuitem',
			{ hidden: true }
		);

		expect(firstListItem).toBeInTheDocument();
		expect(firstListItem).toHaveAttribute('href', '/about');
		expect(firstListItem).toHaveAccessibleName('About');

		expect(secondListItem).toBeInTheDocument();
		expect(secondListItem).toHaveAttribute('href', '/contact');
		expect(secondListItem).toHaveAccessibleName('Contact');
	});

	it('links that open in a new tab render correctly', async () => {
		render(
			<DropdownMenu>
				<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
				<DropdownMenuList>
					<DropdownMenuItemLink href="/about" target="_blank" rel="noopener">
						About
					</DropdownMenuItemLink>
					<DropdownMenuItemLink href="/contact" target="_blank" rel="noopener">
						Contact
					</DropdownMenuItemLink>
				</DropdownMenuList>
			</DropdownMenu>
		);

		const [firstListItem, secondListItem] = await screen.findAllByRole(
			'menuitem',
			{ hidden: true }
		);

		expect(firstListItem).toBeInTheDocument();
		expect(firstListItem).toHaveAttribute('href', '/about');
		expect(firstListItem).toHaveAttribute('target', '_blank');
		expect(firstListItem).toHaveAttribute('rel', 'noopener');
		expect(firstListItem).toHaveAccessibleName('About , opens in a new tab');

		expect(secondListItem).toBeInTheDocument();
		expect(secondListItem).toHaveAttribute('href', '/contact');
		expect(firstListItem).toHaveAttribute('target', '_blank');
		expect(firstListItem).toHaveAttribute('rel', 'noopener');
		expect(secondListItem).toHaveAccessibleName('Contact , opens in a new tab');
	});
});

// DropdownMenu Radio Group

function renderDropdownMenuRadio() {
	return render(
		<DropdownMenu>
			<DropdownMenuButton>Open dropdown menu</DropdownMenuButton>
			<DropdownMenuList>
				<DropdownMenuRadioGroup label="Businesses">
					<DropdownMenuRadioItem
						id="item-1"
						checked={false}
						secondaryText="Sydney"
					>
						Antfix
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem
						id="item-2"
						checked={true}
						secondaryText="Brisbane"
					>
						Produce Fresh
					</DropdownMenuRadioItem>
					<DropdownMenuRadioItem
						id="item-3"
						checked={false}
						secondaryText="Canberra"
					>
						Organic Co
					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuList>
		</DropdownMenu>
	);
}

describe('DropdownMenu Radio Group', () => {
	it('renders correctly', async () => {
		const { container } = renderDropdownMenuRadio();
		expect(container).toMatchSnapshot();
	});

	it('renders a valid HTML structure', () => {
		const { container } = renderDropdownMenuRadio();
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
		renderDropdownMenuRadio();

		const [firstListItem, secondListItem, thirdListItem] =
			await screen.findAllByRole('menuitemradio', { hidden: true });

		expect(firstListItem).toBeInTheDocument();
		expect(firstListItem).toHaveAttribute('aria-checked', 'false');
		expect(firstListItem).toHaveAccessibleName('Antfix Sydney');

		expect(secondListItem).toBeInTheDocument();
		expect(secondListItem).toHaveAttribute('aria-checked', 'true');
		expect(secondListItem).toHaveAccessibleName('Produce Fresh Brisbane');

		expect(thirdListItem).toBeInTheDocument();
		expect(thirdListItem).toHaveAttribute('aria-checked', 'false');
		expect(thirdListItem).toHaveAccessibleName('Organic Co Canberra');
	});
});
