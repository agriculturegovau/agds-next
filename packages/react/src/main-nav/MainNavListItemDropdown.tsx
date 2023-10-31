import { ReactNode } from 'react';
import { BaseButton } from '../button';
import {
	DropdownMenu,
	useDropdownMenuButton,
	useDropdownMenuContext,
} from '../dropdown-menu';
import { ChevronDownIcon, ChevronUpIcon } from '../icon';
import { localPalette } from './localPalette';

export type MainNavListDropdown = {
	label: ReactNode;
	endElement?: ReactNode;
	beforeElement?: ReactNode;
	dropdown: ReactNode;
};

export function MainNavListItemDropdown(props: MainNavListDropdown) {
	return (
		<DropdownMenu popoverPlacement="bottom-end" popoverOffset={-8}>
			<AppLayoutHeaderAccountDropdownButton {...props} />
			{props.dropdown}
		</DropdownMenu>
	);
}

function AppLayoutHeaderAccountDropdownButton({
	label,
	beforeElement,
	endElement,
}: MainNavListDropdown) {
	const { isMenuOpen } = useDropdownMenuContext();
	const { ref, ...buttonProps } = useDropdownMenuButton();
	return (
		<BaseButton
			ref={ref}
			css={[
				isMenuOpen ? { background: localPalette.linkHoverBg } : undefined,
				{
					'&:hover': {
						// TODO fix
						'& > span:first-of-type': { textDecoration: 'none !important' },
					},
				},
			]}
			{...buttonProps}
		>
			{beforeElement}
			<span data-agds-dropdown>{label}</span>
			{endElement}
			{isMenuOpen ? (
				<ChevronUpIcon size="sm" weight="bold" css={{ flexShrink: 0 }} />
			) : (
				<ChevronDownIcon size="sm" weight="bold" css={{ flexShrink: 0 }} />
			)}
		</BaseButton>
	);
}
