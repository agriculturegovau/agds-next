import '@testing-library/jest-dom';
import 'html-validate/jest';
import { axe, toHaveNoViolations } from 'jest-axe';
import userEvent from '@testing-library/user-event';
import { render, screen, within } from '../../../../test-utils';
import { SideNav, SideNavProps } from './SideNav';
import { alwaysOpenItems, defaultTestingProps } from './test-utils';

expect.extend(toHaveNoViolations);

function renderSideNav(props: SideNavProps) {
	return render(<SideNav {...props} />);
}

describe('SideNav', () => {
	it('renders correctly', () => {
		const { container } = renderSideNav(defaultTestingProps);
		expect(container).toMatchSnapshot();
	});

	it('renders valid HTML with no a11y violations', async () => {
		const { container } = renderSideNav(defaultTestingProps);
		expect(container).toHTMLValidate({
			extends: ['html-validate:recommended'],
			rules: {
				'no-inline-style': 'off',
				// react 18s `useId` break this rule
				'valid-id': 'off',
			},
		});
		expect(await axe(container)).toHaveNoViolations();
	});

	it('nav is accessibly labelled', () => {
		// Ensure that the nav is labelled with the title
		renderSideNav(defaultTestingProps);
		const el = screen.getByRole('navigation', { hidden: true });
		expect(el).toHaveAccessibleName(defaultTestingProps.title);
	});

	describe('renders the title correctly', () => {
		test('with link', () => {
			renderSideNav(defaultTestingProps);
			const el = screen.getByText(defaultTestingProps.title);
			expect(el.tagName).toBe('A');
			expect(el).toHaveAttribute('href', defaultTestingProps.titleLink);
			expect(el).toHaveAccessibleName(defaultTestingProps.title);
		});

		test('without link', () => {
			renderSideNav({ ...defaultTestingProps, titleLink: undefined });
			const el = screen.getByText(defaultTestingProps.title);
			expect(el.tagName).toBe('H2');
			expect(el).toHaveAccessibleName(defaultTestingProps.title);
		});
	});

	describe('when nestedItemsVariant is "openOnNav"', () => {
		describe('when there is a mix of zero and more nested items', () => {
			describe('when the active item has no nested items', () => {
				beforeEach(() => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="/welcome"
							nestedItemsVariant="openOnNav"
						/>
					);

					const user = userEvent.setup();

					user.click(screen.getByRole('button', { name: 'In this section' }));
				});

				test('then no nested items should be visible', async () => {
					const levelOneItemHrefs = defaultTestingProps.items.map(
						({ href }) => href
					);

					const navItems: HTMLAnchorElement[] = await screen.findAllByRole(
						'link'
					);
					const navItemPathnames = navItems
						.map((item) => new URL(item.href).pathname)
						.filter((href) => href !== '/'); // Remove the heading's link

					expect(navItemPathnames).toEqual(levelOneItemHrefs);
				});

				test('then icons indicating hidden nested items should be visible', async () => {
					expect(
						await screen.findAllByRole('img', {
							name: '(related links available after opening)',
						})
					).toHaveLength(2);
				});
			});

			describe('when the active item is level one and has nested items', () => {
				beforeEach(() => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="/in-detail"
							nestedItemsVariant="openOnNav"
						/>
					);

					const user = userEvent.setup();

					user.click(screen.getByRole('button', { name: 'In this section' }));
				});

				test('then its nested items should be visible to one level and no other nested items', async () => {
					const levelOneItems = defaultTestingProps.items;
					const levelTwoInDetailItems =
						defaultTestingProps.items.find(({ href }) => href === '/in-detail')
							?.items || [];
					const itemHrefs = [...levelOneItems, ...levelTwoInDetailItems].map(
						({ href }) => href
					);

					const navItems: HTMLAnchorElement[] = await screen.findAllByRole(
						'link'
					);
					const navItemPathnames = navItems
						.map((item) => new URL(item.href).pathname)
						.filter((href) => href !== '/'); // Remove the heading's link

					expect(navItemPathnames).toEqual(itemHrefs);
				});

				test('then an icon indicating visible nested items should be visible', async () => {
					expect(
						await screen.findByRole('img', {
							name: '(related links below)',
						})
					).toBeVisible();
				});
			});

			describe('when the active item is level two and has nested items', () => {
				beforeEach(() => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="/in-detail/record-keeping"
							nestedItemsVariant="openOnNav"
						/>
					);

					const user = userEvent.setup();

					user.click(screen.getByRole('button', { name: 'In this section' }));
				});

				test('then its nested items should be visible to one level', async () => {
					const levelOneItems = defaultTestingProps.items;
					const levelTwoInDetailItems =
						defaultTestingProps.items.find(({ href }) => href === '/in-detail')
							?.items || [];
					const levelThreeInDetailItems =
						levelTwoInDetailItems.find(
							({ href }) => href === '/in-detail/record-keeping'
						)?.items || [];

					const itemHrefs = [
						...levelOneItems,
						levelTwoInDetailItems[0], // Take the active level two item...
						...levelThreeInDetailItems, // ...And insert the level three children that relate to this item...
						...levelTwoInDetailItems.slice(1), // ...And finally add the rest of the level two items.
					].map(({ href }) => href);

					const navItems: HTMLAnchorElement[] = await screen.findAllByRole(
						'link'
					);
					const navItemPathnames = navItems
						.map((item) => new URL(item.href).pathname)
						.filter((href) => href !== '/'); // Remove the heading's link

					expect(navItemPathnames).toEqual(itemHrefs);
				});

				// Skipping because this is failing only in CI
				test.skip('then an icon indicating visible nested items should be visible', async () => {
					const link = await screen.findByRole('link', {
						name: 'Record keeping (related links below)',
					});

					const chevronIcon = within(link).getByRole('img', {
						name: '(related links below)',
					});

					expect(chevronIcon).toBeVisible();
				});

				// Skipping because this is failing only in CI
				test.skip('then its parent should have an icon indicating visible nested items', async () => {
					const link = await screen.findByRole('link', {
						name: 'In detail (related links below)',
					});

					const chevronIcon = within(link).getByRole('img', {
						name: '(related links below)',
					});

					expect(chevronIcon).toBeVisible();
				});
			});

			describe('when the active item is level three and has no nested items', () => {
				beforeEach(() => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="/in-detail/record-keeping/tax"
							nestedItemsVariant="openOnNav"
						/>
					);

					const user = userEvent.setup();

					user.click(screen.getByRole('button', { name: 'In this section' }));
				});

				// Skipping because this is failing only in CI
				test.skip('then no icon indicating visible nested items should be visible', async () => {
					const link = await screen.findByRole('link', {
						name: 'Keeping your tax records',
					});

					const chevronIcon = within(link).queryByRole('img');

					expect(chevronIcon).toBeNull();
				});

				// Skipping because this is failing only in CI
				test.skip('then its parent should have an icon indicating visible nested items', async () => {
					const link = await screen.findByRole('link', {
						name: 'Record keeping (related links below)',
					});

					const chevronIcon = within(link).getByRole('img', {
						name: '(related links below)',
					});

					expect(chevronIcon).toBeVisible();
				});

				// Skipping because this is failing only in CI
				test.skip('then its grandparent should have an icon indicating visible nested items', async () => {
					const link = await screen.findByRole('link', {
						name: 'In detail (related links below)',
					});

					const chevronIcon = within(link).getByRole('img', {
						name: '(related links below)',
					});

					expect(chevronIcon).toBeVisible();
				});
			});
		});

		describe('when nestedItemsVariant is "alwaysOpen"', () => {
			describe('when the active item has no nested items', () => {
				test('then all nested items should be visible', async () => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="#page-1"
							nestedItemsVariant="alwaysOpen"
							items={alwaysOpenItems}
						/>
					);
					const user = userEvent.setup();
					user.click(screen.getByRole('button', { name: 'In this section' }));

					const allItemHrefs = [
						'#page-1',
						'#page-2',
						'#next-page/page-2-1',
						'#next-page/page-2-2',
					];

					const navItems: HTMLAnchorElement[] = await screen.findAllByRole(
						'link'
					);
					const navItemPathnames = navItems
						.map((item) => new URL(item.href).hash)
						.filter(Boolean); // Remove the heading's link

					expect(navItemPathnames).toEqual(allItemHrefs);
				});
			});

			describe('when the active item is level one and has nested items', () => {
				test('then all nested items should be visible', async () => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="#page-2"
							nestedItemsVariant="alwaysOpen"
							items={alwaysOpenItems}
						/>
					);
					const user = userEvent.setup();
					user.click(screen.getByRole('button', { name: 'In this section' }));

					const allItemHrefs = [
						'#page-1',
						'#page-2',
						'#next-page/page-2-1',
						'#next-page/page-2-2',
					];

					const navItems: HTMLAnchorElement[] = await screen.findAllByRole(
						'link'
					);
					const navItemPathnames = navItems
						.map((item) => new URL(item.href).hash)
						.filter(Boolean); // Remove the heading's link

					expect(navItemPathnames).toEqual(allItemHrefs);
				});
			});
		});
	});
});
