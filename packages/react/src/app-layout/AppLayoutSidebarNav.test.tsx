import '@testing-library/jest-dom';
import { ReactNode } from 'react';
import { render, screen } from '../../../../test-utils';
import { AppLayoutContext } from './AppLayoutContext';
import { AppLayoutSidebarNav } from './AppLayoutSidebarNav';
import { navigationItems } from './test-utils';

const NAV_ITEMS = navigationItems('Antfix');
const ALL_LINKS = [
	'/account',
	'/',
	'/establishments',
	'/establishments/canberra',
	'/establishments/sydney',
	'/intelligence',
	'/compliance',
	'/compliance/audit',
	'/compliance/certificates',
	'/help',
];
const LEVEL_1_LINKS = ALL_LINKS.filter(
	(link) => link.match(/\//g)?.length === 1
);
const LEVEL_2_LINKS = ALL_LINKS.filter(
	(link) => link.match(/\//g)?.length === 2
);

const ContextWrapper = ({ children }: { children: ReactNode }) => (
	<AppLayoutContext.Provider
		value={{
			focusMode: false,
			isMobileMenuOpen: true,
			openMobileMenu: console.log,
			closeMobileMenu: console.log,
		}}
	>
		{children}
	</AppLayoutContext.Provider>
);

describe('Given AppLayoutSidebarNav is rendered', () => {
	describe('when subLevelVisible is "whenActive"', () => {
		describe('when the active item has no sub-level items', () => {
			beforeEach(() => {
				render(
					<ContextWrapper>
						<AppLayoutSidebarNav
							activePath="/"
							background="bodyAlt"
							items={NAV_ITEMS}
							subLevelVisible="whenActive"
						/>
					</ContextWrapper>
				);
			});

			test('then no sub-level items should be visible', async () => {
				const navItems: HTMLAnchorElement[] = await screen.findAllByRole(
					'link'
				);
				const navItemPathnames = navItems.map(
					(item) => new URL(item.href).pathname
				);

				expect(navItemPathnames).toEqual(LEVEL_1_LINKS);
			});

			test('then it should be the current page', () => {
				expect(
					screen.getByRole('link', { name: 'Dashboard', current: 'page' })
				).toBeVisible();
			});
		});

		describe('when the active item is level one and has sub-level items', () => {
			beforeEach(() => {
				render(
					<ContextWrapper>
						<AppLayoutSidebarNav
							activePath="/establishments"
							background="bodyAlt"
							items={NAV_ITEMS}
							subLevelVisible="whenActive"
						/>
					</ContextWrapper>
				);
			});

			test('then only its sub-level items should be visible', async () => {
				const levelTwoEstablishmentsItems = LEVEL_2_LINKS.filter((link) =>
					link.startsWith('/establishments')
				);
				const itemHrefs = [
					...LEVEL_1_LINKS.slice(0, 3), // First two from level 1
					...levelTwoEstablishmentsItems, // Level two will be inserted into the order after `/establishments` which is at index 2
					...LEVEL_1_LINKS.slice(3), // Remainder from level 1
				];

				const navItems: HTMLAnchorElement[] = await screen.findAllByRole(
					'link'
				);
				const navItemPathnames = navItems.map(
					(item) => new URL(item.href).pathname
				);

				expect(navItemPathnames).toEqual(itemHrefs);
			});

			test('then it should be the current page', () => {
				expect(
					screen.getByRole('link', {
						name: 'Establishments . Sub-level links below.',
						current: 'page',
					})
				).toBeVisible();
			});
		});

		describe('when the active item is level two', () => {
			let levelTwoActiveContainer: HTMLElement;

			beforeEach(() => {
				const { container } = render(
					<ContextWrapper>
						<AppLayoutSidebarNav
							activePath="/establishments/sydney"
							background="bodyAlt"
							items={NAV_ITEMS}
							subLevelVisible="whenActive"
						/>
					</ContextWrapper>
				);
				levelTwoActiveContainer = container;
			});

			test('then it should be visible along with its sibling sub-level items', async () => {
				const levelTwoEstablishmentsItems = LEVEL_2_LINKS.filter((link) =>
					link.startsWith('/establishments')
				);
				const itemHrefs = [
					...LEVEL_1_LINKS.slice(0, 3), // First two from level 1
					...levelTwoEstablishmentsItems, // Level two will be inserted into the order after `/establishments` which is at index 2
					...LEVEL_1_LINKS.slice(3), // Remainder from level 1
				];

				const navItems: HTMLAnchorElement[] = await screen.findAllByRole(
					'link'
				);
				const navItemPathnames = navItems.map(
					(item) => new URL(item.href).pathname
				);

				expect(navItemPathnames).toEqual(itemHrefs);
			});

			test('then it should be the current page', () => {
				expect(
					screen.getByRole('link', { name: 'Sydney', current: 'page' })
				).toBeVisible();
			});

			test('then styles indicating current page should be applied', () => {
				expect(levelTwoActiveContainer).toMatchSnapshot();
			});
		});
	});

	describe('when subLevelVisible is "always"', () => {
		describe('when the active item has no sub-level items', () => {
			test('then all sub-level items should be visible', async () => {
				render(
					<ContextWrapper>
						<AppLayoutSidebarNav
							activePath="/"
							background="bodyAlt"
							items={NAV_ITEMS}
							subLevelVisible="always"
						/>
					</ContextWrapper>
				);

				const navItems: HTMLAnchorElement[] = await screen.findAllByRole(
					'link'
				);
				const navItemPathnames = navItems.map(
					(item) => new URL(item.href).pathname
				);

				expect(navItemPathnames).toEqual(ALL_LINKS);
			});
		});

		describe('when the active item is level one and has sub-level items', () => {
			test('then all sub-level items should be visible', async () => {
				render(
					<ContextWrapper>
						<AppLayoutSidebarNav
							activePath="/establishments"
							background="bodyAlt"
							items={NAV_ITEMS}
							subLevelVisible="always"
						/>
					</ContextWrapper>
				);

				const navItems: HTMLAnchorElement[] = await screen.findAllByRole(
					'link'
				);
				const navItemPathnames = navItems.map(
					(item) => new URL(item.href).pathname
				);

				expect(navItemPathnames).toEqual(ALL_LINKS);
			});
		});
	});
});
