import { Fragment, ReactNode } from 'react';
import {
	DropdownMenu,
	DropdownMenuButton,
	DropdownMenuItem,
	DropdownMenuPanel,
} from '../dropdown-menu';
import { Flex } from '../flex';

export type MainNavListDropdown = {
	label: ReactNode;
	endElement?: ReactNode;
	dropdown: ReactNode;
};

export function MainNavListItemDropdown(props: MainNavListDropdown) {
	return (
		<Flex as="li">
			<DropdownMenu>
				<Fragment>
					<DropdownMenuButton>
						{props.endElement}
						{props.label}
					</DropdownMenuButton>
					<DropdownMenuPanel palette="light">
						<DropdownMenuItem>Profile</DropdownMenuItem>
						<DropdownMenuItem>Messages</DropdownMenuItem>
						<DropdownMenuItem>Account settings</DropdownMenuItem>
					</DropdownMenuPanel>
				</Fragment>
			</DropdownMenu>
		</Flex>
	);
}
