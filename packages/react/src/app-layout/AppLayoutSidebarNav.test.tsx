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
	describe('when there is a mix of zero and more sub-level items', () => {
		describe('when subLevelVisible is "whenActive"', () => {
			describe('when the active item has no sub-level items', () => {
				test('then no sub-level items should be visible', async () => {
					render(
						<ContextWrapper>
							<AppLayoutSidebarNav
								activePath="/"
								items={NAV_ITEMS}
								subLevelVisible="whenActive"
							/>
						</ContextWrapper>
					);

					const navItems: HTMLAnchorElement[] = await screen.findAllByRole(
						'link'
					);
					const navItemPathnames = navItems.map(
						(item) => new URL(item.href).pathname
					);

					expect(navItemPathnames).toEqual(LEVEL_1_LINKS);
				});
			});

			describe('when the active item is level one and has sub-level items', () => {
				test('then its sub-level items should be visible to one level and no other sub-level items', async () => {
					render(
						<ContextWrapper>
							<AppLayoutSidebarNav
								activePath="/establishments/sydney"
								items={NAV_ITEMS}
								subLevelVisible="whenActive"
							/>
						</ContextWrapper>
					);

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
			});
		});

		describe('when subLevelVisible is "always"', () => {
			describe('when the active item has no sub-level items', () => {
				test('then all sub-level items should be visible', async () => {
					render(
						<ContextWrapper>
							<AppLayoutSidebarNav
								activePath="/"
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
});
