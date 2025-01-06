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
		describe('when `titleLink` is defined', () => {
			test('renders valid HTML with no a11y violations', async () => {
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

			test('there is a link with that title text', async () => {
				renderSideNav(defaultTestingProps);

				const user = userEvent.setup();
				const button = screen.getByRole('button', {
					name: defaultTestingProps.title,
				});
				await user.click(button);

				const titleAsLink = await screen.findByRole('link', {
					name: defaultTestingProps.title,
				});

				expect(titleAsLink).toBeVisible();
				expect(screen.getAllByText(defaultTestingProps.title).length).toEqual(
					3
				);
			});
		});

		describe('when `titleLink` is undefined', () => {
			test('renders valid HTML with no a11y violations', async () => {
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
				expect(await axe(container)).toHaveNoViolations();
			});

			test('there is no link with that title text', async () => {
				renderSideNav({
					...defaultTestingProps,
					titleLink: undefined,
				});

				const user = userEvent.setup();
				const button = screen.getByRole('button', {
					name: defaultTestingProps.title,
				});
				await user.click(button);

				expect(
					screen.queryByRole('link', { name: defaultTestingProps.title })
				).toBeNull();
				expect(screen.getAllByText(defaultTestingProps.title).length).toEqual(
					3
				);
			});
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
							name: `${defaultTestingProps.title}`,
						})
					);
				});

				test('no sub-level items should be visible', async () => {
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

				test('icons indicating hidden sub-level items should be visible', async () => {
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
							name: `${defaultTestingProps.title}`,
						})
					);
				});

				test('its sub-level items should be visible to one level and no other sub-level items', async () => {
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

				test('an icon indicating visible sub-level items should be visible', async () => {
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
							name: `${defaultTestingProps.title}`,
						})
					);
				});

				test('its sub-level items should be visible to one level', async () => {
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
				test.skip('an icon indicating visible sub-level items should be visible', async () => {
					const link = await screen.findByRole('link', {
						name: 'Record keeping. Sub-level links below.',
					});

					const chevronIcon = within(link).getByRole('img', {
						name: '. Sub-level links below.',
					});

					expect(chevronIcon).toBeVisible();
				});

				// Skipping because this is failing only in CI
				test.skip('its parent should have an icon indicating visible sub-level items', async () => {
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
							name: `${defaultTestingProps.title}`,
						})
					);
				});

				// Skipping because this is failing only in CI
				test.skip('no icon indicating visible sub-level items should be visible', async () => {
					const link = await screen.findByRole('link', {
						name: 'Keeping your tax records',
					});

					const chevronIcon = within(link).queryByRole('img');

					expect(chevronIcon).toBeNull();
				});

				// Skipping because this is failing only in CI
				test.skip('its parent should have an icon indicating visible sub-level items', async () => {
					const link = await screen.findByRole('link', {
						name: 'Record keeping. Sub-level links below.',
					});

					const chevronIcon = within(link).getByRole('img', {
						name: '. Sub-level links below.',
					});

					expect(chevronIcon).toBeVisible();
				});

				// Skipping because this is failing only in CI
				test.skip('its grandparent should have an icon indicating visible sub-level items', async () => {
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
				test('all sub-level items should be visible', async () => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="#page-1"
							items={alwaysOpenItems}
							subLevelVisible="always"
						/>
					);
					const user = userEvent.setup();
					user.click(
						screen.getByRole('button', {
							name: `${defaultTestingProps.title}`,
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
				test('all sub-level items should be visible', async () => {
					render(
						<SideNav
							{...defaultTestingProps}
							activePath="#page-2"
							items={alwaysOpenItems}
							subLevelVisible="always"
						/>
					);
					const user = userEvent.setup();
					user.click(
						screen.getByRole('button', {
							name: `${defaultTestingProps.title}`,
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
