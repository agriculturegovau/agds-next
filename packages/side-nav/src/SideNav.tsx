import { SideNavMenu, SideNavMenuProps } from './SideNavMenu';
import { SideNavTitle } from './SideNavTitle';
import {
	SideNavContent,
	SideNavContentProps,
	SideNavVariantType,
} from './SideNavContent';

type SideNavProps = SideNavMenuProps &
	Omit<SideNavContentProps, 'children'> & {
		variant?: SideNavVariantType;
		menuHeaderLink: string;
		menuHeader: string;
	};

export function SideNav({
	activePath,
	items,
	variant = 'light',
	menuHeaderLink = '#',
	menuHeader,
	...props
}: SideNavProps) {
	return (
		<SideNavContent variant={variant} {...props}>
			<SideNavTitle href={menuHeaderLink} text={menuHeader} />
			<SideNavMenu items={items} activePath={activePath} />
		</SideNavContent>
	);
}
