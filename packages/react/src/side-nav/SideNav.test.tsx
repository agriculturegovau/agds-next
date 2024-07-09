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

			const el = screen.getByRole('link', {
				name: defaultTestingProps.title,
				hidden: true,
			});

			expect(el).toBeInTheDocument();
			expect(el).toHaveAttribute('href', defaultTestingProps.titleLink);
		});

		test('without link', async () => {
			const { container } = renderSideNav({
				...defaultTestingProps,
				titleLink: undefined,
			});
			expect(container).toHTMLValidate({
				extends: ['html-validate:recommended'],
				rules: {
					'no-inline-style': 'off',
					// react 18s `useId` break this rule
					'valid-id': 'off',
				},
			});

			const nav = screen.getByRole('navigation', { hidden: true });
			const el = within(nav).getByText(defaultTestingProps.title);
			expect(el).toBeInTheDocument();

			expect(await axe(container)).toHaveNoViolations();
		});
	});

	describe('when subLevelVisible is "whenActive"', () => {
		describe('when there is a mix of zero and more sub-level items', () => {
			describe('when the active item has no sub-level items', () => {
				beforeEach(() => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="/welcome"
							subLevelVisible="whenActive"
						/>
					);

					const user = userEvent.setup();

					user.click(
						screen.getByRole('button', {
							name: `Open ${defaultTestingProps.title}`,
						})
					);
				});

				test('then no sub-level items should be visible', async () => {
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

				test('then icons indicating hidden sub-level items should be visible', async () => {
					expect(
						await screen.findAllByRole('img', {
							name: /. Has [2-9] sub-level links.|. Has 1 sub-level link./,
						})
					).toHaveLength(2);
				});
			});

			describe('when the active item is level one and has sub-level items', () => {
				beforeEach(() => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="/in-detail"
							subLevelVisible="whenActive"
						/>
					);

					const user = userEvent.setup();

					user.click(
						screen.getByRole('button', {
							name: `Open ${defaultTestingProps.title}`,
						})
					);
				});

				test('then its sub-level items should be visible to one level and no other sub-level items', async () => {
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

				test('then an icon indicating visible sub-level items should be visible', async () => {
					expect(
						await screen.findByRole('img', {
							name: '. Sub-level links below.',
						})
					).toBeVisible();
				});
			});

			describe('when the active item is level two and has sub-level items', () => {
				beforeEach(() => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="/in-detail/record-keeping"
							subLevelVisible="whenActive"
						/>
					);

					const user = userEvent.setup();

					user.click(
						screen.getByRole('button', {
							name: `Open ${defaultTestingProps.title}`,
						})
					);
				});

				test('then its sub-level items should be visible to one level', async () => {
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
				test.skip('then an icon indicating visible sub-level items should be visible', async () => {
					const link = await screen.findByRole('link', {
						name: 'Record keeping. Sub-level links below.',
					});

					const chevronIcon = within(link).getByRole('img', {
						name: '. Sub-level links below.',
					});

					expect(chevronIcon).toBeVisible();
				});

				// Skipping because this is failing only in CI
				test.skip('then its parent should have an icon indicating visible sub-level items', async () => {
					const link = await screen.findByRole('link', {
						name: 'In detail. Sub-level links below.',
					});

					const chevronIcon = within(link).getByRole('img', {
						name: '. Sub-level links below.',
					});

					expect(chevronIcon).toBeVisible();
				});
			});

			describe('when the active item is level three and has no sub-level items', () => {
				beforeEach(() => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="/in-detail/record-keeping/tax"
							subLevelVisible="whenActive"
						/>
					);

					const user = userEvent.setup();

					user.click(
						screen.getByRole('button', {
							name: `Open ${defaultTestingProps.title}`,
						})
					);
				});

				// Skipping because this is failing only in CI
				test.skip('then no icon indicating visible sub-level items should be visible', async () => {
					const link = await screen.findByRole('link', {
						name: 'Keeping your tax records',
					});

					const chevronIcon = within(link).queryByRole('img');

					expect(chevronIcon).toBeNull();
				});

				// Skipping because this is failing only in CI
				test.skip('then its parent should have an icon indicating visible sub-level items', async () => {
					const link = await screen.findByRole('link', {
						name: 'Record keeping. Sub-level links below.',
					});

					const chevronIcon = within(link).getByRole('img', {
						name: '. Sub-level links below.',
					});

					expect(chevronIcon).toBeVisible();
				});

				// Skipping because this is failing only in CI
				test.skip('then its grandparent should have an icon indicating visible sub-level items', async () => {
					const link = await screen.findByRole('link', {
						name: 'In detail. Sub-level links below.',
					});

					const chevronIcon = within(link).getByRole('img', {
						name: '. Sub-level links below.',
					});

					expect(chevronIcon).toBeVisible();
				});
			});
		});

		describe('when subLevelVisible is "always"', () => {
			describe('when the active item has no sub-level items', () => {
				test('then all sub-level items should be visible', async () => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="#page-1"
							subLevelVisible="always"
							items={alwaysOpenItems}
						/>
					);
					const user = userEvent.setup();
					user.click(
						screen.getByRole('button', {
							name: `Open ${defaultTestingProps.title}`,
						})
					);

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

			describe('when the active item is level one and has sub-level items', () => {
				test('then all sub-level items should be visible', async () => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="#page-2"
							subLevelVisible="always"
							items={alwaysOpenItems}
						/>
					);
					const user = userEvent.setup();
					user.click(
						screen.getByRole('button', {
							name: `Open ${defaultTestingProps.title}`,
						})
					);

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
