import { SideNavLink } from './SideNavLink';
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
			const link = {
				href: item.active ? '' : item.href,
				label: item.active ? <span>{item.label}</span> : item.label,
				li: {
					className: item.active ? 'active' : '',
				},
			};

			// If it has children create a menu again
			if (item.children) {
				link.children = (
					<SideNavLinkList
						links={GenerateMenu(item.children)}
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
	links: { href: string; label: string }[];
	inline?: boolean;
}) => {
	return (
		<SideNavLinkGroup {...props}>
			{links.map((props, index) => (
				<SideNavLink
					active={props.href === activePath}
					key={index}
					{...props}
				/>
			))}
		</SideNavLinkGroup>
	);
};
