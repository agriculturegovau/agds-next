import { SideNavLink, SideNavLinkType } from './SideNavLink';
import { SideNavLinkGroup } from './SideNavLinkGroup';
import { findBestMatch } from './utils';

type SideNavMenuItemType = {
	href: string;
	label: string;
	active?: boolean;
	children?: SideNavMenuItemType[];
};

export type SideNavMenuProps = {
	activePath: string;
	items: SideNavMenuItemType[];
};

export const SideNavMenu = ({ activePath, items }: SideNavMenuProps) => {
	const bestMatch = findBestMatch(items, activePath);

	// Recursively re generate the menu with children as necessary
	const generateMenu = (items: SideNavMenuItemType[]) => {
		const menu = items.map((item) => {
			const link: SideNavLinkType = {
				href: item.active ? '' : item.href,
				label: item.active ? <span>{item.label}</span> : item.label,
			};

			// If it has children create a menu again
			if (item.children) {
				const bestMatch = findBestMatch(item.children, activePath);

				link.children = (
					<SideNavLinkList
						links={generateMenu(item.children)}
						activePath={bestMatch}
					/>
				);
			}

			// return the link, maybe with children
			return link;
		});

		return menu;
	};

	const links = generateMenu(items);

	// Create the menu with children
	return <SideNavLinkList links={links} activePath={bestMatch} />;
};

export const SideNavLinkList = ({
	activePath,
	links,
	...props
}: {
	activePath?: string;
	links: SideNavLinkType[];
}) => {
	return (
		<SideNavLinkGroup {...props}>
			{links.map((link, index) => (
				<SideNavLink active={link.href === activePath} key={index} {...link} />
			))}
		</SideNavLinkGroup>
	);
};
