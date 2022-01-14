import { ReactNode } from 'react';
import { LinkList } from '@ag.ds-next/link-list';
import { sideNavLinkListStyles } from './styles';

export type SideNavMenuItemType = {
	href: string;
	label: string;
	active?: boolean;
	children?: SideNavMenuItemType;
};

type SideNavMenuProps = {
	activePath: string;
	items: SideNavMenuItemType[];
	linkComponent: ReactNode;
};

/**
 * A menu inside the AUsideNav
 *
 * @param  {array}  items            - The links in an array containing text, location and active status
 * @param  {string} linkComponent    - The component used for the link
 */
export const SideNavMenu = ({
	activePath,
	items,
	linkComponent,
}: SideNavMenuProps) => {
	const bestMatch = findBestMatch(items, activePath);

	// Recursively re generate the menu with children as necessary
	const GenerateMenu = (items: SideNavMenuItemType[]) => {
		const menu = items.map((item) => {
			const link = {
				link: item.active ? '' : item.href,
				label: item.active ? <span>{item.label}</span> : item.label,
				li: {
					className: item.active ? 'active' : '',
				},
			};

			// If it has children create a menu again
			if (item.children) {
				link.children = (
					<LinkList
						links={GenerateMenu(item.children)}
						css={sideNavLinkListStyles}
						linkComponent={item.linkComponent}
					/>
				);
			}

			// return the link, maybe with children
			return link;
		});

		return menu;
	};

	// Create the menu with children
	return (
		<LinkList
			links={GenerateMenu(items)}
			css={sideNavLinkListStyles}
			// linkComponent={linkComponent}
		/>
	);
};

function findBestMatch(items: { link: string }[], activePath?: string) {
	if (!activePath) return '';
	let bestMatch = '';

	for (const link of items) {
		if (link.link === activePath) return link.link;
		if (
			activePath?.startsWith(link.link) &&
			link.link.length > bestMatch.length
		) {
			bestMatch = link.link;
		}
	}

	return bestMatch;
}
