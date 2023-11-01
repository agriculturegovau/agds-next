import { ReactNode } from 'react';
import { BaseButton } from '../button';
import { packs } from '../core';
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
			<MainNavListItemDropdownButton {...props} />
			{props.dropdown}
		</DropdownMenu>
	);
}

function MainNavListItemDropdownButton({
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
				{ maxWidth: '16rem', overflow: 'hidden' },
			]}
			{...buttonProps}
		>
			{beforeElement}
			<span data-main-nav-list-item-label css={packs.truncate}>
				{label}
			</span>
			{endElement}
			{isMenuOpen ? (
				<ChevronUpIcon size="sm" weight="bold" css={{ flexShrink: 0 }} />
			) : (
				<ChevronDownIcon size="sm" weight="bold" css={{ flexShrink: 0 }} />
			)}
		</BaseButton>
	);
}
